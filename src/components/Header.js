import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../styles/logo.png'

const Header = () => {

  return <nav id="header">
    <div className="logoContainer">
      <img id="logo" src={logo} alt="Logo"/>
    </div>

    <div className="navBar">
      <div className="navLink">
        <Link to={'/project-2/'} style={{ textDecoration: 'none', color: '#D9B08C' }}>Home</Link>
      </div>
      <div className="navLink">
        <Link to={'/project-2/authors'} style={{ textDecoration: 'none', color: '#D9B08C' }}>Authors</Link>
      </div>
    </div>
  </nav>

}

export default Header