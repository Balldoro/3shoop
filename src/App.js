import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import CartContextProvider from "./context/CartContext";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <CartContextProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="/payment" exact to="/payment/details" />
          <Route path="/payment/:slug" exact component={Payment} />
          <Route path="/:slug" exact component={Category} />
          <Route path="/:slug/:id" component={Product} />
        </Switch>
      </CartContextProvider>
    </HashRouter>
  );
}

export default App;
