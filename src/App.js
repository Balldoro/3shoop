import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { HashRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <CartContextProvider>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/:slug" exact component={Category} />
        <Route path="/:slug/:id" component={Product} />
      </CartContextProvider>
    </HashRouter>
  );
}

export default App;
