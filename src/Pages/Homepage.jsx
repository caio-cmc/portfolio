import React from 'react';
import Header from '../Components/Header';
import eu from '../Images/eu.jpeg'

function Homepage() {
  return (
    <div>
      <Header />
      <img src={ eu } alt="Eu" />
      <p>Bem vindos ao meu portfólio, meu nome é Caio César e eu serei seu guia!</p>
    </div>
  );
}

export default Homepage;
