import React, { useEffect, useState } from "react";
import { BlockContainer, SectionTitle, Grid } from "../../GlobalStyles";
import { ProductInfo, Product, OptionsContainer } from "./CategoryStyles";
import { Link } from "react-router-dom";
import {
  fetchStorageURL,
  fetchCollection
} from "../../helpers/firabaseFunctions";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";

function Category({ match }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const collection = await fetchCollection(match.params.slug);
      const items = await Promise.all(
        collection.docs.map(async doc => {
          const { name, price, imgRef, modelRef, description } = doc.data();
          const img = await fetchStorageURL(imgRef);
          return { name, price, img, modelRef, description, id: doc.id };
        })
      );
      setItems(items);
    };
    fetchItems();
  }, [match]);
  return (
    <section style={{ position: "relative" }}>
      <SectionTitle>{match.params.slug}</SectionTitle>
      <BlockContainer>
        <OptionsContainer>
          <Filter />
          <Sort setItems={setItems} />
        </OptionsContainer>
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
