import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { HashRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
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
    <HashRouter>
      <GlobalStyles />
      <Header
        itemsInCart={itemsInCart}
        deleteItemFromCart={deleteItemFromCart}
      />
      <Route path="/" exact component={Home} />
      <Route path="/:slug" exact component={Category} />
      <Route
        path="/:slug/:id"
        render={props => (
          <Product
            {...props}
            addItemToCart={addItemToCart}
            itemsInCart={itemsInCart}
            deleteItemFromCart={deleteItemFromCart}
          />
        )}
      />
    </HashRouter>
  );
}

export default App;
