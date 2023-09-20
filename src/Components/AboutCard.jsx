import React from 'react';
import "../Styles/Components/AboutCard.scss"
import { useInView } from "react-intersection-observer";

function AboutCard(props) {
  const { ref, inView } = useInView();
  const {
    id,
    image,
    paragraph1PT,
    paragraph2PT,
    paragraph1EN,
    paragraph2EN,
    englishMode
  } = props;

  const isEven = (idNum) => {
    if (idNum % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const right = isEven(id) ? true : false;
  const evenOrOdd = isEven(id) ? "even" : "odd";

  return (
    <div ref={ ref }>
      { right ? (
        <div className={`about-card ${evenOrOdd}`}>
          <div className="about-card-content">
            <img src={ image } alt="ex" className={`about-card-image ${ inView ? "fade-left" : "hidden" }`} />
            <div className="about-card-paragraphs">
              <p className={`about-card-txt text ${ inView ? "fade-right" : "hidden" }`}>{ englishMode ? paragraph1EN : paragraph1PT }</p>
              <p className={`about-card-txt text ${ inView ? "fade-right-300" : "hidden" }`}>{ englishMode ? paragraph2EN : paragraph2PT }</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`about-card ${evenOrOdd}`}>
          <div className="about-card-content">
            <div className="about-card-paragraphs">
              <p className={`about-card-txt text ${ inView ? "fade-left" : "hidden" }`}>{ englishMode ? paragraph1EN : paragraph1PT }</p>
              <p className={`about-card-txt text ${ inView ? "fade-left-300" : "hidden" }`}>{ englishMode ? paragraph2EN : paragraph2PT }</p>
            </div>
            <img src={ image } alt="ex" className={`about-card-image ${ inView ? "fade-right" : "hidden" }`} />
          </div>
        </div>
      ) }
    </div>
  );
}

export default AboutCard;