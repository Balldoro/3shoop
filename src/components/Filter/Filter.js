import React, { useState, createRef } from "react";
import { FaFilter } from "react-icons/fa";
import {
  ToggleButton,
  FiltersContainer,
  CategoryTitle,
  Category,
  Label,
  RangeInput,
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

function Filter() {
  const [isActive, setIsActive] = useState(false);
  const filterContainer = createRef();
  const removeActive = () => {
    setIsActive(false);
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
                  <RangeInput type="range" />
                  <PriceManualBoxesContainer>
                    <PriceManualBox placeholder="min" />
                    <PriceManualBox placeholder="max" />
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
