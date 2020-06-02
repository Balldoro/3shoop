import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import getStorageURL from "../../helpers/getStorageURL";
import { BlockContainer, SectionTitle, Grid } from "../../GlobalStyles";
import { ProductInfo, Product } from "./CategoryStyles";

function Category({ match }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const collection = await db.collection(match.params.slug).get();
      const items = await Promise.all(
        collection.docs.map(async doc => {
          const { name, price, imgRef } = doc.data();
          const img = await getStorageURL(imgRef);
          return { name, price, img, id: doc.id };
        })
      );
      setItems(items);
    };
    fetchItems();
  }, [match]);
  return (
    <section>
      <SectionTitle>{match.params.slug}</SectionTitle>
      <BlockContainer>
        <Grid>
          {items.length !== 0
            ? items.map(item => (
                <Product key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <ProductInfo>
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </ProductInfo>
                </Product>
              ))
            : null}
        </Grid>
      </BlockContainer>
    </section>
  );
}
export default Category;
