import "./LanguageSwitch.css";

export default function LanguageSwitch({ lang, changeLanguage }) {
  const otherLang = lang === "en" ? "ar" : "en";
  const label = lang === "en" ? "English" : "Arabic";
  const otherLabel = lang === "en" ? "Arabic" : "English";

  return (
    <div className="language-switch">
      <div className="dropdown">
        <button className="lang-btn active">{label}</button>
        <div className="dropdown-content">
          <button
            className="lang-btn"
            onClick={() => changeLanguage(otherLang)}
          >
            {otherLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
