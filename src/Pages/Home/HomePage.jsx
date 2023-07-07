import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Stack Overflow Logo</div>
        <input type="text" className="search-input" placeholder="Search" />
        <nav className="navigation">
          <ul>
            <li>Questions</li>
            <li>Tags</li>
            <li>Users</li>
            <li>Jobs</li>
            <li>Documentation</li>
          </ul>
        </nav>
        <button className="login-button">Login/Signup</button>
      </header>

      <section className="hero-section">
        <h1>Ask questions, get answers, and share knowledge</h1>
        <button className="ask-button">Ask your first question</button>
      </section>

      <section className="featured-questions">
        <h2>Featured Questions</h2>
        <ul>
          <li>
            <h3>Question Title 1</h3>
            <p>Question summary</p>
            <p>Views: 100 | Votes: 10</p>
          </li>
          <li>
            <h3>Question Title 2</h3>
            <p>Question summary</p>
            <p>Views: 200 | Votes: 15</p>
          </li>
        </ul>
        <button className="view-more-button">View More</button>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Stack Overflow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
