import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";  // ✅ Ensure the file exists in `pages/Home.js`
import Watch from "./pages/Watch";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/admin">🔧 Admin</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:file_id" element={<Watch />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
