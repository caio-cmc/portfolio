import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import Header from "../Components/Header";
import { projEN, projPT } from "../Infos/LongTexts";
import ProjectsInfo from "../Infos/ProjectsInfo";
import ProjectCard from "../Components/ProjectCard";
import "../Styles/Pages/Projects.scss"

function Projects() {
  const { englishMode } = useContext(PortContext);

  return (
    <div className="projects-view">
      <Header page="projects" />
      <div className="projects-main projects-bg">
        <h1 className="projects-ttl">{ englishMode ? "Projects" : "Projetos" }</h1>
        <p className="txt">
          { englishMode ? projEN : projPT }
        </p>
        <div className="projects-cards">
          { ProjectsInfo.map((project) => (
            <ProjectCard
              key={ project.namePT }
              namePT={ project.namePT }
              nameEN={ project.nameEN }
              type={ project.type }
              image={ project.image }
              descriptionPT={ project.descriptionPT }
              descriptionEN={ project.descriptionEN }
              link={ project.link }
              gitRepository={ project.gitRepository }
            />
          )) }
        </div>
      </div>
    </div>
  );
}

export default Projects;