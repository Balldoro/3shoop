import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BlockContainer } from "../../GlobalStyles";
import { Wrapper, LogoLink } from "./HeaderStyles";
import Cart from "../Cart/Cart";

function Header({ itemsInCart, deleteItemFromCart }) {
  return (
    <BlockContainer>
      <Wrapper>
        <LogoLink to="/">3Shoop</LogoLink>
        <Cart itemsInCart={itemsInCart} deleteItemFromCart={deleteItemFromCart}>
          <FaShoppingCart />
        </Cart>
      </Wrapper>
    </BlockContainer>
  );
}

export default Header;
