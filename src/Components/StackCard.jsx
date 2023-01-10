import React from 'react';
import "../Styles/Components/StackCard.scss"

function StackCard(props) {
  const { name, image } = props;

  return (
    <div className="card-main card-bg">
      <h2 className={`stack-name ${name} ttl`}>{ name }</h2>
      <img className={`stack-image ${name}`} src={ image } alt={ `${name} logo` } />
    </div>
  );
}

export default StackCard;