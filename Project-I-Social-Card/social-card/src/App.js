import React from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponents/HeaderContainer';
import CardComponent from './components/CardComponents/CardContainer';
import FooterComponent from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className='container'>
      <HeaderComponent />
      <div className='details'>
      <CardComponent />
      <FooterComponent />
      </div>
    </div>
  );
};

export default App;
