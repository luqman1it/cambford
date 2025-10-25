import "./Footer.css";
import SocialLinks from "../SocialLinks.jsx";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/uk-government-crown-crest-logo-png_seeklogo-173969.png";
import logo3 from "../../assets/images/royal-crown-flat-style-on-600nw-2291404865.jpg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* === Top Section: Navigation & Contact Info === */}
        <div className="footer__main">
          {/* Security & Policy Links */}
          <div className="footer__column">
            <h3 className="footer__title">{t("securityBrand")}</h3>
            <ul className="footer__list contact-nav">
              <li className="footer__item">{t("privacyPolicy")}</li>
              <li className="footer__item">{t("termsConditions")}</li>
              <li className="footer__item">{t("support")}</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer__column">
            <h3 className="footer__title">{t("contact")}</h3>
            <ul className="footer__list">
              <li className="footer__item">Cambford@gmail.com</li>
              <li className="footer__item">+963932034434</li>
              <li className="footer__item">
                182-184 High Street North, East Ham, London, United Kingdom, E6
                2JA
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer__column footer__social">
            <SocialLinks />
          </div>
        </div>

        {/* === Bottom Section: Logos or Partners === */}
        <div className="footer__bottom">
          <div className="footer__logos">
            <img src={logo2} alt="Cambford Logo" />
            <img src={logo} alt="Cambford Logo" />
            <img src={logo3} alt="Cambford Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
