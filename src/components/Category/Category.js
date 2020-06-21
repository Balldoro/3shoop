import React, { useEffect, useState } from "react";
import { BlockContainer, Grid } from "../../GlobalStyles";
import {
  ProductInfo,
  Product,
  OptionsContainer,
  Title
} from "./CategoryStyles";
import { Link } from "react-router-dom";
import {
  fetchCollection,
  convertToProductObjectsFrom
} from "../../helpers/firabaseFunctions";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";

function Category({ match }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const collection = await fetchCollection(match.params.slug);
      const items = await convertToProductObjectsFrom(collection);
      setItems(items);
    };
    fetchItems();
  }, [match]);
  return (
    <main style={{ position: "relative" }}>
      <Title>{match.params.slug}</Title>
      <BlockContainer>
        <OptionsContainer>
          <Filter match={match} updateItems={setItems} />
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
    </main>
  );
}
export default Category;
