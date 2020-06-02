import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Route path="/" exact component={Home} />
    </HashRouter>
  );
}

export default App;
