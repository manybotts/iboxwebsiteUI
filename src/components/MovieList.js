import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import BACKEND_URL from "../config"; // ✅ Fixed Path

const MovieList = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/${category}`)
      .then((res) => res.json())
      .then((data) => setItems(data[category]));
  }, [category]);

  return (
    <div>
      {items.map((item) => (
        <MovieCard key={item.file_id} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
