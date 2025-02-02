import React, { useContext } from 'react';
import './Header.css';
import UserContext from '../../contexts/UserContext';
import type { UserContextType } from '../../contexts/UserContextType';
import NavBar from '../NavBar/NavBar';

function Header() {
  const { userName: name } = useContext(UserContext) as unknown as UserContextType;

  return (
    <header className="Header">
      <NavBar />
      <div className="userName">{name}</div>
    </header>
  );
}

export default Header;
