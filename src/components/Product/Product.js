import React, { useEffect, useState, useRef } from "react";
import { BlockContainer } from "../../GlobalStyles";
import {
  Wrapper,
  Button,
  PurchaseContainer,
  ProductPrice,
  ProductTitle,
  ModelViewer,
  ProductHeader,
  ProductText,
  ProductSubTitle
} from "./ProductStyles";
import createProductModel from "./createProductModel";
import {
  fetchItemFromCollection,
  fetchStorageURL
} from "../../helpers/firabaseFunctions";

function Product({
  match,
  location,
  addItemToCart,
  itemsInCart,
  deleteItemFromCart
}) {
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
  }, []);
  useEffect(() => {
    if (Object.entries(product).length !== 0) {
      createProductModel(modelContainer.current, product.model);
    }
  }, [product]);

  return (
    <Wrapper>
      <BlockContainer>
        {Object.entries(product).length !== 0 ? (
          <>
            <ProductHeader>
              <ProductTitle>{product.name}</ProductTitle>
              <PurchaseContainer>
                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                {itemsInCart.filter(item => item.id === product.id).length !==
                0 ? (
                  <Button onClick={() => deleteItemFromCart(product)}>
                    Remove from cart
                  </Button>
                ) : (
                  <Button onClick={() => addItemToCart(product)}>
                    Add to cart
                  </Button>
                )}
              </PurchaseContainer>
            </ProductHeader>
            <ModelViewer ref={modelContainer} />
            <ProductSubTitle>Description</ProductSubTitle>
            <ProductText>{product.description}</ProductText>
          </>
        ) : null}
      </BlockContainer>
    </Wrapper>
  );
}
export default Product;
