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
import {
  fetchItemFromCollection,
  fetchStorageURL
} from "../../helpers/firabaseFunctions";
import { CartContext } from "../../context/CartContext";
import ProductModel from "./ProductModel/ProductModel";
import Slider from "./Slider/Slider";
import ImageViewer from "./ImageViewer/ImageViewer";

function Product({ match: { params }, location: { state } }) {
  const [product, setProduct] = useState({});
  const [viewImageSrc, setViewImageSrc] = useState(null);
  const { itemsInCart, addItemToCart, deleteItemFromCart } = useContext(
    CartContext
  );

  const removeViewImageSrc = () => {
    setViewImageSrc(null);
  };

  useEffect(() => {
    const getProductData = async () => {
      const fetchProduct = async () => {
        const collection = params.slug;
        const doc = params.id;
        const item = await fetchItemFromCollection(collection, doc);
        item.img = await fetchStorageURL(item.imgRef);
        item.model = await fetchStorageURL(item.modelRef);
        item.path = `${params.slug}/${params.id}`;
        return item;
      };
      if (state == null) {
        const product = await fetchProduct();
        setProduct(product);
      } else {
        const product = state;
        product.img = await fetchStorageURL(product.imgRef);
        product.path = `${params.slug}/${params.id}`;
        product.model = await fetchStorageURL(product.modelRef);
        setProduct(product);
      }
    };
    getProductData();
  }, [state, params]);

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
          </>
        ) : null}
      </BlockContainer>
    </Wrapper>
  );
}
export default Product;
