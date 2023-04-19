import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import eu from '../Images/eu.jpeg';
import { homeEN1, homePT1, homeEN2, homePT2 } from '../Infos/LongTexts';
import '../Styles/Pages/Homepage.scss'

function Homepage() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <div className="homepage-view">
        <Header page="home" />
        <div className="homepage-main homepage-bg page-bg">
          <img src={ eu } alt="Caio profile" className="homepage-caio-profile" />
          <div className="homepage-intro">
            <h2 className="homepage-intro-beginning homepage-txt text">
              { englishMode ? homeEN1 : homePT1 }
            </h2>
            <h1 className="homepage-intro-name homepage-txt">
              Caio César
            </h1>
            <h3 className="homepage-intro-end homepage-txt text">
              { englishMode ? homeEN2 : homePT2 }
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
