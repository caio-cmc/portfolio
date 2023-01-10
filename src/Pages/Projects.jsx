import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import { projEN, projPT } from '../Infos/LongTexts';
import "../Styles/Pages/Projects.scss"

function Projects() {
  const { englishMode, md } = useContext(PortContext);

  return (
    <div className={`${md}-mode`}>
      <Header />
      <div className="bg">
        <h1 className="ttl">{ englishMode ? 'Projects' : 'Projetos' }</h1>
        <p className="txt">
          { englishMode ? projEN : projPT }
        </p>
      </div>
    </div>
  );
}

export default Projects;