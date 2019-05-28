import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => (
    <div className={props.buttonStyle}>{props.total}</div>
);

export default CalculatorDisplay;