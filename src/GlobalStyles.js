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
  margin: 0 auto;
`;
