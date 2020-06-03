import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { HashRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/:slug" exact component={Category} />
      <Route path="/:slug/:id" component={Product} />
    </HashRouter>
  );
}

export default App;
