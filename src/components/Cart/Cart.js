import React, { useState, useRef } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import {
  CartItem,
  BuyButton,
  CartButton,
  CartContentWrapper,
  DeleteButton,
  EmptyCartText,
  TotalPrice,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemInfo
} from "./CartStyles";
import useVisibleComponent from "../../hooks/useVisibleComponent";

function Cart({ itemsInCart, deleteItemFromCart }) {
  const [isActive, setIsActive] = useState(false);
  const cartContent = useRef();
  const removeActive = () => {
    setIsActive(false);
  };
  useVisibleComponent(cartContent, removeActive);
  return (
    <div ref={cartContent}>
      <CartButton
        amount={itemsInCart.length}
        onClick={() => setIsActive(!isActive)}
      >
        <FaShoppingCart />
      </CartButton>
      {isActive ? (
        <CartContentWrapper>
          {itemsInCart.length !== 0 ? (
            <>
              <ul>
                {itemsInCart.map(item => (
                  <CartItem key={item.id}>
                    <CartItemInfo>
                      <CartItemImage src={item.img} alt="" />
                      <div>
                        <CartItemName>{item.name}</CartItemName>
                        <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
                      </div>
                    </CartItemInfo>
                    <DeleteButton onClick={() => deleteItemFromCart(item)}>
                      <FaTimes />
                    </DeleteButton>
                  </CartItem>
                ))}
              </ul>
              <TotalPrice>
                Total: $
                {itemsInCart
                  .map(item => item.price)
                  .reduce((total, item) => (total += item))
                  .toFixed(2)}
              </TotalPrice>
              <BuyButton>BUY!</BuyButton>
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
