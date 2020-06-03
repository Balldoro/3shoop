import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #3a3a3a;
  color: #fff;
  min-height: calc(100vh - 55px);
  padding: 1.5rem 0;
`;

export const ModelViewer = styled.div`
  height: 700px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const PurchaseContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 2.5%;
  z-index: 10;
  background-color: #fff;
`;

export const ProductPrice = styled.span`
  font-size: 1.6rem;
  color: #3a3a3a;
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  border: none;
  background-color: #3d98b9;
  color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 12px 14px;
  width: 150px;
  font-size: 1rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
`;
