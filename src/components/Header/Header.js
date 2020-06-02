import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BlockContainer } from "../../GlobalStyles";
import { Wrapper, Logo, Cart } from "./HeaderStyles";

function Header() {
  return (
    <BlockContainer>
      <Wrapper>
        <Logo>3Shoop</Logo>
        <Cart>
          <FaShoppingCart />
        </Cart>
      </Wrapper>
    </BlockContainer>
  );
}

export default Header;
