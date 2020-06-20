import React, { useEffect, useState, useContext } from "react";
import { BlockContainer } from "../../GlobalStyles";
import {
  Wrapper,
  Button,
  PurchaseContainer,
  ProductPrice,
  ProductTitle,
  ProductHeader,
  ProductText,
  ProductSubTitle,
  ProductInfo
} from "./ProductStyles";
import { fetchStorageURL, fetchProduct } from "../../helpers/firabaseFunctions";
import { CartContext } from "../../context/CartContext";
import ProductModel from "./ProductModel/ProductModel";
import Slider from "./Slider/Slider";
import ImageViewer from "./ImageViewer/ImageViewer";

function Product({ match: { params }, location: { state } }) {
  const [product, setProduct] = useState({});
  const [viewImageSrc, setViewImageSrc] = useState(null);
  const { addItemToCart, deleteItemFromCart, checkIfItemIsInCart } = useContext(
    CartContext
  );

  const removeViewImageSrc = () => {
    setViewImageSrc(null);
  };

  useEffect(() => {
    const collection = params.slug;
    const doc = params.id;
    const getProductData = async () => {
      if (state == null) {
        const product = await fetchProduct(collection, doc);
        setProduct(product);
      } else {
        const product = state;
        product.img = await fetchStorageURL(product.imgRef);
        product.path = `${collection}/${doc}`;
        product.model = await fetchStorageURL(product.modelRef);
        setProduct(product);
      }
    };
    getProductData();
  }, [state, params]);

  return (
    <Wrapper>
      {Object.entries(product).length !== 0 && (
        <BlockContainer>
          <ProductHeader>
            <ProductTitle>{product.name}</ProductTitle>
            <PurchaseContainer>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              {checkIfItemIsInCart(product.id) ? (
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
          <ProductModel model={product.model} />
          <Slider>
            {product.img.map(imgSrc => (
              <img
                src={imgSrc}
                alt=""
                key={imgSrc}
                onClick={() => setViewImageSrc(imgSrc)}
              />
            ))}
          </Slider>
          {viewImageSrc && (
            <ImageViewer
              src={viewImageSrc}
              handleOnClick={removeViewImageSrc}
            />
          )}
          <ProductInfo>
            <ProductSubTitle>Credits</ProductSubTitle>
            <ProductText>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.credits}
              >
                {product.credits}
              </a>
            </ProductText>
          </ProductInfo>
        </BlockContainer>
      )}
    </Wrapper>
  );
}
export default Product;
