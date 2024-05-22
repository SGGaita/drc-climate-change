import React, {useEffect, useState} from 'react'
import './navbarElement.scss'
import { Link } from 'react-router-dom';

export const NavbarComponent = ({menuData}) => {
 
 
  // Function to render menu items
  const renderMenuItems = () => {
    if (!menuData || !menuData.length) {
      return <p>No menu items found.</p>;
    }

    return menuData.map((item) => (
      <li key={item?.node?.id}>
        {/* Replace with your desired link component */}
        <Link to={`${item?.node?.uri}`}>{item?.node?.label}</Link>
      </li>
    ));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="logo">Logo</div>
        <nav className="nav">
          <ul>
            {/* Render menu items here */}
            {renderMenuItems()}
          </ul>
        </nav>
      </div>
    </div>
  )
}
