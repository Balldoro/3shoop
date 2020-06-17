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
      <h2>Transaction successfull!</h2>
      <NextLink to="/">Back to Home page</NextLink>
    </Wrapper>
  );
}

export default Finish;
