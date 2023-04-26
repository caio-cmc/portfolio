import React from 'react';
import "../Styles/Components/SocialMedia.scss";

function SocialMedia(props) {
  const { id, name, userLink, image, url } = props;

  return (
    <a
      href={ url }
      target="_blank"
      rel="noreferrer"
      className={`social-anchor fade-bot-${ id * 300 }`}
    >
      <img
        className={`social-logo ${ name }`}
        src={ image }
        alt={ `${ name } logo` }
      />
      <p className="text">{ `${ userLink }` }</p>
    </a>
  );
}

export default SocialMedia;