import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import "../Styles/Components/ProjectCard.scss";


function ProjectCard(props) {
  const { namePT, nameEN, type, image,
    descriptionPT, descriptionEN, link, gitRepository } = props;
  
  const { englishMode } = useContext(PortContext);
  
  return (
    <div className="project-card-main">
      <h2 className="project-card-ttl">
        { englishMode ? nameEN : namePT }
      </h2>
      <div className="project-card-type">
        { type.map((t) => (
          <p key={ t } className={`${t} type`}>
            { t }
          </p>
        )) }
      </div>
      <div className="project-card-container-image">
        <img className="project-card-image" src={ image } alt={ namePT } />
        <div className="test-div">
          <h2>Stacks:</h2>
        </div>
      </div>
      <p className="project-card-description">
        { englishMode ? descriptionEN : descriptionPT }
      </p>
      <div className="project-card-links">
        {
          link === "atual" ? 
          <span className="fake link">
            { englishMode ? "You're here, silly :P" : "Tá aqui, bobinho :P" }
          </span> :
          <a
            href={ link }
            target="_blank"
            rel="noreferrer"
            className="project link"
          >
            { englishMode ? "Project link" : "Link do Projeto" }
          </a>
        }
        <a
          href={ gitRepository }
          target="_blank"
          rel="noreferrer"
          className="repository link"
        >
          { englishMode ? "GitHub repository" : "Repositório GitHub" }
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;