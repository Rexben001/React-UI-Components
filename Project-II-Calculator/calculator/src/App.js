import React from 'react';
import './App.css';

import DisplayComponent from './components/DisplayComponents/CalculatorDisplay';
import ActionComponent from './components/ButtonComponents/ActionButton';
import NumberComponent from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='App'>
      <DisplayComponent buttonStyle='display-style' text='0'/>
      <ActionComponent  buttonStyle='action-button clear' text='clear'/>
      <NumberComponent text={<i class="fas fa-divide"></i>}/>
      <ActionComponent text='0'/>
    </div>
  );
};

export default App;
