import React from "react";
import { CustomSlider } from "./SliderStyles";
import { PriceManualBoxesContainer, PriceManualBox } from "./SliderStyles";

function Slider({ priceRange, handleChange }) {
  return (
    <>
      <CustomSlider
        min={0}
        max={200}
        step={10}
        value={priceRange}
        onChange={values => handleChange(values)}
        marks={{ 0: "$0", 200: "$200" }}
        allowCross={false}
      />
      <PriceManualBoxesContainer>
        <PriceManualBox value={`$${priceRange[0]}`} readOnly />
        <PriceManualBox value={`$${priceRange[1]}`} readOnly />
      </PriceManualBoxesContainer>
    </>
  );
}

export default Slider;
