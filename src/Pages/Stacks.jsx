import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import Header from "../Components/Header";
import StackCard from "../Components/StackCard";
import StackInfos from "../Infos/StackInfos";
import "../Styles/Pages/Stacks.scss"

function Stacks() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <Header />
      <div className="stacks-main bg">
        <h1 className="ttl">
          { englishMode ? "Skills" : "Habilidades" }
        </h1>
        <div className="stack-card-wrap">
          {StackInfos.map((stack) => (
            <StackCard name={ stack.name } image={ stack.image } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;