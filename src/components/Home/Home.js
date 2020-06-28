import React, { useEffect, useState } from "react";
import { BlockContainer, SectionTitle, Grid } from "../../GlobalStyles";
import {
  Category,
  CategoryTitle,
  ImageContainer,
  Title,
  LinkWrapper
} from "./HomeStyles";
import hero from "./hero.jpg";
import {
  fetchStorageURL,
  fetchCollection
} from "../../helpers/firabaseFunctions";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const collection = await fetchCollection("categories");
      const categories = await Promise.all(
        collection.docs.map(async doc => {
          const itemData = doc.data();
          const image = await fetchStorageURL(itemData.image);
          return { name: itemData.name, image };
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
                <Category key={category.name}>
                  <LinkWrapper to={`/${category.name}`}>
                    <ImageContainer>
                      <img src={category.image} alt={category.name} />
                    </ImageContainer>
                    <CategoryTitle>{category.name}</CategoryTitle>
                  </LinkWrapper>
                </Category>
              ))}
          </Grid>
        </section>
      </main>
    </BlockContainer>
  );
}

export default Home;
