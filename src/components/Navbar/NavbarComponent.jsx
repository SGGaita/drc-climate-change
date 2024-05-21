import React, {useEffect, useState} from 'react'
import './navbarElement.scss'
import { Link } from 'react-router-dom';

export const NavbarComponent = ({menuData}) => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchLogoUrl = async () => {
      try {
        const response = await fetch('https://nbps-alumni.co.ke//wp-json/wp/v2'); // Replace with your actual endpoint
       // const logoData = response.data.find(item => item.title === 'Site Logo'); // Assuming logo data is stored in Settings
        //setLogoUrl(logoData.value);
        console.warn("Logo data", response)
      } catch (error) {
        console.error('Error fetching logo URL:', error);
      }
    };

    fetchLogoUrl();
  }, []);
 
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
