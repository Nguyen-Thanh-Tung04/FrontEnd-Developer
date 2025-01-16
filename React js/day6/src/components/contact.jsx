import React, { useState } from 'react';
import './Contact.css'; // Import file CSS để tạo kiểu

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-content">
        <h2>We'd love to hear from you!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      <footer className="contact-footer">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
