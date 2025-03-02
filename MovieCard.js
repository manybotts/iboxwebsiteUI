import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.poster} alt={movie.title} width="150px" />
      <h3>{movie.title} ({movie.year})</h3>
      <p>{movie.description}</p>
      <a href={`/watch/${movie.file_id}`}>🎥 Watch Now</a>
    </div>
  );
};

export default MovieCard;
