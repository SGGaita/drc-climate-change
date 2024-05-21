import React from 'react'
import { Footer, NavbarComponent } from '../components'
import './layout.scss'

export const Layout = ({children, menuData}) => {
  return (
    <div className="app-container">
        <NavbarComponent menuData={menuData}/>
        {children}
        <Footer/>
    </div>
  )
}
