import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createProductModel(cnv, model) {
  let cnvWidth = cnv.clientWidth;
  let cnvHeight = cnvWidth / 1.8;
  window.addEventListener("resize", () => {
    if (cnv !== null) {
      cnvWidth = cnv.clientWidth;
      cnvHeight = cnvWidth / 1.8;
      renderer.setSize(cnvWidth, cnvHeight);
      camera.aspect = cnvWidth / cnvHeight;
    }
  });
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#f1f1f1");

  const camera = new THREE.PerspectiveCamera(75, cnvWidth / cnvHeight, 1, 9500);
  camera.position.set(0, 150, 200);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(cnvWidth, cnvHeight);

  const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
  scene.add(hemiLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.screenSpacePanning = true;
  controls.maxDistance = 8500;

  const loader = new GLTFLoader();
  loader.load(
    model,
    function(gltf) {
      const model = gltf.scene;
      const animations = gltf.animations;
      model.position.set(0, 0, 0);
      scene.add(model);

      const mixer = new THREE.AnimationMixer(model);
      const clock = new THREE.Clock();

      if (animations.length !== 0) {
        const action = mixer.clipAction(animations[0]); // play the first animation
        action.play();
      }
      const animate = () => {
        requestAnimationFrame(animate);
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
  cnv.appendChild(renderer.domElement);
}

export default createProductModel;
