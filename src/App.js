import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
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
        disabled={disabled}
      >
        Change to {changeColor}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button-checkbox">checkbox disabled</label>
    </div>
  );
};

export default App;
