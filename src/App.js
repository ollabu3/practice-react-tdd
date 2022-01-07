import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [buttonColor, setButtonColor] = useState("red");

  const changeColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        onClick={() => setButtonColor(changeColor)}
        style={{
          backgroundColor: buttonColor,
          border: "none",
          cursor: "pointer",
        }}
      >
        Change to {changeColor}
      </button>
    </div>
  );
};

export default App;
