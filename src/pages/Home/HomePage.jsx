import React, { useEffect, useState } from 'react';
import './homeElement.scss';

import { NavbarComponent,HeroComponent, ForecastComponent, AboutHub } from '../../components';



export const HomePage = ({menuData}) => {
 
  return (
    <div className='home-container'>
      <HeroComponent/>
      <ForecastComponent/>
      <AboutHub/>
    </div>
  );
};
