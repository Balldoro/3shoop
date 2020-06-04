import React, { useEffect, useState, useRef } from "react";
import { db } from "../../firebase";
import getStorageURL from "../../helpers/getStorageURL";
import { BlockContainer } from "../../GlobalStyles";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  Wrapper,
  ProductInfo,
  Button,
  ProductDescription,
  PurchaseContainer,
  ProductPrice,
  ProductTitle,
  ModelViewer
} from "./ProductStyles";

function Product({ match, location }) {
  const [product, setProduct] = useState({});
  const cnv = useRef();
  useEffect(() => {
    const fetchProduct = async () => {
      const doc = await db
        .collection(match.params.slug)
        .doc(match.params.id)
        .get();
      const { imgRef, name, price, description } = doc.data();
      const img = await getStorageURL(imgRef);
      const model = await getStorageURL("gs://shoop-9e756.appspot.com/out.glb");
      setProduct({ img, name, price, description, id: doc.id, model });
    };
    if (location.state == null) {
      fetchProduct();
    } else {
      const getModelRef = async () => {
        const model = await getStorageURL(
          "gs://shoop-9e756.appspot.com/out.glb"
        );
        location.state.model = model;
        setProduct(location.state);
      };
      getModelRef();
    }
  }, [match, location]);

  useEffect(() => {
    let cnvWidth = cnv.current.clientWidth;
    let height = cnvWidth / 2.1;
    window.addEventListener("resize", () => {
      if (cnv.current !== null) {
        cnvWidth = cnv.current.clientWidth;
        height = cnvWidth / 2.1;
        renderer.setSize(cnvWidth, height);
        camera.aspect = cnvWidth / height;
      }
    });
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#3D98B9");

    const camera = new THREE.PerspectiveCamera(75, cnvWidth / height, 1, 2000);
    camera.position.set(0, 150, 200);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(cnvWidth, height);

    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    controls.screenSpacePanning = true;

    const loader = new GLTFLoader();
    if (Object.entries(product).length !== 0) {
      loader.load(
        product.model,
        function(gltf) {
          gltf.scene.position.set(0, 0, 0);
          scene.add(gltf.scene);
        },
        undefined,
        function(error) {
          console.error(error);
        }
      );
      cnv.current.appendChild(renderer.domElement);

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    }
  }, [product]);

  return (
    <Wrapper>
      <BlockContainer>
        <ModelViewer ref={cnv}></ModelViewer>
        {Object.entries(product).length !== 0 ? (
          <>
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductInfo>
            <PurchaseContainer>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <Button>Add to cart</Button>
            </PurchaseContainer>
          </>
        ) : null}
      </BlockContainer>
    </Wrapper>
  );
}
export default Product;
