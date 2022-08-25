import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/home">Caio César</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <br />
      <Link to="/stacks">Stacks</Link>
      <br />
      <button type="button">Dark Mode</button>
      <br />
      <button type="button">English</button>
    </header>
  );
}

export default Header;