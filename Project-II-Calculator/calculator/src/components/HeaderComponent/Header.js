import React from 'react';
import './Header.css';

const Header = (props) => (
    <h3 className={props.headStyle}>React <span>Calculator</span></h3>
);

export default Header;