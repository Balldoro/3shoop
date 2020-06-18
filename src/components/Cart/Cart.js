import React, { useState, useRef, useContext } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import {
  CartItem,
  CartButton,
  CartContentWrapper,
  DeleteButton,
  EmptyCartText,
  TotalPrice,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemInfo,
  CartItemLink,
  BuyLink
} from "./CartStyles";
import useVisibleComponent from "../../hooks/useVisibleComponent";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const [isActive, setIsActive] = useState(false);
  const cartContent = useRef();
  const removeActive = () => {
    setIsActive(false);
  };
  useVisibleComponent(cartContent, removeActive);
  const { itemsInCart, deleteItemFromCart, getTotalPrice } = useContext(
    CartContext
  );
  return (
    <div ref={cartContent}>
      <CartButton
        amount={itemsInCart.length}
        onClick={() => setIsActive(!isActive)}
        tabIndex={0}
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
                    <CartItemLink
                      to={`/${item.path}`}
                      onClick={() => setIsActive(false)}
                    >
                      <CartItemInfo>
                        <CartItemImage src={item.img} alt="" />
                        <div>
                          <CartItemName>{item.name}</CartItemName>
                          <CartItemPrice>
                            ${item.price.toFixed(2)}
                          </CartItemPrice>
                        </div>
                      </CartItemInfo>
                    </CartItemLink>
                    <DeleteButton onClick={() => deleteItemFromCart(item)}>
                      <FaTimes />
                    </DeleteButton>
                  </CartItem>
                ))}
              </ul>
              <TotalPrice>Total: ${getTotalPrice()}</TotalPrice>
              <BuyLink to="/payment/details" onClick={() => setIsActive(false)}>
                BUY!
              </BuyLink>
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
