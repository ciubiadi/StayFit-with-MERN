import React from 'react'
import './MainNavigation.css';
import MainHeader from '../MainHeader/MainHeader'
import { Link } from 'react-router-dom';

import NavLinks from '../NavLinks/NavLinks';

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
          StayFit
        </Link>
      </h1>
      <nav>
        <NavLinks/>
      </nav>
    </MainHeader>
  )
}

export default MainNavigation