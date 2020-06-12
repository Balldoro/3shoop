import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { createRef, useEffect } from "react";
import { ModelViewer } from "./ProductStyles";

function ProductModel(model) {
  const cnv = createRef();
  useEffect(() => {
    const modelContainer = cnv.current;
    let cnvWidth = modelContainer.clientWidth;
    let cnvHeight = cnvWidth / 1.8;

    const resizeModelView = () => {
      cnvWidth = modelContainer.clientWidth;
      cnvHeight = cnvWidth / 1.8;
      renderer.setSize(cnvWidth, cnvHeight);
      camera.aspect = cnvWidth / cnvHeight;
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
    camera.position.set(0, 150, 200);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(cnvWidth, cnvHeight);

    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = true;
    controls.maxDistance = 8500;

    let frameID;

    const loader = new GLTFLoader();
    loader.load(
      model.model,
      function(gltf) {
        const model = gltf.scene;
        const animations = gltf.animations;
        model.position.set(0, 0, 0);
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
  }, [cnv, model]);

  return <ModelViewer ref={cnv} />;
}

export default React.memo(ProductModel);
