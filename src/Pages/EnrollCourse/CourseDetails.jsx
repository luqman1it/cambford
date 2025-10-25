import { useLocation } from "react-router-dom";
import { BiLinkExternal, BiLogoWhatsapp, BiMailSend } from "react-icons/bi";
import "./CourseDetails.css";

export default function CourseDetails() {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) {
    return (
      <p style={{ textAlign: "center", marginTop: "100px" }}>
        Course not found.
      </p>
    );
  }

  return (
    <section className="course-details section">
      <div className="container course-details__wrapper">
        {/* القسم الأيسر: الصورة + المعلومات */}
        <div className="course-details__info">
          <img
            src={course.img}
            alt={course.name}
            className="course-details__image"
          />
          <div className="course-text-contnet">
            <div className="decription-wrapper">
              <h2 className="course-details__title">{course.name}</h2>
              <p className="course-details__description">{course.details}</p>
            </div>
            <div className="course-details__actions">
              <div className="course-details__enroll">
                <p className="course-details__note">
                  To enroll in this course, please fill out your personal
                  information in the form below
                </p>
                <a
                  href="https://forms.gle/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-details__link"
                >
                  <BiLinkExternal /> Google Form
                </a>
              </div>

              <div className="course-details__contact">
                <h3 className="course-details__contact-title">
                  For more inquiries, please contact us:
                </h3>
                <a
                  href="https://wa.me/963900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-details__link"
                >
                  <BiLogoWhatsapp /> WhatsApp
                </a>
                <a
                  href="mailto:example@email.com"
                  className="course-details__link"
                >
                  <BiMailSend /> Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* القسم الأيمن: الروابط والتعليمات */}
      </div>
    </section>
  );
}
