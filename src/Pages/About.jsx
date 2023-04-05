import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import eu from '../Images/eu.jpeg';
import AboutInfos from '../Infos/AboutInfos';
import AboutCard from '../Components/AboutCard';
import { aboutPT, aboutEN } from '../Infos/LongTexts';
import '../Styles/Pages/About.scss';

function About() {
  const { englishMode, darkMode } = useContext(PortContext);

  return (
    <div>
      <div className="about-view about-bg">
        <Header
          page="about"
        />
        <div className="about-main even">
          <h1 className="about-ttl">{ englishMode ? "About me" : "Sobre mim" }</h1>
          <div className="about-main-info">
            {/*REMOVER CLASSE MODE-ICON NA IMAGEM FINAL*/}
            <img src={ eu } alt="ex" className="about-front-image mode-icon"/>
            <p className="about-opening txt">
              { englishMode ? aboutEN : aboutPT }
            </p>
          </div>
        </div>
      </div>
        { AboutInfos.map((info) => (
          <AboutCard
            key={ info.id }
            id={ info.id }
            imageDRK={ info.imageDRK }
            imageLGT={ info.imageLGT }
            paragraph1PT={ info.paragraph1PT }
            paragraph2PT={ info.paragraph2PT }
            paragraph1EN={ info.paragraph1EN }
            paragraph2EN={ info.paragraph2EN }
            darkMode={ darkMode }
            englishMode={ englishMode }
          />
        )) }
    </div>
  );
}

export default About;