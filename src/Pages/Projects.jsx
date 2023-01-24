import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import { projEN, projPT } from '../Infos/LongTexts';
import "../Styles/Pages/Projects.scss"

function Projects() {
  const { englishMode } = useContext(PortContext);

  return (
    <div className="projects-view">
      <Header page="projects" />
      <div className="projects-main projects-bg">
        <h1 className="projects-ttl">{ englishMode ? 'Projects' : 'Projetos' }</h1>
        <p className="txt">
          { englishMode ? projEN : projPT }
        </p>
      </div>
    </div>
  );
}

export default Projects;