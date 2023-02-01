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
    abt, 
    setAbt,
    skl,
    setSkl,
    proj,
    setProj,
    cont,
    setCont
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
      setAbt("");
      setSkl("");
      setProj("");
      setCont("");
    }

    const currentPage = (page) => {
      if (page === "about") {
        returnToDefault();
        setAbt("selected");
      } else if (page === "skills") {
        returnToDefault();
        setSkl("selected");
      } else if (page === "projects") {
        returnToDefault();
        setProj("selected");
      } else if (page === "contact") {
        returnToDefault();
        setCont("selected");
      } else {
        returnToDefault();
      }
    }
    currentPage(page)
  }, [page, setAbt, setCont, setProj, setSkl]);

  return (
    <header className="header-component header-bg">
      <Link to="/home" className="header-link home">
        <img src={ name } alt="my name" />
      </Link>
      <div className="header-nav-toggle">
        <nav className="header-all-nav">
          <Link to="/about" className={`header-link about ${abt}`}>
            { englishMode ? 'About' : 'Sobre' }
          </Link>
          <Link to="/stacks" className={`header-link stacks ${skl}`}>
            { englishMode ?  'Skills' : 'Habilidades' }
          </Link>
          <Link to="/projects" className={`header-link projects ${proj}`}>
            { englishMode ? 'Projects' : 'Projetos' }
          </Link>
          <Link to="/contact" className={`header-link contact ${cont}`}>
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