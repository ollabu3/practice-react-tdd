import React from "react";
import "./App.css";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";

const App = () => {
  return (
    <div className="App">
      {/*  */}
      <OrderEntry />
      <OrderSummary />
    </div>
  );
};

export default App;
