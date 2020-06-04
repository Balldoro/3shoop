import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createProductModel(cnv, model) {
  let cnvWidth = cnv.clientWidth;
  let cnvHeight = cnvWidth / 2.1;
  window.addEventListener("resize", () => {
    if (cnv !== null) {
      cnvWidth = cnv.clientWidth;
      cnvHeight = cnvWidth / 2.1;
      renderer.setSize(cnvWidth, cnvHeight);
      camera.aspect = cnvWidth / cnvHeight;
    }
  });
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#3D98B9");

  const camera = new THREE.PerspectiveCamera(75, cnvWidth / cnvHeight, 1, 2000);
  camera.position.set(0, 150, 200);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(cnvWidth, cnvHeight);

  const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
  scene.add(hemiLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.screenSpacePanning = true;

  const loader = new GLTFLoader();
  loader.load(
    model,
    function(gltf) {
      gltf.scene.position.set(0, 0, 0);
      scene.add(gltf.scene);
    },
    undefined,
    function(error) {
      console.error(error);
    }
  );
  cnv.appendChild(renderer.domElement);

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
}

export default createProductModel;
