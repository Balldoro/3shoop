import React, { useEffect, useState } from "react";
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
  ProductTitle
} from "./ProductStyles";

function Product({ match, location }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const doc = await db
        .collection(match.params.slug)
        .doc(match.params.id)
        .get();
      const { imgRef, name, price, description } = doc.data();
      const img = await getStorageURL(imgRef);
      setProduct({ img, name, price, description, id: doc.id });
    };
    if (location.state == null) {
      fetchProduct();
    } else {
      setProduct(location.state);
    }
  }, [match, location]);

  return (
    <Wrapper>
      <BlockContainer>
        {Object.entries(product).length !== 0 ? (
          <>
            <ProductInfo>
              {console.log(product)}
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
