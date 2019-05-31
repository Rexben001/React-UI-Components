import React from 'react';
import './Button.css';

const NumberButton = (props) => (
    <button className={props.buttonStyle} onClick={props.click}>{props.text}</button>
);

export default NumberButton;
