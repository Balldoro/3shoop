import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fafafa;
  color: #3a3a3a;
  min-height: calc(100vh - 55px);
  padding: 1rem 0;
  padding-bottom: 75px;
`;

export const ModelViewer = styled.div`
  width: 100%;
  position: relative;
  & > canvas {
    border: 1px solid #dcdcdc;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    display: block;
    width: 100% !important;
    height: 100% !important;
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
  z-index: 20;
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

export const ProductInfo = styled.section`
  margin: 1rem 0;
`;

export const ProductSubTitle = styled.h3`
  font-weight: 400;
  font-size: 1.35rem;
  border-bottom: 2px solid #3d98b9;
  padding-bottom: 0.25rem;
  margin: 0.5rem 0;
  display: inline-block;
`;

export const ProductText = styled.p`
  font-size: 1rem;
`;

export const Settings = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 15px;
  display: flex;
`;

export const SettingsButton = styled.div`
  position: relative;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
  & > svg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 3px;
  }
  & > span {
    display: none;
  }
  @media (hover: hover) {
    &:hover {
      & > svg {
        background-color: #3d98b9;
        color: #fff;
      }
      & > span {
        display: inline;
      }
    }
  }
`;

export const SettingsButtonTip = styled.span`
  position: absolute;
  top: -40px;
  transform: translateX(-43%);
  background-color: #3d98b9;
  border-radius: 6px;
  color: #fff;
  width: 100px;
  text-align: center;
  padding: 5px;
  &::after {
    content: "";
    display: block;
    width: 0;
    position: absolute;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 14px solid #3d98b9;
    right: 1px;
  }
`;
