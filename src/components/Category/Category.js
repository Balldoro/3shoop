import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import getStorageURL from "../../helpers/getStorageURL";
import { BlockContainer, SectionTitle, Grid } from "../../GlobalStyles";
import { ProductInfo, Product } from "./CategoryStyles";
import { Link } from "react-router-dom";

function Category({ match }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const collection = await db.collection(match.params.slug).get();
      const items = await Promise.all(
        collection.docs.map(async doc => {
          const { name, price, imgRef, description } = doc.data();
          const img = await getStorageURL(imgRef);
          return { name, price, img, description, id: doc.id };
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
                  <Link
                    to={{
                      pathname: `${match.params.slug}/${item.id}`,
                      state: item
                    }}
                  >
                    <img src={item.img} alt={item.name} />
                    <ProductInfo>
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </ProductInfo>
                  </Link>
                </Product>
              ))
            : null}
        </Grid>
      </BlockContainer>
    </section>
  );
}
export default Category;
