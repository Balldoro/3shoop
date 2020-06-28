import React from "react";
import {
  Item,
  LinkWrapper,
  ImageContainer,
  CategoryTitle
} from "./CategoryItemStyles";

function CategoryItem({ data: { name, img } }) {
  return (
    <Item>
      <LinkWrapper to={`/${name}`}>
        <ImageContainer>
          <img src={img} alt={name} />
        </ImageContainer>
        <CategoryTitle>{name}</CategoryTitle>
      </LinkWrapper>
    </Item>
  );
}

export default CategoryItem;
