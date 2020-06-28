import React, { useEffect, useState } from "react";
import { BlockContainer, SectionTitle, Grid } from "../../GlobalStyles";
import { Title } from "./HomeStyles";
import hero from "./hero.jpg";
import {
  fetchStorageURL,
  fetchCollection
} from "../../helpers/firabaseFunctions";
import CategoryItem from "./CategoryItem/CategoryItem";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const collection = await fetchCollection("categories");
      const categories = await Promise.all(
        collection.docs.map(async doc => {
          const itemData = doc.data();
          const img = await fetchStorageURL(itemData.image);
          return { name: itemData.name, img };
        })
      );
      setCategories(categories);
    };
    fetchCategories();
  }, []);
  return (
    <BlockContainer>
      <main>
        <Title background={hero}>Shop with professional 3d models</Title>
        <section>
          <SectionTitle>Categories</SectionTitle>
          <Grid>
            {categories.length &&
              categories.map(category => (
                <CategoryItem data={category} key={category.name} />
              ))}
          </Grid>
        </section>
      </main>
    </BlockContainer>
  );
}

export default Home;
