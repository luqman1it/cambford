import "./News.css";
import personalPhoto from "../../assets/images/female.jpg";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function News() {
  const { t } = useTranslation();
  const newsData = [
    {
      id: 1,
      title: "Breaking: Major AI breakthrough announced at global summit",
      date: "2025-10-10",
      image: personalPhoto,
      description:
        "Researchers have unveiled a new AI model capable of reasoning and creativity beyond current systems, sparking discussions about the future of human-AI collaboration.",
    },
    {
      id: 2,
      title: "The women taking Meta to task after their baby loss",
      date: "2025-04-04",
      image: personalPhoto,
      description:
        "A growing number of women are speaking out about how social media platforms handled their pregnancy loss experiences and the lack of support they felt online.",
    },
    {
      id: 3,
      title: "AI Revolution: How Artificial Intelligence is changing jobs",
      date: "2025-03-18",
      image: personalPhoto,
      description:
        "Experts predict that AI will transform how we work. Some jobs may vanish, but new opportunities are emerging in surprising ways. This change highlights the importance of digital literacy and ongoing professional development.",
    },
    {
      id: 4,
      title: "Climate Summit 2025: Leaders agree on new carbon goals",
      date: "2025-02-10",
      image: personalPhoto,
      description:
        "World leaders have pledged to cut carbon emissions by 40% before 2030, marking a major shift in global environmental policy. Countries are also committing to invest heavily in renewable energy technologies.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 11;

  //Account for news displayed on the current page
  const indexOfLast = currentPage * newsPerPage;
  const indexOfFirst = indexOfLast - newsPerPage;
  const currentNews = newsData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(newsData.length / newsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-search">
          <div className="search-box">
            <MdSearch className="search-icon" />
            <input
              type="text"
              className="news-search-input"
              placeholder={t("placeholderNews") || "Search for news..."}
            />
          </div>
        </div>

        <div className="news-grid">
          {currentNews.map((news, index) => (
            <article
              key={news.id}
              className={`news-card ${
                index === 0 ? "news-card--featured" : ""
              }`}
            >
              <div className="news-card__image-wrapper">
                <img
                  src={news.image}
                  alt={news.title}
                  className="news-card__image"
                />
              </div>

              <div className="news-card__content">
                <h2 className="news-card__title">{news.title}</h2>
                <span className="news-card__date">{news.date}</span>
                <p className="news-card__description">{news.description}</p>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="pagination-btn"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
