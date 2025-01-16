import React from 'react';
import './Home.css'; // Import file CSS để tạo kiểu

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
      </header>
      <section className="home-content">
        <h2>Your one-stop solution for all things tech</h2>
        <p>
          We provide innovative technology solutions for businesses and individuals. Whether you're looking for custom software, mobile apps, or web development, we are here to help.
        </p>
      </section>
      <footer className="home-footer">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
