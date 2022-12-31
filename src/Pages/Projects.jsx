import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import "../Styles/Pages/Projects.scss"

function Projects() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <Header />
      <h1>{ englishMode ? 'Projects' : 'Projetos' }</h1>
      <p>
        { englishMode ? 'English text, the book is on the table, yadayadayada e essas coisas assim' : 'Por aqui mostrarei alguns dos meus projetos já desenvolvidos na minha jornada como desenvolvedor' }
      </p>
    </div>
  );
}

export default Projects;