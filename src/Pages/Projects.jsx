import React, { useContext, useRef } from "react";
import PortContext from "../Context/PortfolioContext";
import Header from "../Components/Header";
import { projEN, projPT } from "../Infos/LongTexts";
import ProjectsInfo from "../Infos/ProjectsInfo";
import ProjectCard from "../Components/ProjectCard";
import leftChevron from "../Images/Projects/left-chevron.svg"
import rightChevron from "../Images/Projects/right-chevron.svg"
import "../Styles/Pages/Projects.scss"

function Projects() {
  const { englishMode } = useContext(PortContext);
  const carousel = useRef(null);

  /*
    scrollLeft: Lugar onde o scroll se encontra.
    offsetWidth: Largura visível de um elemento.
    scrollWidth: Largura total do scroll, incluindo partes invisíveis.
    Portanto scrollWidth - offsetWidth = comprimento total do scroll (scrollLenght)
    fontes:
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
    https://developer.mozilla.org/en-US/docs/Web/API/Element
  */

  const leftScroll = (e) => {
    e.preventDefault();
    const scrollLenght = carousel.current.scrollWidth - carousel.current.offsetWidth;
    if (carousel.current.scrollLeft < 100 ) {
      carousel.current.scrollLeft = scrollLenght;
    } else {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const rightScroll = (e) => {
    e.preventDefault();
    const scrollLenght = carousel.current.scrollWidth - carousel.current.offsetWidth;
    if (carousel.current.scrollLeft > scrollLenght - 100) {
      carousel.current.scrollLeft = 0;
    } else {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <div className="projects-view">
      <Header page="projects" />
      <div className="projects-main projects-bg">
        <h1 className="projects-ttl">{ englishMode ? "Projects" : "Projetos" }</h1>
        <p className="projects-txt">
          { englishMode ? projEN : projPT }
        </p>
        <div className="projects-outer-carousel">
          <div className="projects-carousel">
            <button className="projects-carousel-button" onClick={ leftScroll }>
              <img className="chevron" src={ leftChevron } alt="left chevron" />
            </button>
            <div className="projects-cards" ref={ carousel }>
              { ProjectsInfo.map((project) => (
                <ProjectCard
                  key={ project.namePT }
                  namePT={ project.namePT }
                  nameEN={ project.nameEN }
                  type={ project.type }
                  image={ project.image }
                  descriptionPT={ project.descriptionPT }
                  descriptionEN={ project.descriptionEN }
                  stacks={ project.stacks }
                  link={ project.link }
                  gitRepository={ project.gitRepository }
                />
              )) }
            </div>
            <button className="projects-carousel-button" onClick={ rightScroll }>
              <img className="chevron" src={ rightChevron } alt="right chevron" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;