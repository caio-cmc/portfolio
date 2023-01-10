import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import AboutInfos from '../Infos/AboutInfos';
import AboutCard from '../Components/AboutCard';
import '../Styles/Pages/About.scss'

function About() {
  const { englishMode, darkMode, md } = useContext(PortContext);

  return (
    <div className={`${md}-mode`}>
        <Header />
        { AboutInfos.map((info) => (
          <AboutCard
            id={ info.id }
            topicPT={ info.topicPT }
            topicEN={ info.topicEN }
            imageDRK={ info.imageDRK }
            imageLGT={ info.imageLGT }
            paragraph1PT={ info.paragraph1PT }
            paragraph2PT={ info.paragraph2PT }
            paragraph1EN={ info.paragraph1EN }
            paragraph2EN={ info.paragraph2EN }
            darkMode={ darkMode }
            englishMode={ englishMode }
          />
        )) }
    </div>
  );
}

export default About;