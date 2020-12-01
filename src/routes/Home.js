import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import "./Home.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    setMovies(movies);
    setIsLoading(true);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="container">
      {!isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Home;
