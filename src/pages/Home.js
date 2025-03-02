import React from "react";
import MovieList from "../components/MovieList";
import BACKEND_URL from "../config"; // ✅ Moves up to src/

const Home = () => {
  return (
    <div>
      <h1>🎬 Welcome to Movie Stream</h1>
      <h2>📽️ Latest Movies</h2>
      <MovieList category="movies" />
      <h2>📺 Popular TV Shows</h2>
      <MovieList category="tvshows" />
    </div>
  );
};

export default Home;
