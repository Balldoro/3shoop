import React from "react";
import { BlockContainer } from "../../GlobalStyles";
import {
  Grid,
  Category,
  CategoryTitle,
  ImageContainer,
  Title,
  SectionTitle
} from "./HomeStyles";
import animals from "./animals.jpg";
import cars from "./cars.jpg";
import characters from "./characters.jpg";
import hero from "./hero.jpg";

function Home() {
  return (
    <BlockContainer>
      <main>
        <Title background={hero}>Shop with professional 3d models</Title>
        <section>
          <SectionTitle>Categories</SectionTitle>
          <Grid>
            <Category>
              <ImageContainer>
                <img src={cars} alt="" />
              </ImageContainer>
              <CategoryTitle>Cars</CategoryTitle>
            </Category>
            <Category>
              <ImageContainer>
                <img src={animals} alt="" />
              </ImageContainer>
              <CategoryTitle>Animals</CategoryTitle>
            </Category>
            <Category>
              <ImageContainer>
                <img src={characters} alt="" />
              </ImageContainer>
              <CategoryTitle>Characters</CategoryTitle>
            </Category>
            <Category>
              <ImageContainer>
                <img src={cars} alt="" />
              </ImageContainer>
              <CategoryTitle>Cars</CategoryTitle>
            </Category>
          </Grid>
        </section>
      </main>
    </BlockContainer>
  );
}

export default Home;
