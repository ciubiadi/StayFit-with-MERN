import React from 'react'
import './NavLinks.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li className='navlinks-item'>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>
        <li className='navlinks-item'>
            <NavLink to="/ul/activities">MY ACTIVITIES</NavLink>
        </li>
        <li className='navlinks-item'>
            <NavLink to="/activities/new">ADD ACTIVITY</NavLink>
        </li>
        <li className='navlinks-item'>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks