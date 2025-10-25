import { useTranslation } from "react-i18next";
import "./Testimonials.css";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    {
      id: 1,
      name: "Sarah M. (Belgium)",
      feedback: t("feedbakClient1"),
    },
    {
      id: 2,
      name: "Ahmed R. (Iraq)",
      feedback: t("feedbakClient2"),
    },
    {
      id: 3,
      name: "Laila K. (Saudi Arabia)",
      feedback: t("feedbakClient3"),
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <IoPersonCircleOutline className="testimonial-icon" />
            <div className="testimonial-content">
              <p className="testimonial-text">"{item.feedback}"</p>
              <h3 className="testimonial-author">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
