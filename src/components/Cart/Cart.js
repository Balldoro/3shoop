import React, { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import {
  CartItem,
  BuyButton,
  CartButton,
  CartContentWrapper,
  DeleteButton,
  EmptyCartText,
  TotalPrice
} from "./CartStyles";

function Cart() {
  const [isActive, setIsActive] = useState(false);
  const [items, setItems] = useState([1]);

  const deleteItem = e => {
    console.log("item deleted");
  };

  return (
    <div>
      <CartButton
        onClick={e => {
          e.preventDefault();
          setIsActive(!isActive);
        }}
      >
        <FaShoppingCart />
      </CartButton>
      {isActive ? (
        <CartContentWrapper>
          {items.length !== 0 ? (
            <>
              <ul>
                <CartItem>
                  <span>Item 1</span>
                  <div>
                    <span>$20.95</span>
                    <DeleteButton onClick={e => deleteItem(e)}>
                      <FaTimes />
                    </DeleteButton>
                  </div>
                </CartItem>
              </ul>
              <TotalPrice>Total: $20.95</TotalPrice>
              <BuyButton>BUY!</BuyButton>{" "}
            </>
          ) : (
            <EmptyCartText>You have no items in cart</EmptyCartText>
          )}
        </CartContentWrapper>
      ) : null}
    </div>
  );
}

export default Cart;
