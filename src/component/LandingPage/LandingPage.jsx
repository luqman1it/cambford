import "./LandingPage.css";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import { useEffect, useState, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();
  // Store slides in a way that can be retranslated when changing language.
  const slides = useMemo(
    () => [
      { image: slide1, text: t("textSlide1") },
      { image: slide2, text: t("textSlide2") },
      { image: slide3, text: t("textSlide3") },
      { image: slide4, text: "" },
    ],
    [t]
  );

  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };
  // Automatic slider operation with smart cleaning
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  //When pressing the arrows, pause the switching to avoid conflict.
  const handleManualSlide = (direction) => {
    stopAutoSlide();
    direction === "next" ? nextSlide() : prevSlide();
    setTimeout(startAutoSlide, 6000);
  };

  return (
    <section className="landingPage">
      <div className="slider">
        <FaRegArrowAltCircleLeft
          className="arrow left"
          onClick={() => handleManualSlide("prev")}
        />

        <div className="slides-container">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {item.text && (
                <div className="slide-text">
                  <h2>{item.text}</h2>
                </div>
              )}
            </div>
          ))}
        </div>

        <FaRegArrowAltCircleRight
          className="arrow right"
          onClick={() => handleManualSlide("next")}
        />
      </div>
    </section>
  );
}
