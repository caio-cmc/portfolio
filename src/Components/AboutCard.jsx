import React from 'react';
import "../Styles/Components/AboutCard.scss"

function AboutCard(props) {
  const {
    id,
    topicPT,
    topicEN,
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
          <h2 className="about-card-ttl">{ englishMode ? topicEN : topicPT }</h2>
          <div className="about-card-content">
            <img src={ darkMode ? imageDRK : imageLGT } alt="ex" className="about-card-image" />
            <div className="about-card-paragraphs">
              <p className="txt">{ englishMode ? paragraph1EN : paragraph1PT }</p>
              <p className="txt">{ englishMode ? paragraph2EN : paragraph2PT }</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`about-card ${evenOrOdd}`}>
          <h2 className="about-card-ttl">{ englishMode ? topicEN : topicPT }</h2>
          <div className="about-card-content">
            <div className="about-card-paragraphs">
              <p className="txt">{ englishMode ? paragraph1EN : paragraph1PT }</p>
              <p className="txt">{ englishMode ? paragraph2EN : paragraph2PT }</p>
            </div>
            <img src={ darkMode ? imageDRK : imageLGT } alt="ex" className="about-card-image" />
          </div>
        </div>
      ) }
    </div>
  );
}

export default AboutCard;