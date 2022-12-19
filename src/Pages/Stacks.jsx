import React from 'react';
import Header from '../Components/Header';
import StackCard from '../Components/StackCard';
import StacksInfo from '../MockFiles/Stacks';
import '../Styles/Pages/Stacks.scss'

function Stacks() {
  return (
    <div>
      <Header />
      <div className="stacks-main">
        <h1>Stacks</h1>
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