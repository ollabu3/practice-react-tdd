import React from "react";
import "./App.css";
import Options from "./pages/entry/Options";
import OrderSummary from "./pages/summary/OrderSummary";

const App = () => {
  return (
    <div className="App">
      <Options optionType={"scoops"} />
      <OrderSummary />
    </div>
  );
};

export default App;
