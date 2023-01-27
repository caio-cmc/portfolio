import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import Header from "../Components/Header";
import EmailForm from "../Components/EmailForm";
import SocialMedia from "../Components/SocialMedia";
import SocialMediaInfos from "../Infos/SocialMediaInfos";
import "../Styles/Pages/Contact.scss";

function Contact() {
  const { englishMode } = useContext(PortContext);

  return (
    <div className="contact-page-main">
      <Header page="contact" />
      <div className="contact-bg">
        <div className="contact-text-container">
          <h1 className="contact-ttl">
            { englishMode ? "Contact me" : "Fale comigo" }
          </h1>
          <p className="contact-txt">
            Gostou do que viu aqui? Entra em contato comigo!
            <br />
            Preenchendo esse formulário aqui embaixo, você vai estar me mandando um e-mail, vou responder o mais rápido o possível, eu prometo.
            <br />
            Lá no final, tem os links pras minhas redes sociais, sinta-se livre pra me dar uma stalkeada kkkkkkkk
          </p>
        </div>
        <EmailForm />
        <div className="contact-page-links">
          { SocialMediaInfos.map((social) => (
            <SocialMedia
              key={ social.name }
              userLink={ social.userLink }
              name={ social.name }
              image={ social.image }
              url={ social.url }
            />
          )) }
        </div>
      </div>
    </div>
  );
}

export default Contact;