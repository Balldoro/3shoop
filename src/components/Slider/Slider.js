import React from "react";
import { CustomSlider } from "./SliderStyles";

function Slider({ value, handleChange }) {
  return (
    <CustomSlider
      min={0}
      max={1000}
      step={10}
      value={value}
      onChange={values => handleChange(values)}
      marks={{ 0: "$0", 1000: "$1000" }}
      allowCross={false}
    />
  );
}

export default Slider;
