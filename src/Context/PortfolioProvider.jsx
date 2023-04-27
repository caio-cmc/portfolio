import React, { useState, useEffect } from "react";
import PortContext from "./PortfolioContext";

function PortProvider({ children }) {
  const currMode = JSON.parse(localStorage.getItem("darkmode"));
  const currLang = JSON.parse(localStorage.getItem("english"));
  const [darkMode, setDarkMode] = useState(currMode);
  const [englishMode, setEnglishMode] = useState(currLang);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [currPage, setCurrPage] = useState({
    about: "", skills: "", projects: "", contact: ""
  });

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
    localStorage.setItem("english", JSON.stringify(englishMode));
  }, [darkMode, englishMode])

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
    currPage,
    setCurrPage
  }

  return (
    <PortContext.Provider value={ portValue }>
      { children }
    </PortContext.Provider>
  )
};

export default PortProvider;
