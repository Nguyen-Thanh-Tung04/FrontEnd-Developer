import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import './index.css';  // Import index.css trực tiếp vào App.jsx

function App() {
  return (
    <Router> {/* Bọc Routes với Router */}
      <div>
        {/* Thêm menu điều hướng */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;