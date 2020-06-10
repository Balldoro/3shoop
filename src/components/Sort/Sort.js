import React, { useState, useEffect } from "react";
import { Select } from "./SortStyles";

function Sort({ setItems }) {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    switch (selected) {
      case "price-lowest":
        setItems(items => [...items].sort((a, b) => a.price - b.price));
        break;
      case "price-highest":
        setItems(items => [...items].sort((a, b) => b.price - a.price));
        break;
      case "alpha":
        setItems(items =>
          [...items].sort((a, b) => (a.name > b.name ? 1 : -1))
        );
        break;
      case "reverse-alpha":
        setItems(items =>
          [...items].sort((a, b) => (a.name > b.name ? 1 : -1)).reverse()
        );
        break;
      default:
        break;
    }
  }, [selected, setItems]);

  return (
    <Select value={selected} onChange={e => setSelected(e.target.value)}>
      Sort
      <option value="" disabled>
        Sort Items
      </option>
      <option value="price-lowest">Price Lowest</option>
      <option value="price-highest">Price Highest</option>
      <option value="alpha">A-Z</option>
      <option value="reverse-alpha">Z-A</option>
    </Select>
  );
}

export default Sort;
