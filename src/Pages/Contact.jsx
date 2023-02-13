import React, { useContext } from "react";
import PortContext from "../Context/PortfolioContext";
import Header from "../Components/Header";
import EmailForm from "../Components/EmailForm";
import SocialMedia from "../Components/SocialMedia";
import SocialMediaInfos from "../Infos/SocialMediaInfos";
import { contPT1, contEN1, contPT2, contEN2, contPT3, contEN3 } from "../Infos/LongTexts";
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
            { englishMode ? contEN1 : contPT1 }
            <br />
            { englishMode ? contEN2 : contPT2 }
            <br />
            { englishMode ? contEN3 : contPT3 }
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