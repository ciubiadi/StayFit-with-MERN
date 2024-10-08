import React from 'react'
import './MainNavigation.css';
import MainHeader from '../MainHeader/MainHeader.js'
import { Link } from 'react-router-dom';

const MainNavigation = props => {
  return (
    <MainHeader className="header-section">
      <button>
        <span />
        <span />
        <span />
      </button>
      <h1>
        <Link to="/">
          ProductsApp
        </Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  )
}

export default MainNavigation