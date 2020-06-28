import React, { useEffect, useState } from "react";
import { BlockContainer, Grid } from "../../GlobalStyles";
import { OptionsContainer, Title } from "./CategoryStyles";
import {
  fetchCollection,
  convertToProductObjectsFrom
} from "../../helpers/firabaseFunctions";
import Sort from "./Sort/Sort";
import Filter from "./Filter/Filter";
import ProductItem from "./ProductItem/ProductItem";

function Category({
  match: {
    params: { slug }
  }
}) {
  const categoryCollection = slug;
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchItems = async () => {
      const collection = await fetchCollection(categoryCollection);
      const items = await convertToProductObjectsFrom(collection);
      setItems(items);
    };
    if (isMounted) {
      fetchItems();
    }
    return () => (isMounted = false);
  }, [categoryCollection]);

  return (
    <main style={{ position: "relative" }}>
      <Title>{categoryCollection}</Title>
      <BlockContainer>
        <OptionsContainer>
          <Filter
            collectionToFilter={categoryCollection}
            updateItems={setItems}
          />
          <Sort setItems={setItems} />
        </OptionsContainer>
        <Grid>
          {items.length &&
            items.map(item => (
              <ProductItem
                key={item.id}
                data={item}
                path={`${categoryCollection}/${item.id}`}
              />
            ))}
        </Grid>
      </BlockContainer>
    </main>
  );
}
export default Category;
