import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { HashRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/:slug" component={Category} />
    </HashRouter>
  );
}

export default App;
