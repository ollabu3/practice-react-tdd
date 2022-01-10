import React, { useState, useEffect } from "react";
import "./App.css";
export function replaceCametWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}
const App = () => {
  const [buttonColor, setButtonColor] = useState("blue");
  const [disabled, setDisabled] = useState(false);
  const changeColor = () =>
    disabled ? setButtonColor("gray") : setButtonColor("blue");

  useEffect(() => {
    changeColor();
  }, [disabled]);

  return (
    <div className="App">
      <button
        style={{
          backgroundColor: buttonColor,
          border: "none",
          cursor: "pointer",
        }}
        disabled={disabled}
      >
        Change to {buttonColor}
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
