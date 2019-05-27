import React from "react";
import "./Header.css";

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from "./HeaderTitle";
import HeaderContent from './HeaderContent';

const HeaderComponent = () => (
    <div className='HeaderComponent'>
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
  </div>
);

export default HeaderComponent;
