import React, { useEffect, useState, useRef } from "react";
import { db } from "../../firebase";
import getStorageURL from "../../helpers/getStorageURL";
import { BlockContainer } from "../../GlobalStyles";
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
import ShowProductModel from "./ShowProductModel";

function Product({ match, location }) {
  const [product, setProduct] = useState({});
  const modelContainer = useRef();
  useEffect(() => {
    const fetchProduct = async () => {
      const doc = await db
        .collection(match.params.slug)
        .doc(match.params.id)
        .get();
      const { imgRef, modelRef, name, price, description } = doc.data();
      const img = await getStorageURL(imgRef);
      const model = await getStorageURL(modelRef);
      setProduct({ img, name, price, description, id: doc.id, model });
    };
    if (location.state == null) {
      fetchProduct();
    } else {
      const getModelRef = async () => {
        const model = await getStorageURL(location.state.modelRef);
        location.state.model = model;
        setProduct(location.state);
      };
      getModelRef();
    }
  }, [match, location]);

  useEffect(() => {
    if (Object.entries(product).length !== 0) {
      ShowProductModel(modelContainer.current, product.model);
    }
  }, [product]);

  return (
    <Wrapper>
      <BlockContainer>
        <ModelViewer ref={modelContainer}></ModelViewer>
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
