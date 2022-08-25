import React from 'react';
import Header from '../Components/Header';
import personExample from '../Images/personExample.png'

function About() {
  return (
    <div>
      <Header />
      <img src={ personExample } alt="eu" />
      <p>Alguma coisa sobre mim aqui</p>
    </div>
  );
}

export default About;