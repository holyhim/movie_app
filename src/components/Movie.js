import { useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.scss";

export default function Movie({ id, year, title, summary, poster, genres }) {
  const [showAll, setShowAll] = useState(false);

  // const showAllSummary = () => {
  //   setShowAll(!showAll);
  // };

  // const summerize = (summary) => {
  //   return summary.length > 200 ? (
  //     <p className="movie_summary">
  //       {!showAll ? summary.slice(0, 200) : summary}
  //       <button className="summary-btn" onClick={showAllSummary}>
  //         {!showAll ? `...더보기` : `숨기기`}
  //       </button>
  //     </p>
  //   ) : (
  //     <p>{summary}</p>
  //   );
  // };

  return (
    <div className="movie">
      <Link
        to={{
          pathname: `movie/${id}`,
          state: {
            year,
            title,
            genres,
            summary,
            poster,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => {
              return (
                <li className="movie_genre" key={index}>
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie_summary">
            {summary.lenth > 200 ? summary.slice(0, 200) : summary}
          </p>
        </div>
      </Link>
    </div>
  );
}
