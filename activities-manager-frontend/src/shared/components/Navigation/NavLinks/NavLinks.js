import React from 'react'
import './NavLinks.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const NavLinks = () => {
  return (
    <ul>
        <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to="/ul/activities">MY ACTIVITIES</NavLink>
        </li>
        <li>
            <NavLink to="/activities/new">ADD ACTIVITY</NavLink>
        </li>
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks