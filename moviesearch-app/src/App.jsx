import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "80725d5f"; // your OMDB API key

  const searchMovie = async () => {
    if (query.trim() === "") return alert("Enter movie name");

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      setError("Network Error");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovie}>Search</button>
      </div>

      {/* LOADING */}
      {loading && <h2>Loading...</h2>}

      {/* ERROR */}
      {error && <h3 className="error">{error}</h3>}

      {/* MOVIE LIST */}
      <div className="movie-list">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>
    </div>
  );
}

export default App;