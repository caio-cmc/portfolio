import React from 'react';
import "../Styles/Components/AboutCard.scss"

function AboutCard(props) {
  const {
    id,
    imageDRK,
    imageLGT,
    paragraph1PT,
    paragraph2PT,
    paragraph1EN,
    paragraph2EN,
    darkMode,
    englishMode
  } = props;

  const left = id % 2 ? true : false;
  const evenOrOdd = id % 2 ? "odd" : "even";

  return (
    <div>
      { left ? (
        <div className={`about-card ${evenOrOdd}`}>
          <div className="about-card-content">
            <img src={ darkMode ? imageDRK : imageLGT } alt="ex" className="about-card-image" />
            <div className="about-card-paragraphs">
              <p className="about-card-txt">{ englishMode ? paragraph1EN : paragraph1PT }</p>
              <p className="about-card-txt">{ englishMode ? paragraph2EN : paragraph2PT }</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`about-card ${evenOrOdd}`}>
          <div className="about-card-content">
            <div className="about-card-paragraphs">
              <p className="about-card-txt">{ englishMode ? paragraph1EN : paragraph1PT }</p>
              <p className="about-card-txt">{ englishMode ? paragraph2EN : paragraph2PT }</p>
            </div>
            <img src={ darkMode ? imageDRK : imageLGT } alt="ex" className="about-card-image" />
          </div>
        </div>
      ) }
    </div>
  );
}

export default AboutCard;