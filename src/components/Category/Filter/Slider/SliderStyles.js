import styled from "styled-components";
import Range from "rc-slider/lib/Range";
import createSliderWithTooltip from "rc-slider/lib/createSliderWithTooltip";

export const CustomSlider = styled(createSliderWithTooltip(Range))`
  width: 93%;
  margin: 0 auto 3.2rem auto;
  & .rc-slider-handle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #3d98b9;
    margin-top: -7px;
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #3d98b9;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  & .rc-slider-mark {
    width: 96%;
    left: 1.25%;
  }
  & .rc-slider-mark-text {
    color: #3a3a3a;
    font-size: 0.95rem;
    margin: 0.5rem 0;
  }
  & .rc-slider-track {
    background-color: #3d98b9;
    height: 8px;
  }
  & .rc-slider-rail {
    height: 8px;
  }
  & .rc-slider-dot {
    border: none;
    background-color: #3d98b9;
    bottom: -4px;
  }
`;

export const PriceManualBoxesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 0;
`;

export const PriceManualBox = styled.input`
  position: relative;
  padding: 12px 0;
  border: 2px solid #9fd3e6;
  border-radius: 5px;
  width: 40%;
  text-align: center;
  font-size: 1.05rem;
  background-color: #f9fdff;
`;
