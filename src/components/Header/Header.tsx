import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import type { UserContextType } from '../../contexts/UserContextType';
import NavBar from '../NavBar/NavBar';
import './Header.css';

function Header() {
  const { userName } = useContext(UserContext) as unknown as UserContextType;

  return (
    <header className="Header">
      <NavBar />
      {userName && <span className="userName">Welcome, {userName}!</span>}
    </header>
  );
}

export default Header;
