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

  return (
    <div>
      { left ? (
        <div className="bg">
          <h2 className="ttl">{ englishMode ? topicEN : topicPT }</h2>
          <img src={ darkMode ? imageDRK : imageLGT } alt="ex" style={{ "height" : "200px" }} />
          <p className="txt">{ englishMode ? paragraph1EN : paragraph1PT }</p>
          <p className="txt">{ englishMode ? paragraph2EN : paragraph2PT }</p>
        </div>
      ) : (
        <div className="bg">
          <h2 className="ttl">{ englishMode ? topicEN : topicPT }</h2>
          <p className="txt">{ englishMode ? paragraph1EN : paragraph1PT }</p>
          <p className="txt">{ englishMode ? paragraph2EN : paragraph2PT }</p>
          <img src={ darkMode ? imageDRK : imageLGT } alt="ex" style={{ "height" : "200px" }} />
        </div>
      ) }
    </div>
  );
}

export default AboutCard;