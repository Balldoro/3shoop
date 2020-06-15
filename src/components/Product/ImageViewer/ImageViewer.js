import React from "react";
import {
  CloseButton,
  ButtonContainer,
  Background,
  Image
} from "./ImageViewerStyles";
import { FaTimes } from "react-icons/fa";

function ImageViewer({ src, handleOnClick }) {
  return (
    <Background>
      <div style={{ position: "relative" }}>
        <ButtonContainer>
          <CloseButton onClick={handleOnClick}>
            <FaTimes />
          </CloseButton>
        </ButtonContainer>
        <Image src={src} alt="" />
      </div>
    </Background>
  );
}

export default ImageViewer;
