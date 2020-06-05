import React, { useEffect, useState, useRef } from "react";
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
import createProductModel from "./createProductModel";
import {
  fetchItemFromCollection,
  fetchStorageURL
} from "../../helpers/firabaseFunctions";

function Product({ match, location }) {
  const [product, setProduct] = useState({});
  const modelContainer = useRef();
  useEffect(() => {
    const getProductData = async () => {
      const fetchProduct = async () => {
        const collection = match.params.slug;
        const doc = match.params.id;
        const item = await fetchItemFromCollection(collection, doc);
        item.img = await fetchStorageURL(item.imgRef);
        item.model = await fetchStorageURL(item.modelRef);
        return item;
      };
      if (location.state == null) {
        const product = await fetchProduct();
        setProduct(product);
      } else {
        const product = location.state;
        product.model = await fetchStorageURL(product.modelRef);
        setProduct(product);
      }
    };
    getProductData();
  }, [match, location]);
  useEffect(() => {
    if (Object.entries(product).length !== 0) {
      createProductModel(modelContainer.current, product.model);
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
