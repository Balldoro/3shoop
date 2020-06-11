import React, { useState, createRef } from "react";
import { FaFilter } from "react-icons/fa";
import {
  ToggleButton,
  FiltersContainer,
  CategoryTitle,
  Category,
  Label,
  Checkbox,
  ActionButtonsContainer,
  SendButton,
  PriceManualBoxesContainer,
  PriceManualBox,
  CategoriesContainer,
  FilterContent
} from "./FilterStyles";
import { SectionTitle, BlockContainer } from "../../GlobalStyles";
import useVisibleComponent from "../../hooks/useVisibleComponent";
import "rc-slider/assets/index.css";
import Slider from "../Slider/Slider";

function Filter() {
  const [isActive, setIsActive] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const filterContainer = createRef();
  const removeActive = () => {
    setIsActive(false);
  };
  const updatePriceRange = values => {
    setPriceRange(values);
  };
  useVisibleComponent(filterContainer, removeActive);
  return (
    <FilterContent ref={filterContainer}>
      <ToggleButton onClick={() => setIsActive(!isActive)}>
        <FaFilter />
        Filters
      </ToggleButton>
      {isActive ? (
        <FiltersContainer>
          <SectionTitle>Filters</SectionTitle>
          <BlockContainer>
            <CategoriesContainer>
              <Category>
                <CategoryTitle>Attributes</CategoryTitle>
                <form>
                  <Label>
                    <Checkbox type="checkbox" />
                    Animated
                  </Label>
                </form>
              </Category>
              <Category>
                <CategoryTitle>Price</CategoryTitle>
                <form>
                  <Slider value={priceRange} handleChange={updatePriceRange} />
                  <PriceManualBoxesContainer>
                    <PriceManualBox
                      placeholder="min"
                      min="0"
                      max="1000"
                      value={priceRange[0]}
                      readOnly
                    />
                    <PriceManualBox
                      placeholder="max"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      readOnly
                    />
                  </PriceManualBoxesContainer>
                </form>
              </Category>
              <ActionButtonsContainer>
                <ToggleButton onClick={() => setIsActive(false)}>
                  Cancel
                </ToggleButton>
                <SendButton>Filter</SendButton>
              </ActionButtonsContainer>
            </CategoriesContainer>
          </BlockContainer>
        </FiltersContainer>
      ) : null}
    </FilterContent>
  );
}

export default Filter;
