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
    setIsLoading
  } = useContext(PortContext);

  const buttonSwitch = email && name && message;

  const sendEmail = async (event) => {
    event.preventDefault();
    const templateParams = {
      email: email,
      from_name: name,
      message: message
    }
    setEmail("");
    setName("");
    setMessage("");
    setIsLoading(true);
    await emailjs.send(
      "service_0fa9e39",
      "template_5vbast9",
      templateParams,
      "mHyviWDHI44ngM91J"
    );
    setIsLoading(false);
    if (englishMode) {
      alert("Email successfully sent!");
    } else {
      alert("Email enviado com sucesso!");
    }
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
      <form className="email-form">
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
          type="button"
          disabled={ !buttonSwitch }
          onClick={ sendEmail }
        >
          { englishMode ? "Send" : "Enviar" }
        </button>
      </form>
    </div>
  );
}

export default EmailForm;