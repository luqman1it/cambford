import React, { useEffect, useRef } from "react";
import "./Home.css";
import homeimage1 from "../../assets/images/istockphoto.jpg";
import homeimage2 from "../../assets/images/female.jpg";
import homeimage3 from "../../assets/images/premium_photo.jpeg";
import { useTranslation } from "react-i18next";
import LandingPage from "../../component/LandingPage/LandingPage";
import Testimonials from "../../component/Testimonials/Testimonials";

export default function Home() {
  const sectionsRef = useRef([]);
  const { t } = useTranslation();
  const contentData = [
    {
      image: homeimage1,

      title: t("section1Title"),
      text: t("section1Text"),
    },
    {
      image: homeimage2,
      title: t("section2Title"),
      text: t("section2Text"),
      reverse: true,
    },
    {
      image: homeimage3,
      title: t("section3Title"),
      text: t("section3Text"),
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <LandingPage />
      <div className="container">
        <section className="home-content">
          {contentData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`box-content ${item.reverse ? "reverse" : ""}`}
            >
              <img src={item.image} alt="Home visual" className="image-box" />
              <div className="details">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </section>
        <Testimonials />
      </div>
    </div>
  );
}
