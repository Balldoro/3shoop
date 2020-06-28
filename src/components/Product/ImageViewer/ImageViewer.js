import React from "react";
import {
  CloseButton,
  ButtonContainer,
  Background,
  Image,
  Wrapper
} from "./ImageViewerStyles";
import { FaTimes } from "react-icons/fa";

function ImageViewer({ src, handleOnClick }) {
  return (
    <Background onClick={handleOnClick}>
      <Wrapper>
        <ButtonContainer>
          <CloseButton>
            <FaTimes />
          </CloseButton>
        </ButtonContainer>
        <Image src={src} alt="" />
      </Wrapper>
    </Background>
  );
}

export default ImageViewer;
