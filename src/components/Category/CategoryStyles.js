import styled from "styled-components";

export const Title = styled.h1`
  background-color: #3d98b9;
  color: #fff;
  padding: 14px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Product = styled.div`
  max-width: 380px;
`;

export const ProductInfo = styled.div`
  background-color: #3a3a3a;
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 8px;
  margin-top: -4px;
`;

export const OptionsContainer = styled.aside`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 420px) {
    position: relative;
  }
`;
