import React, { useState } from "react";
import PortContext from "./PortfolioContext";

function PortProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [englishMode, setEnglishMode] = useState(false);

  const md = darkMode ? 'drk' : 'lgt';

  const portValue = {
    darkMode,
    setDarkMode,
    englishMode,
    setEnglishMode,
    md
  }

  return (
    <PortContext.Provider value={ portValue }>
      { children }
    </PortContext.Provider>
  )
};

export default PortProvider;
