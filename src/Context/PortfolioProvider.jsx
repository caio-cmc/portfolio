import React, { useState } from "react";
import PortContext from "./PortfolioContext";

function PortProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [englishMode, setEnglishMode] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const md = darkMode ? 'dark' : 'light';

  const portValue = {
    darkMode,
    setDarkMode,
    englishMode,
    setEnglishMode,
    email,
    setEmail,
    name,
    setName,
    message,
    setMessage,
    md
  }

  return (
    <PortContext.Provider value={ portValue }>
      { children }
    </PortContext.Provider>
  )
};

export default PortProvider;
