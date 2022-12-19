import React from 'react';
import "../Styles/Components/StackCard.scss"

function StackCard(props) {
  return (
    <div className="card-main">
      <h2 className={`stack-name ${props.name}`}>{ props.name }</h2>
      <img className={`stack-image ${props.name}`} src={ props.image } alt={ `${props.name} logo` } />
    </div>
  );
}

export default StackCard;