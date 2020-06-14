import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider } from "./SliderStyles";

function Slider({ children }) {
  return (
    <StyledSlider
      slidesToShow={3}
      slidesToScroll={1}
      arrows={true}
      infinite={children.length > 3}
      responsive={[
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2,
            infinite: children.length > 2
          }
        }
      ]}
    >
      {children}
    </StyledSlider>
  );
}

export default Slider;
