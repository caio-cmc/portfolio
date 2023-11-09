import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import "../Styles/Components/ProjectCard.scss";


function ProjectCard(props) {
  const { namePT, nameEN, type, image,
    descriptionPT, descriptionEN, stacks, link, gitRepository } = props;
  
  const { englishMode } = useContext(PortContext);
  
  return (
    <div className="project-card-main card-bg">
      <h2 className="project-card-ttl title">
        { englishMode ? nameEN : namePT }
      </h2>
      <div className="project-card-type text">
          <p className={`${type} type`}>
            { type }
          </p>
      </div>
      <div className="project-card-container-image">
        <img className="project-card-image" src={ image } alt={ namePT } />
        <div className="test-div">
          <h2>Stacks:</h2>
          <div className="project-card-icons">
            { stacks.map((stack) => (
              <img className={ `${stack} icon` } src={ stack } alt={ `${stack} icon` } />
            )) }
          </div>
        </div>
      </div>
      <p className="project-card-description text">
        { englishMode ? descriptionEN : descriptionPT }
      </p>
      <div className="project-card-links">
        {
          type === "Back-end" ? 
          <span className="fake link button-bg">
            { englishMode ? "Back-end only :(" : "Só back-end :(" }
          </span> :
          <a
            href={ link }
            target="_blank"
            rel="noreferrer"
            className="project link button-bg"
          >
            { englishMode ? "Project link" : "Link do Projeto" }
          </a>
        }
        <a
          href={ gitRepository }
          target="_blank"
          rel="noreferrer"
          className="repository link button-bg"
        >
          { englishMode ? "GitHub repository" : "Repositório GitHub" }
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;