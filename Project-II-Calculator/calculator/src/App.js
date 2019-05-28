import React from "react";
import "./App.css";

import DisplayComponent from "./components/DisplayComponents/CalculatorDisplay";
import ActionComponent from "./components/ButtonComponents/ActionButton";
import NumberComponent from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="App">
      <DisplayComponent buttonStyle="display-style" text="0" />
      <div className="action-number">
        <ActionComponent buttonStyle="action-button clear" text="clear" />
        <NumberComponent buttonStyle="number-button red" text="÷" />
      </div>
      <div className='buttons'>
      <NumberComponent buttonStyle="number-button" text="7" />
      <NumberComponent buttonStyle="number-button" text="8" />
      <NumberComponent buttonStyle="number-button" text="9" />
      <NumberComponent buttonStyle="number-button red" text="X" />
      <NumberComponent buttonStyle="number-button" text="4" />
      <NumberComponent buttonStyle="number-button" text="5" />
      <NumberComponent buttonStyle="number-button" text="6" />
      <NumberComponent buttonStyle="number-button red" text="–" />
      <NumberComponent buttonStyle="number-button" text="1" />
      <NumberComponent buttonStyle="number-button" text="2" />
      <NumberComponent buttonStyle="number-button" text="3" />
      <NumberComponent buttonStyle="number-button red" text="+" />
      </div>
      <div className="action-number">
        <ActionComponent buttonStyle="action-button" text="0" />
        <NumberComponent buttonStyle="number-button red" text="=" />
      </div>
    </div>
  );
};

export default App;
