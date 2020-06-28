import React from "react";
import { Item, ItemInfo } from "./ProductItemStyles";
import { Link } from "react-router-dom";

function ProductItem({ data, data: { name, img, price }, path }) {
  return (
    <Item>
      <Link
        to={{
          pathname: path,
          state: data
        }}
      >
        <img src={img} alt={name} />
        <ItemInfo>
          <span>{name}</span>
          <span>${price.toFixed(2)}</span>
        </ItemInfo>
      </Link>
    </Item>
  );
}

export default ProductItem;
