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
        <h1 className="ttl">
          { englishMode ? "Contact me" : "Fale comigo" }
        </h1>
        <div className="components-wrap">
          <EmailForm />
          <div className="contact-page-links">
            { SocialMediaInfos.map((social) => (
              <SocialMedia
                key={ social.name }
                name={ social.name }
                image={ social.image }
                url={ social.url }
              />
            )) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;