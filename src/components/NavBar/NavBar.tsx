import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router';

function NavBar() {
  return (
    <nav>
      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navItem">
        <NavLink to="/push-the-btn">Push the button</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
