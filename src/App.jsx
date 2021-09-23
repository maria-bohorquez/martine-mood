import React from "react";
import { GlobalStyle } from "./styles";
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default App;
