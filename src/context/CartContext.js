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

  const getTotalPrice = () => {
    return itemsInCart
      .map(item => item.price)
      .reduce((total, curr) => (total += curr))
      .toFixed(2);
  };

  const checkIfItemIsInCart = itemID => {
    return itemsInCart.filter(cartItem => cartItem.id === itemID).length !== 0;
  };

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addItemToCart,
        deleteItemFromCart,
        setItemsInCart,
        getTotalPrice,
        checkIfItemIsInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
