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
  FilterContent,
  StyledRange
} from "./FilterStyles";
import { SectionTitle, BlockContainer } from "../../GlobalStyles";
import useVisibleComponent from "../../hooks/useVisibleComponent";
import "rc-slider/assets/index.css";

function Filter() {
  const [isActive, setIsActive] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
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
                  <StyledRange
                    className={"range-container"}
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onChange={value => setPriceRange(value)}
                    marks={{ 0: "$0", 1000: "$1000" }}
                    trackStyle={[{ backgroundColor: "#3d98b9", height: "8px" }]}
                    railStyle={{ height: "8px" }}
                    dotStyle={{
                      border: "none",
                      backgroundColor: "#3d98b9",
                      bottom: "-4px"
                    }}
                    allowCross={false}
                  />
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
