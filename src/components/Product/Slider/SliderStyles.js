import styled from "styled-components";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0.5rem;
  }
  .slick-list {
    margin: 1rem -0.5rem -1rem -0.5rem;
    & > div {
      margin-left: 0;
      & img {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
  .slick-prev,
  .slick-next {
    width: 35px;
    height: 35px;
    z-index: 10;
    &::before {
      font-size: 1.8rem;
      color: #3d98b9;
    }
    @media (hover: hover) {
      &:hover {
        &::before {
          color: #3d98b9;
        }
      }
    }
  }
  .slick-prev {
    transform: translate(100%, -50%);
  }
  .slick-next {
    transform: translate(-100%, -50%);
  }
`;
