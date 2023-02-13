import React, { useContext, useEffect } from 'react';
import PortContext from '../Context/PortfolioContext';
import { Link } from 'react-router-dom';
import name from '../Images/Header/name.png';
import sun from "../Images/Header/sun.svg";
import moon from "../Images/Header/moon.svg";
import bra from "../Images/Header/brazil-flag.png";
import uk from "../Images/Header/uk-flag.png";
import '../Styles/Components/Header.scss';

function Header(props) {
  const {
    darkMode,
    setDarkMode,
    englishMode,
    setEnglishMode,
    currPage,
    setCurrPage,
  } = useContext(PortContext);

  const { page } = props;

  const paletteToggler = () => {
    if (!darkMode) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  const languageToggler = () => {
    if (!englishMode) {
      setEnglishMode(true)
    } else {
      setEnglishMode(false)
    }
  }

  useEffect(() => {
    const returnToDefault = () => {
      setCurrPage({
        about: "", skills: "", projects: "", contact: ""
      });
    }

    const currentPage = (page) => {
      if (page === "home") {
        returnToDefault();
      } else {
        returnToDefault();
        setCurrPage((prevState) => {
          return { ...prevState, [page]: "selected" }
        });
      }
    }
    currentPage(page)
  }, [page, setCurrPage]);

  return (
    <header className="header-component header-bg">
      <Link to="/home" className="header-link home">
        <img src={ name } alt="my name" />
      </Link>
      <div className="header-nav-toggle">
        <nav className="header-all-nav">
          <Link to="/about" className={`header-link about ${currPage.about}`}>
            { englishMode ? 'About' : 'Sobre' }
          </Link>
          <Link to="/stacks" className={`header-link stacks ${currPage.skills}`}>
            { englishMode ?  'Skills' : 'Habilidades' }
          </Link>
          <Link to="/projects" className={`header-link projects ${currPage.projects}`}>
            { englishMode ? 'Projects' : 'Projetos' }
          </Link>
          <Link to="/contact" className={`header-link contact ${currPage.contact}`}>
            { englishMode ? 'Contact me!' : 'Fale comigo!' }
          </Link>
        </nav>
        <div className="header-togglers">
          <button type="button" onClick={ paletteToggler } className="dark-mode toggler">
            <img src={ darkMode ? sun : moon } alt="mode" className="mode-icon"/>
          </button>
          <button type="button" onClick={ languageToggler } className="english-mode toggler">
            <img src={ englishMode ? bra : uk } alt="flag" className="lang-flag"/>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;