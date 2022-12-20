import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import eu from '../Images/eu.jpeg'
import '../Styles/Pages/Homepage.scss'

function Homepage() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <div className="homepage-view">
        <Header />
        <div className="homepage-main">
          <img src={ eu } alt="Caio profile" className="homepage-caio-profile" />
          <p className="homepage-intro">
            { englishMode ? 'English text, the book is on the table, yadayadayada e essas coisas assim' : 'Eaí pessoal! Sejam bem vindos ao meu portfólio, meu nome é Caio César, desenvolvedor fullstack e eu serei seu guia!' }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
