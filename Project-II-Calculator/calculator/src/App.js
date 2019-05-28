import React from 'react';
import './App.css';

import DisplayComponent from './components/DisplayComponents/CalculatorDisplay';
import ActionComponent from './components/ButtonComponents/ActionButton';
import NumberComponent from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <DisplayComponent />
      <ActionComponent />
      <NumberComponent />
    </div>
  );
};

export default App;
