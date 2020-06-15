import React from "react";
import { NextLink } from "../PaymentStyles";

function Billing({ location: { state } }) {
  return (
    <div>
      {console.log(state)}
      <NextLink to="/payment/summary">Next</NextLink>
    </div>
  );
}

export default Billing;
