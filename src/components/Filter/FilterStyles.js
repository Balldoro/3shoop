import styled from "styled-components";

export const FilterContent = styled.div`
  width: 40%;
  max-width: 220px;
  & > button {
    width: 100%;
  }
`;

export const ToggleButton = styled.button`
  border: 1px solid #dcdcdc;
  background-color: transparent;
  width: 40%;
  max-width: 220px;
  height: 45px;
  font-size: 1.05rem;
  border-radius: 5px;
  cursor: pointer;
`;

export const FiltersContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 55px);
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  & > h2 {
    margin-bottom: 0;
    @media (min-width: 420px) {
      display: none;
    }
  }
  @media (min-width: 420px) {
    top: 100%;
    width: 45%;
    min-width: 280px;
    min-height: auto;
    margin-bottom: 80px;
  }
`;

export const CategoriesContainer = styled.div`
  margin-bottom: 80px;
  @media (min-width: 420px) {
    margin-bottom: 0;
  }
`;

export const Category = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

export const CategoryTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const Label = styled.label`
  font-size: 1.05rem;
`;

export const Checkbox = styled.input`
  border: 1px solid #3d98b9;
  width: 18px;
  height: 18px;
  margin-right: 0.6rem;
`;

export const RangeInput = styled.input`
  width: 100%;
  margin: 13.8px 0;
  background-color: transparent;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: #3d98b9;
    border: 0.5px solid #3d98b9;
    border-radius: 3px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    margin-top: -9px;
    width: 24px;
    height: 24px;
    background: #fff;
    border: 1px solid #3d98b9;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    position: relative;
  }
`;

export const PriceManualBoxesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 0;
`;

export const PriceManualBox = styled.input`
  position: relative;
  padding: 6px 8px;
  border: 2px solid #9fd3e6;
  border-radius: 5px;
  width: 40%;
  text-align: center;
  font-size: 1.05rem;
  background-color: #f9fdff;
`;

export const ActionButtonsContainer = styled.div`
  padding: 15px 2.5%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  @media (min-width: 420px) {
    position: static;
    width: 100%;
    padding: 15px 0;
    justify-content: space-between;
  }
`;

export const SendButton = styled.button`
  background-color: #3d98b9;
  color: #fff;
  width: 40%;
  height: 50px;
  font-size: 1.05rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #3d98b9;
`;
