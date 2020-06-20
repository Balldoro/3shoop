import styled from "styled-components";

export const ModelViewer = styled.div`
  width: 100%;
  position: relative;
  & > canvas {
    border: 1px solid #dcdcdc;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    display: block;
    width: 100% !important;
    height: 100% !important;
    cursor: grab;
  }
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
