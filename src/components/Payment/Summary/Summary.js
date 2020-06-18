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
  PersonalHeading
} from "./SummaryStyles";
import AccessDenied from "../AccessDenied/AccessDenied";
import LeavePrompt from "../LeavePrompt/LeavePrompt";

function Summary() {
  const { state, updateState } = useContext(PaymentContext);
  const { itemsInCart, setItemsInCart } = useContext(CartContext);

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
              <PersonalItemWrapper>
                <PersonalHeading>First name: </PersonalHeading>
                <OrderItemText>{state.firstName}</OrderItemText>
              </PersonalItemWrapper>
              <PersonalItemWrapper>
                <PersonalHeading>Last name: </PersonalHeading>
                <OrderItemText>{state.lastName}</OrderItemText>
              </PersonalItemWrapper>
              <PersonalItemWrapper>
                <PersonalHeading>Email: </PersonalHeading>
                <OrderItemText>{state.email}</OrderItemText>
              </PersonalItemWrapper>
              <PersonalItemWrapper>
                <PersonalHeading>Cardholder name: </PersonalHeading>
                <OrderItemText>{state.cardName}</OrderItemText>
              </PersonalItemWrapper>
              <PersonalItemWrapper>
                <PersonalHeading>Card number: </PersonalHeading>
                <OrderItemText>{state.cardNumber}</OrderItemText>
              </PersonalItemWrapper>
            </SectionWrapper>
            <SectionWrapper>
              <SummaryTitle>Order</SummaryTitle>
              <ul>
                {itemsInCart.map(item => (
                  <OrderItem key={item.id}>
                    <OrderItemText>{item.name}</OrderItemText>
                    <OrderItemText>${item.price.toFixed(2)}</OrderItemText>
                  </OrderItem>
                ))}
              </ul>
              <OrderTotal>
                Total: $
                {itemsInCart
                  .map(item => item.price)
                  .reduce((total, curr) => (total += curr))
                  .toFixed(2)}
              </OrderTotal>
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
