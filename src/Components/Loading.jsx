import React, { useContext, useEffect } from 'react';
import PortContext from "../Context/PortfolioContext";
import loadingBird from "../Images/loading-bird.gif";
import "../Styles/Components/Loading.scss";

function Loading() {
  const {
    englishMode,
    isLoading,
    dots,
    setDots
  } = useContext(PortContext);
  
  useEffect(() => {
    const addingDots = setInterval(() => {
      setDots(prevDots => {
        if (prevDots === '...') {
          return '';
        } else {
          return prevDots + '.';
        }
      });
    }, 800);

    return () => clearInterval(addingDots);
  }, [setDots]);

  return (
    <div className={ isLoading ? "loading-screen" : "loading-hidden" }>
      <img src={ loadingBird } alt="loading img" />
      <h1 className="title" >{ englishMode ? `Sending${dots}` : `Enviando${dots}` }</h1>
    </div>
  )
}

export default Loading;