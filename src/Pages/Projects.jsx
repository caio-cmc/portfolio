import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import { projEN, projPT } from '../Infos/LongTexts';
import "../Styles/Pages/Projects.scss"

function Projects() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <Header />
      <h1>{ englishMode ? 'Projects' : 'Projetos' }</h1>
      <p>
        { englishMode ? projEN : projPT }
      </p>
    </div>
  );
}

export default Projects;