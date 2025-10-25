import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import NavMenu from "../NavMenu";
import LanguageSwitch from "../LanguageSwitch";
import SocialLinks from "../SocialLinks";

const logoSrc = "/cambford/logo.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setLang(lng);
  };

  const handleToggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setMenuOpen(true);
    }
  };

  const navLinks = [
    { to: "/", label: t("home") },
    { to: "/news", label: t("news") },
    { to: "/courses", label: t("courses") },
    { to: "/about", label: t("header-about") },
    { to: "/certificates", label: t("verifyCertificate") },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__brand">
          <a href="/" aria-label={t("home") + " - logo"}>
            <img
              src={logoSrc}
              alt={t("siteLogoAlt") || "logo"}
              className="logo"
              loading="lazy"
            />
          </a>
          <div className="site-collage-name-wrapper">
            <span className="cambford-word">CAMBFORD</span>
            <span>COLLEGE</span>
          </div>
        </div>

        <button
          className="hamburger"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* list on desktop */}
        <div className="site-header_navigation desktop-only">
          <NavMenu navLinks={navLinks} />
          <LanguageSwitch lang={lang} changeLanguage={changeLanguage} />
          <SocialLinks />
        </div>
      </div>

      {/* list on mobile */}
      {(menuOpen || isClosing) && (
        <div className={`mobile-menu ${isClosing ? "closing" : "opening"}`}>
          <NavMenu navLinks={navLinks} onLinkClick={handleToggleMenu} />
          <LanguageSwitch
            lang={lang}
            changeLanguage={changeLanguage}
            onSelect={handleToggleMenu}
          />
          <SocialLinks />
        </div>
      )}
    </header>
  );
}
