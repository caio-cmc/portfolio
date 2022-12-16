import React from 'react';
import Header from '../Components/Header';
import StacksInfo from '../MockFiles/Stacks';
import '../Styles/Pages/Stacks.scss'

function Stacks() {
  return (
    <div>
      <Header />
      <div className="stacks-main">
        <h1>Stacks</h1>
        {StacksInfo.map((stack) => (
          <div>
            <h2>{ stack.name }</h2>
            <img src={ stack.image } alt={ `${stack.name} logo` } />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;