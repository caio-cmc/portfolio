import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import eu from '../Images/eu.jpeg'
import { homeEN, homePT } from '../Infos/LongTexts';
import '../Styles/Pages/Homepage.scss'

function Homepage() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <div className="homepage-view">
        <Header />
        <div className="homepage-main bg">
          <img src={ eu } alt="Caio profile" className="homepage-caio-profile" />
          <p className="homepage-intro txt">
            { englishMode ? homeEN : homePT }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
