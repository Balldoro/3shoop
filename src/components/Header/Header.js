import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BlockContainer } from "../../GlobalStyles";
import { Wrapper, Cart, LogoLink } from "./HeaderStyles";

function Header() {
  return (
    <BlockContainer>
      <Wrapper>
        <LogoLink to="/">3Shoop</LogoLink>
        <Cart>
          <FaShoppingCart />
        </Cart>
      </Wrapper>
    </BlockContainer>
  );
}

export default Header;
