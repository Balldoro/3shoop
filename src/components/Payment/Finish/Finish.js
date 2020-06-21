import React from "react";
import { FaCheck } from "react-icons/fa";
import { Icon, Wrapper } from "./FinishStyles";
import { NextLink } from "../PaymentStyles";

function Finish() {
  return (
    <Wrapper>
      <Icon>
        <FaCheck />
      </Icon>
      <h1>Transaction successfull!</h1>
      <NextLink to="/">Back to Home page</NextLink>
    </Wrapper>
  );
}

export default Finish;
