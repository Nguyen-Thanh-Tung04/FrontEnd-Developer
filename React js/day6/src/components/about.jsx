import React from 'react';
import './About.css'; // Import file CSS để tạo kiểu

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <h2>Welcome to Our Website!</h2>
        <p>
          We are a team of passionate individuals dedicated to delivering the best user experience.
          Our mission is to provide high-quality solutions to our customers and make a positive impact
          on the community. Feel free to explore our website and learn more about what we do!
        </p>
        <p>
          Our services include web development, mobile apps, and custom software solutions. We pride ourselves
          on creating intuitive and efficient products that cater to the unique needs of our clients.
        </p>
      </section>
      <footer className="about-footer">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
