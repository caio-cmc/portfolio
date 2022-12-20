import React, { useContext } from 'react';
import PortContext from '../Context/PortfolioContext';
import Header from '../Components/Header';
import StackCard from '../Components/StackCard';
import StacksInfo from '../MockFiles/Stacks';
import '../Styles/Pages/Stacks.scss'

function Stacks() {
  const { englishMode } = useContext(PortContext);

  return (
    <div>
      <Header />
      <div className="stacks-main">
        <h1>{ englishMode ? 'Skills' : 'Habilidades' }</h1>
        <div className="stack-card-wrap">
          {StacksInfo.map((stack) => (
            <StackCard name={stack.name} image={stack.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;