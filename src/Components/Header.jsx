import React from 'react';
import { Link } from 'react-router-dom';
import name from '../Images/name.png'
import '../Styles/Components/Header.scss'

function Header() {
  return (
    <header className="header-component">
      <div className="header-main">
        <Link to="/home" className="header-link home">
          <img src={ name } alt="my name" />
        </Link>
        <div className="header-togglers">
          <button type="button">Dark Mode</button>
          <button type="button">English</button>
        </div>
      </div>
      <div className="header-all-nav">
          <Link to="/about" className="header-link about">Sobre</Link>
          <Link to="/stacks" className="header-link stacks">Stacks</Link>
          <Link to="/projects" className="header-link projects">Projetos</Link>
      </div>
    </header>
  );
}

export default Header;