import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import emailjs from "@emailjs/browser";
import "../Styles/Components/EmailForm.scss";

function EmailForm() {
  const {
    englishMode,
    email,
    setEmail,
    name,
    setName,
    message,
    setMessage,
  } = useContext(PortContext);

  const buttonSwitch = email && name && message;

  const sendEmail = async (event) => {
    event.preventDefault();
    const templateParams = {
      email: email,
      from_name: name,
      message: message
    }
    await emailjs.send(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      templateParams,
      process.env.REACT_APP_PUB_ID
    );
    alert("Email enviado com sucesso!");
    setEmail("");
    setName("");
    setMessage("");
  }

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  }

  const handleName = (event) => {
    const { value } = event.target;
    setName(value);
  }

  const handleMessage = (event) => {
    const { value } = event.target;
    setMessage(value);
  }

  return (
    <div className="fade-in-300">
      <form className="email-form" onSubmit={ sendEmail }>
        <input
          className="form-input email"
          type="email"
          value={ email }
          onChange={ handleEmail }
          placeholder={
            englishMode ? "Enter your e-mail" : "Digite seu e-mail"
          }
        />
        <input
          className="form-input name"
          type="text"
          value={ name }
          onChange={ handleName }
          placeholder={
            englishMode ? "Enter your name" : "Digite seu nome"
          }
        />
        <textarea
          className="form-input message"
          value={ message }
          onChange={ handleMessage }
          placeholder={
            englishMode ? "Enter your message" : "Digite sua mensagem"
          }
        />
        <button
          className="form-input form-sub-button"
          type="submit"
          disabled={ !buttonSwitch }
        >
          { englishMode ? "Send" : "Enviar" }
        </button>
      </form>
    </div>
  );
}

export default EmailForm;