import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import aboutImg from '../Images/aboutme.png';
import AboutInfos from '../Infos/AboutInfos';
import AboutCard from '../Components/AboutCard';
import { aboutPT, aboutEN } from '../Infos/LongTexts';
import '../Styles/Pages/About.scss';

function About() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <div className="about-view about-bg page-bg">
        <Header
          page="about"
        />
        <div className="about-main even">
          <h1 className="about-ttl title fade-in">{ englishMode ? "About me" : "Sobre mim" }</h1>
          <div className="about-main-info">
            <img src={ aboutImg } alt="ex" className="about-front-image fade-left"/>
            <p className="about-opening text fade-right">
              { englishMode ? aboutEN : aboutPT }
            </p>
          </div>
        </div>
      </div>
        { AboutInfos.map((info) => (
          <AboutCard
            key={ info.id }
            id={ info.id }
            image={ info.image }
            paragraph1PT={ info.paragraph1PT }
            paragraph2PT={ info.paragraph2PT }
            paragraph1EN={ info.paragraph1EN }
            paragraph2EN={ info.paragraph2EN }
            englishMode={ englishMode }
          />
        )) }
    </div>
  );
}

export default About;