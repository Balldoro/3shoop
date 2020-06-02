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
import { db } from "../../firebase/index";
import getStorageURL from "../../helpers/getStorageURL";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const collection = await db.collection("categories").get();
      const categories = await Promise.all(
        collection.docs.map(async doc => {
          const itemData = doc.data();
          const image = await getStorageURL(itemData.image);
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
            {categories.length !== 0
              ? categories.map(category => (
                  <Category key={category.name}>
                    <LinkWrapper to={`/${category.name}`}>
                      <ImageContainer>
                        <img src={category.image} alt={category.name} />
                      </ImageContainer>
                      <CategoryTitle>{category.name}</CategoryTitle>
                    </LinkWrapper>
                  </Category>
                ))
              : null}
          </Grid>
        </section>
      </main>
    </BlockContainer>
  );
}

export default Home;
