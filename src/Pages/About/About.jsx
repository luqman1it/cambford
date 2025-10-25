import "./About.css";
import cert from "../../assets/images/certificate.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function About() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // فتح النافذة المنبثقة
  const openModal = () => setIsModalOpen(true);
  // إغلاقها
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="about-section">
      <div className="container about__wrapper">
        {/* === النصوص === */}
        <div className="about__content">
          <h2 className="about__title">{t("about.whoWeAre.title")}</h2>
          <p className="about__text">{t("about.whoWeAre.text")}</p>

          <h2 className="about__title">{t("about.vision.title")}</h2>
          <p className="about__text">{t("about.vision.text")}</p>

          <h2 className="about__title">{t("about.mission.title")}</h2>
          <p className="about__text">{t("about.mission.text")}</p>

          <h2 className="about__title">{t("about.values.title")}</h2>
          <p className="about__text">
            <strong>{t("about.values.excellence.title")}</strong>{" "}
            {t("about.values.excellence.text")}
            <br />
            <strong>{t("about.values.integrity.title")}</strong>{" "}
            {t("about.values.integrity.text")}
            <br />
            <strong>{t("about.values.innovation.title")}</strong>{" "}
            {t("about.values.innovation.text")}
            <br />
            <strong>{t("about.values.diversity.title")}</strong>{" "}
            {t("about.values.diversity.text")}
          </p>

          <h2 className="about__title">{t("about.registered.title")}</h2>
          <p className="about__text">{t("about.registered.text")}</p>
        </div>

        {/* === الصورة === */}
        <div className="about__image-wrapper" onClick={openModal}>
          <img
            src={cert}
            alt={t("about.imageAlt")}
            className="about__image"
            title={t("about.imageAlt")}
          />
        </div>
      </div>

      {/* === النافذة المنبثقة لتكبير الصورة === */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div
            className="image-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={cert}
              alt={t("about.imageAlt")}
              className="image-modal__img"
            />
            <button className="image-modal__close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
