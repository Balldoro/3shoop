import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 2.5%;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 1px;
  top: 1px;
  background-color: #f1f1f1;
`;
