import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import Header from "../Components/Header";
import StackCard from "../Components/StackCard";
import StackInfos from "../Infos/StackInfos";
import "../Styles/Pages/Stacks.scss"

function Stacks() {
  const { englishMode } = useContext(PortContext);

  return (
    <div className="skills-view">
      <Header page="skills" />
      <div className="stacks-main skills-bg page-bg">
        <h1 className="skills-ttl title fade-in">
          { englishMode ? "Skills" : "Habilidades" }
        </h1>
        <div className="stack-card-wrap">
          <div className="skill-type-container">
              <h2 className="skills-ttl title fade-in">Front-end</h2>
              <div className="skills-list fade-left">
                {StackInfos.map((stack) => {
                  return stack.type === "front" &&
                  (<StackCard
                    key={ stack.name }
                    name={ stack.name }
                    image={ stack.image }
                  />
                )})}
              </div>
          </div>
          <div className="skill-type-container">
            <h2 className="skills-ttl title fade-in">Back-end</h2>
            <div className="skills-list fade-right">
                {StackInfos.map((stack) => {
                  return stack.type === "back" &&
                  (<StackCard
                    key={ stack.name }
                    name={ stack.name }
                    image={ stack.image }
                  />
                )})}
              </div>
          </div>
          <div className="skill-type-container">
            <h2 className="skills-ttl title fade-in">{ englishMode ? "Tests" : "Testes" }</h2>
            <div className="skills-list fade-left">
                {StackInfos.map((stack) => {
                  return stack.type === "test" &&
                  (<StackCard
                    key={ stack.name }
                    name={ stack.name }
                    image={ stack.image }
                  />
                )})}
              </div>
          </div>
          <div className="skill-type-container">
            <h2 className="skills-ttl title fade-in">{ englishMode ? "Generals" : "Gerais" }</h2>
            <div className="skills-list fade-right">
                {StackInfos.map((stack) => {
                  return stack.type === "general" &&
                  (<StackCard
                    key={ stack.name }
                    name={ stack.name }
                    image={ stack.image }
                  />
                )})}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stacks;