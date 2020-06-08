import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fafafa;
  color: #3a3a3a;
  min-height: calc(100vh - 55px);
  padding: 1rem 0;
`;

export const ModelViewer = styled.div`
  width: 100%;
  & > canvas {
    border: 1px solid #dcdcdc;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.85rem;
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
  background-color: #3a3a3a;
  @media (min-width: 620px) {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    background-color: transparent;
  }
`;

export const ProductPrice = styled.span`
  font-size: 1.6rem;
  color: #fff;
  margin-right: 0.5rem;
  @media (min-width: 620px) {
    margin-right: 1rem;
    color: #3a3a3a;
  }
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
  padding: 12px 0;
  width: 190px;
  font-size: 1rem;
  cursor: pointer;
`;

export const ProductSubTitle = styled.h3`
  font-weight: 400;
  font-size: 1.35rem;
  border-bottom: 2px solid #3d98b9;
  padding-bottom: 0.25rem;
  margin: 0.35rem 0;
  display: inline-block;
`;

export const ProductText = styled.p`
  font-size: 1rem;
`;
