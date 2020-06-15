import React, { useContext, useState, useEffect } from "react";
import {
  ProgressCircle,
  ProgressContainer,
  ProgressCirclesContainer,
  ProgressOutLine,
  ErrorMessage,
  RedirectMessage,
  Wrapper
} from "./PaymentStyles";
import { BlockContainer } from "../../GlobalStyles";
import { CartContext } from "../../context/CartContext";
import { Redirect, useRouteMatch, Route } from "react-router-dom";
import Details from "./Details/Details";
import Billing from "./Billing/Billing";

function Payment() {
  const { itemsInCart } = useContext(CartContext);
  const [redirect, setRedirect] = useState({ ready: false, counter: 5 });
  const { url } = useRouteMatch();

  useEffect(() => {
    if (itemsInCart.length === 0) {
      const countingDown = setInterval(() => {
        setRedirect(prevState => ({
          ready: false,
          counter: prevState.counter - 1
        }));
        if (redirect.counter === 1) {
          setRedirect({ ready: true });
        }
      }, 1000);
      return () => clearInterval(countingDown);
    }
  }, [redirect, itemsInCart]);

  return (
    <Wrapper>
      <BlockContainer>
        {itemsInCart.length !== 0 ? (
          <>
            <ProgressContainer>
              <ProgressOutLine></ProgressOutLine>
              <ProgressCirclesContainer>
                <ProgressCircle
                  active={url === "/payment/details"}
                  done={url !== "/payment/details"}
                />
                <ProgressCircle
                  active={url === "/payment/billing"}
                  done={
                    url !== "/payment/details" && url !== "/payment/billing"
                  }
                />
                <ProgressCircle active={url === "/payment/summary"} />
              </ProgressCirclesContainer>
              <ProgressOutLine></ProgressOutLine>
            </ProgressContainer>
            <Route path="/payment/details" component={Details} />
            <Route path="/payment/billing" component={Billing} />
          </>
        ) : (
          <>
            <ErrorMessage>
              You cannot access this page.
              <br /> Your cart is empty.
            </ErrorMessage>
            <RedirectMessage>
              Redirect to home page after {redirect.counter}...
            </RedirectMessage>
            {redirect.ready && <Redirect to="/" />}
          </>
        )}
      </BlockContainer>
    </Wrapper>
  );
}

export default Payment;
