import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    }
    ul {
        list-style: none;
    }
    a {
        text-transform: none;
        color: transparent;
    }
    img {
        max-width: 100%;
    }
`;

export const BlockContainer = styled.div`
  max-width: 1180px;
  width: 95%;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  @media (min-width: 380px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SectionTitle = styled.h2`
  background-color: #3d98b9;
  color: #fff;
  padding: 14px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;
