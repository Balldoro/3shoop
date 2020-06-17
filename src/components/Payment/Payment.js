import React, { useContext } from "react";
import {
  ProgressCircle,
  ProgressContainer,
  ProgressCirclesContainer,
  ProgressOutLine,
  Wrapper
} from "./PaymentStyles";
import { BlockContainer } from "../../GlobalStyles";
import { CartContext } from "../../context/CartContext";
import { useRouteMatch, Route } from "react-router-dom";
import Details from "./Details/Details";
import Billing from "./Billing/Billing";
import AccessDenied from "./AccessDenied/AccessDenied";
import PaymentContextProvider from "../../context/PaymentContext";
import Summary from "./Summary/Summary";

function Payment() {
  const { itemsInCart } = useContext(CartContext);
  const { url } = useRouteMatch();
  return (
    <PaymentContextProvider>
      <Wrapper>
        <BlockContainer>
          <ProgressContainer>
            <ProgressOutLine></ProgressOutLine>
            <ProgressCirclesContainer>
              <ProgressCircle
                active={url === "/payment/details"}
                done={url !== "/payment/details"}
              />
              <ProgressCircle
                active={url === "/payment/billing"}
                done={url !== "/payment/details" && url !== "/payment/billing"}
              />
              <ProgressCircle active={url === "/payment/summary"} />
            </ProgressCirclesContainer>
            <ProgressOutLine></ProgressOutLine>
          </ProgressContainer>
          {itemsInCart.length !== 0 ? (
            <>
              <Route path="/payment/details" component={Details} />
              <Route path="/payment/billing" component={Billing} />
              <Route path="/payment/summary" component={Summary} />
            </>
          ) : (
            <AccessDenied />
          )}
        </BlockContainer>
      </Wrapper>
    </PaymentContextProvider>
  );
}

export default Payment;
