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
import { db } from "../../firebase/index";
import { convertToProductObjectsFrom } from "../../helpers/firabaseFunctions";

function Filter({ match, updateItems }) {
  const [isActive, setIsActive] = useState(false);
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1000]);
  const [animatedFilter, setAnimatedFilter] = useState(false);
  const filterContainer = createRef();
  const removeActive = () => {
    setIsActive(false);
  };
  const updatePriceRangeFilter = values => {
    setPriceRangeFilter(values);
  };
  const filterItems = async () => {
    const collection = await db
      .collection(match.params.slug)
      .where("price", ">=", priceRangeFilter[0])
      .where("price", "<=", priceRangeFilter[1])
      .where("animated", "==", animatedFilter)
      .get();
    const items = await convertToProductObjectsFrom(collection);
    updateItems(items);
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
                    <Checkbox
                      type="checkbox"
                      checked={animatedFilter}
                      onChange={() => setAnimatedFilter(!animatedFilter)}
                    />
                    Animated
                  </Label>
                </form>
              </Category>
              <Category>
                <CategoryTitle>Price</CategoryTitle>
                <form>
                  <Slider
                    value={priceRangeFilter}
                    handleChange={updatePriceRangeFilter}
                  />
                  <PriceManualBoxesContainer>
                    <PriceManualBox
                      placeholder="min"
                      min="0"
                      max="1000"
                      value={priceRangeFilter[0]}
                      readOnly
                    />
                    <PriceManualBox
                      placeholder="max"
                      min="0"
                      max="1000"
                      value={priceRangeFilter[1]}
                      readOnly
                    />
                  </PriceManualBoxesContainer>
                </form>
              </Category>
              <ActionButtonsContainer>
                <ToggleButton onClick={() => setIsActive(false)}>
                  Cancel
                </ToggleButton>
                <SendButton onClick={filterItems}>Filter</SendButton>
              </ActionButtonsContainer>
            </CategoriesContainer>
          </BlockContainer>
        </FiltersContainer>
      ) : null}
    </FilterContent>
  );
}

export default Filter;
