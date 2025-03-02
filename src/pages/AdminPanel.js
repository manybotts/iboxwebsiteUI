import React, { useEffect, useState } from "react";
import BACKEND_URL from "../config"; // ✅ Moves up to src/

const AdminPanel = () => {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTVShows] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/admin/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));

    fetch(`${BACKEND_URL}/admin/tvshows`)
      .then((res) => res.json())
      .then((data) => setTVShows(data.tvshows));

    fetch(`${BACKEND_URL}/admin/requests`)
      .then((res) => res.json())
      .then((data) => setRequests(data.requests));
  }, []);

  const clearRequests = async () => {
    await fetch(`${BACKEND_URL}/admin/requests/clear`, { method: "DELETE" });
    setRequests([]);
  };

  return (
    <div>
      <h2>🎬 Movies</h2>
      {movies.map((movie) => (
        <p key={movie.file_id}>{movie.title}</p>
      ))}

      <h2>📺 TV Shows</h2>
      {tvshows.map((show) => (
        <p key={show.file_id}>{show.title}</p>
      ))}

      <h2>📩 User Requests</h2>
      {requests.map((req, index) => (
        <p key={index}>{req.title} (by @{req.username})</p>
      ))}

      <button onClick={clearRequests}>❌ Clear Requests</button>
    </div>
  );
};

export default AdminPanel;
