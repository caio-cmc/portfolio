import React from 'react';
import "../Styles/Components/SocialMedia.scss";

function SocialMedia(props) {
  const { name, userLink, image, url } = props;

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
      <p className="txt">{ `${ userLink }` }</p>
    </a>
  );
}

export default SocialMedia;