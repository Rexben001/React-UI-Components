import React from "react";
import "./Header.css";

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from "./HeaderTitle";
import HeaderContent from './HeaderContent';

const HeaderComponent = () => (
    <div className='HeaderComponent'>
    <ImageThumbnail />
    <div className='HeaderDetails'>
        <HeaderTitle />
        <HeaderContent />
    </div>
  </div>
);

export default HeaderComponent;
