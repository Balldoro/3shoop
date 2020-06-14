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
  const [isWireframe, setIsWireframe] = useState(false);
  useEffect(() => {
    const modelContainer = cnv.current;
    let cnvWidth = modelContainer.clientWidth;
    let cnvHeight;
    if (cnvWidth === window.innerWidth) {
      cnvHeight = window.innerHeight;
    } else {
      cnvHeight = cnvWidth / 1.8;
    }

    const resizeModelView = () => {
      cnvWidth = modelContainer.clientWidth;
      if (cnvWidth === window.innerWidth) {
        cnvHeight = window.innerHeight;
      } else {
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
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.5;
    renderer.shadowMap.enabled = true;

    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    const spotLight = new THREE.SpotLight(0xffa95c, 4);
    scene.add(spotLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = true;
    controls.maxDistance = 8500;

    let frameID;

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      spinner.current.remove();
    };
    loadingManager.onStart = () => {
      cnv.current.appendChild(spinner.current);
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

          spotLight.position.set(
            camera.position.x + 10,
            camera.position.y + 10,
            camera.position.z + 10
          );

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
  }, [cnv, model, spinner, isWireframe]);

  const fullScreenMode = () => {
    if (document.fullscreenElement) {
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
          <MdFullscreen />
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
