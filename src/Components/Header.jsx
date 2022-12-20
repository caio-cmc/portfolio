import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import { Link } from 'react-router-dom';
import name from '../Images/name.png';
import '../Styles/Components/Header.scss';

function Header() {
  const {
    darkMode,
    setDarkMode,
    englishMode,
    setEnglishMode,
    md
  } = useContext(PortContext);

  const paletteToggler = () => {
    if (!darkMode) {
      setDarkMode(true)
      console.log("Agora está no modo escuro");
    } else {
      setDarkMode(false)
      console.log("Agora está no modo claro");
    }
  }

  const languageToggler = () => {
    if (!englishMode) {
      setEnglishMode(true)
      console.log("Now the page's in english");
    } else {
      setEnglishMode(false)
      console.log("Agora a página está em português");
    }
  }

  return (
    <header className={`${md}-header-component`}>
      <div className="header-main">
        <Link to="/home" className="header-link home">
          <img src={ name } alt="my name" />
        </Link>
        <div className="header-togglers">
          <button type="button" onClick={ paletteToggler }>
            { darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button type="button" onClick={ languageToggler }>
            { englishMode ? 'Português' : 'English' }
          </button>
        </div>
      </div>
      <div className="header-all-nav">
          <Link to="/about" className="header-link about">
            { englishMode ? 'About' : 'Sobre' }
          </Link>
          <Link to="/stacks" className="header-link stacks">
            { englishMode ?  'Skills' : 'Habilidades' }
          </Link>
          <Link to="/projects" className="header-link projects">
            { englishMode ? 'Projects' : 'Projetos' }
          </Link>
      </div>
    </header>
  );
}

export default Header;