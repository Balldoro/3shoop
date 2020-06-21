import React, { useContext } from "react";
import { PaymentContext } from "../../../context/PaymentContext";
import { ProgressTitle, NextLink } from "../PaymentStyles";
import { CartContext } from "../../../context/CartContext";
import {
  SummaryTitle,
  OrderItem,
  OrderItemText,
  SummaryWrapper,
  OrderTotal,
  SectionWrapper,
  PersonalItemWrapper,
  ItemHeading
} from "./SummaryStyles";
import AccessDenied from "../AccessDenied/AccessDenied";
import LeavePrompt from "../LeavePrompt/LeavePrompt";

function Summary() {
  const { state, updateState } = useContext(PaymentContext);
  const { itemsInCart, setItemsInCart, getTotalPrice } = useContext(
    CartContext
  );

  const handleOnClick = () => {
    updateState({});
    setItemsInCart([]);
  };

  return (
    <>
      {Object.entries(state).length !== 0 ? (
        <>
          <LeavePrompt />
          <ProgressTitle>Summary</ProgressTitle>
          <SummaryWrapper>
            <SectionWrapper>
              <SummaryTitle>Personal data</SummaryTitle>
              <ul>
                <PersonalItemWrapper>
                  <ItemHeading>First name: </ItemHeading>
                  <OrderItemText>{state.firstName}</OrderItemText>
                </PersonalItemWrapper>
                <PersonalItemWrapper>
                  <ItemHeading>Last name: </ItemHeading>
                  <OrderItemText>{state.lastName}</OrderItemText>
                </PersonalItemWrapper>
                <PersonalItemWrapper>
                  <ItemHeading>Email: </ItemHeading>
                  <OrderItemText>{state.email}</OrderItemText>
                </PersonalItemWrapper>
                <PersonalItemWrapper>
                  <ItemHeading>Cardholder name: </ItemHeading>
                  <OrderItemText>{state.cardName}</OrderItemText>
                </PersonalItemWrapper>
                <PersonalItemWrapper>
                  <ItemHeading>Card number: </ItemHeading>
                  <OrderItemText>{state.cardNumber}</OrderItemText>
                </PersonalItemWrapper>
              </ul>
            </SectionWrapper>
            <SectionWrapper>
              <SummaryTitle>Order</SummaryTitle>
              <ul>
                {itemsInCart.map(item => (
                  <OrderItem key={item.id}>
                    <ItemHeading>{item.name}</ItemHeading>
                    <OrderItemText>${item.price.toFixed(2)}</OrderItemText>
                  </OrderItem>
                ))}
              </ul>
              <OrderTotal>Total: ${getTotalPrice()}</OrderTotal>
            </SectionWrapper>
          </SummaryWrapper>
          <NextLink to="/payment/finish" onClick={handleOnClick}>
            ORDER
          </NextLink>
        </>
      ) : (
        <AccessDenied />
      )}
    </>
  );
}

export default Summary;
