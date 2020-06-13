import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { createRef, useEffect, useState } from "react";
import {
  ModelViewer,
  Settings,
  SettingsButton,
  SettingsButtonTip
} from "./ProductStyles";
import Spinner from "./Spinner/Spinner";
import { MdFullscreen, MdExtension } from "react-icons/md";

function ProductModel(model) {
  const cnv = createRef();
  const spinner = createRef();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  useEffect(() => {
    const modelContainer = cnv.current;
    let cnvWidth = modelContainer.clientWidth;
    let cnvHeight = cnvWidth / 1.8;
    if (isFullScreen) {
      cnvWidth = window.innerWidth;
      cnvHeight = window.innerHeight;
    }
    const resizeModelView = () => {
      if (isFullScreen) {
        cnvWidth = window.innerWidth;
        cnvHeight = window.innerHeight;
      } else {
        cnvWidth = modelContainer.clientWidth;
        cnvHeight = cnvWidth / 1.8;
      }
      camera.aspect = cnvWidth / cnvHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(cnvWidth, cnvHeight);
    };
    window.addEventListener("resize", resizeModelView);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f1f1f1");

    const camera = new THREE.PerspectiveCamera(
      75,
      cnvWidth / cnvHeight,
      1,
      9500
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(cnvWidth, cnvHeight);

    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = true;
    controls.maxDistance = 8500;

    let frameID;

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      spinner.current.remove();
    };

    const loader = new GLTFLoader(loadingManager);
    loader.load(
      model.model,
      function(gltf) {
        const model = gltf.scene;
        const animations = gltf.animations;

        const box = new THREE.Box3().setFromObject(model);
        const boxCenter = box.getCenter(new THREE.Vector3());
        const boxSize = box.getSize(new THREE.Vector3());
        const boxMaxDimension = Math.max(boxSize.x, boxSize.y, boxSize.z);

        if (isWireframe) {
          model.traverse(child => {
            if (child instanceof THREE.Mesh) {
              const wireframeGeometry = new THREE.WireframeGeometry(
                child.geometry
              );
              const wireframeMaterial = new THREE.LineBasicMaterial({
                color: "#3d98b9"
              });
              const wireframe = new THREE.LineSegments(
                wireframeGeometry,
                wireframeMaterial
              );
              wireframe.name = "wireframe";
              child.add(wireframe);
            }
          });
        } else {
          scene.remove().getObjectByName("wireframe");
        }

        model.position.set(
          model.position.x - boxCenter.x,
          model.position.y - boxCenter.y,
          model.position.z - boxCenter.z
        );

        camera.position.set(0, boxMaxDimension / 2, boxMaxDimension);
        camera.lookAt(model.position);
        scene.add(model);

        const mixer = new THREE.AnimationMixer(model);
        const clock = new THREE.Clock();

        if (animations.length !== 0) {
          const action = mixer.clipAction(animations[0]);
          action.play();
        }
        const animate = () => {
          frameID = requestAnimationFrame(animate);
          const delta = clock.getDelta();
          mixer.update(delta);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
    modelContainer.appendChild(renderer.domElement);
    const unmountModelView = () => {
      const stop = () => {
        cancelAnimationFrame(frameID);
      };
      modelContainer.removeChild(renderer.domElement);
      window.removeEventListener("resize", resizeModelView);
      stop();
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    };
    return () => unmountModelView();
  }, [cnv, model, spinner, isFullScreen, isWireframe]);

  const fullScreenMode = () => {
    setIsFullScreen(!isFullScreen);
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      cnv.current.requestFullscreen();
    }
  };

  return (
    <ModelViewer ref={cnv}>
      <Spinner ref={spinner} />
      <Settings>
        <SettingsButton onClick={fullScreenMode}>
          <MdFullscreen
            style={
              isFullScreen ? { backgroundColor: "#3d98b9", color: "#fff" } : {}
            }
          />
          <SettingsButtonTip>Full Screen</SettingsButtonTip>
        </SettingsButton>
        <SettingsButton onClick={() => setIsWireframe(!isWireframe)}>
          <MdExtension
            style={
              isWireframe ? { backgroundColor: "#3d98b9", color: "#fff" } : {}
            }
          />
          <SettingsButtonTip>Wireframe</SettingsButtonTip>
        </SettingsButton>
      </Settings>
    </ModelViewer>
  );
}

export default React.memo(ProductModel);
