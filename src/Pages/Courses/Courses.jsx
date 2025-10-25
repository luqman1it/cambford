import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import imageCourse from "../../assets/images/female.jpg";
import "./Courses.css";
import { useTranslation } from "react-i18next";

// ✅ بيانات ثابتة خارج المكوّن لتقليل إعادة التصيير
const coursesData = [
  {
    id: 1,
    img: imageCourse,
    name: "Front End Developer",
    details: "HTML, CSS, JavaScript",
    categoryKey: "programsCategory",
  },
  {
    id: 2,
    img: imageCourse,
    name: "Video Editor",
    details: "Premiere, After Effects",
    categoryKey: "coursesCategory",
  },
  {
    id: 3,
    img: imageCourse,
    name: "UI / UX",
    details: "Figma, Design Thinking",
    categoryKey: "coursesCategory",
  },
  {
    id: 4,
    img: imageCourse,
    name: "Web Design",
    details: "HTML, CSS, Responsive Layouts",
    categoryKey: "programsCategory",
  },
  {
    id: 5,
    img: imageCourse,
    name: "Back End Developer",
    details: "Node.js, Express, MongoDB",
    categoryKey: "programsCategory",
  },
];

export default function Courses() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // ✅ تصنيفات مترجمة لكن بمفتاح ثابت
  const categories = [
    { key: "allCategory", label: t("allCategory") },
    { key: "programsCategory", label: t("programsCategory") },
    { key: "coursesCategory", label: t("coursesCategory") },
  ];

  const [selectedCategory, setSelectedCategory] = useState("allCategory");
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCourse, setSelectedCourse] = useState(null);

  // ✅ تصفية الدورات بشكل فعال باستخدام useMemo
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchCategory =
        selectedCategory === "allCategory" ||
        course.categoryKey === selectedCategory;
      const matchSearch = course.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section className="courses-section m-t m-b">
      <div className="container courses-container">
        {/* === Header === */}
        <div className="courses-header">
          <h2 className="courses-title">{t("headCourse")}</h2>
          <p className="courses-subtitle">{t("subTitle")}</p>
        </div>

        {/* === Search + Filter === */}
        <div className="courses-controls">
          <div className="search-box">
            <input
              type="search"
              placeholder={t("placeHolderCourse")}
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm === "" && <BiSearch className="search-icon-courses" />}
          </div>

          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`filter-btn ${
                  selectedCategory === cat.key ? "active" : ""
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* === Courses Grid === */}
        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <img
                  src={course.img}
                  alt={course.name}
                  className="course-img"
                />
                <div className="course-info">
                  <h3>{course.name}</h3>
                  <p>{course.details}</p>

                  <button
                    className="enroll-btn"
                    onClick={() =>
                      navigate(`/course/${course.id}`, { state: { course } })
                    }
                  >
                    {t("enroll Now") || "Enroll Now"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">
              {t("noCourses") || "No courses found."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
