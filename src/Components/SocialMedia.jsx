import React from 'react';
import "../Styles/Components/SocialMedia.scss";

function SocialMedia(props) {
  const { name, image, url } = props;

  return (
    <a
      href={ url }
      target="_blank"
      rel="noreferrer"
      className="social-anchor"
    >
      <img
        className={`social-logo ${ name }`}
        src={ image }
        alt={ `${ name } logo` }
      />
      <p className="txt">{ `${ name }` }</p>
    </a>
  );
}

export default SocialMedia;