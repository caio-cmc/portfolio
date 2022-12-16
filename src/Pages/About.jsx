import React from 'react';
import Header from '../Components/Header';
import personExample from '../Images/personExample.png'
import '../Styles/Pages/About.scss'

function About() {
  return (
    <div>
      <div className="about-cover">
        <Header />
        <div className="about-view main-div">
          <img src={ personExample } alt="eu" className="about-picture main" />
          <p>INTRODUÇÃO</p>
        </div>
      </div>
      <div className="about-view hobbies-div">
        <p>HOBBIES</p>
        <img src={ personExample } alt="eu" className="about-picture hobbies" />
      </div>
      <div className="about-view interests-div">
        <img src={ personExample } alt="eu" className="about-picture interests" />
        <p>INTERESSES</p>
      </div>
    </div>
  );
}

export default About;