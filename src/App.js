import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  );
}

export default App;
