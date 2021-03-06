import React from "react";
import { BlockContainer } from "../../GlobalStyles";
import { Wrapper, LogoLink } from "./HeaderStyles";
import Cart from "../Cart/Cart";

function Header() {
  return (
    <BlockContainer>
      <Wrapper>
        <LogoLink to="/">3Shoop</LogoLink>
        <Cart />
      </Wrapper>
    </BlockContainer>
  );
}

export default Header;
