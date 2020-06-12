import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  const addItemToCart = item => {
    setItemsInCart(itemsInCart => [...itemsInCart, item]);
  };

  const deleteItemFromCart = itemToRemove => {
    const filteredCart = itemsInCart.filter(
      item => item.id !== itemToRemove.id
    );
    setItemsInCart(filteredCart);
  };

  return (
    <CartContext.Provider
      value={{ itemsInCart, addItemToCart, deleteItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
