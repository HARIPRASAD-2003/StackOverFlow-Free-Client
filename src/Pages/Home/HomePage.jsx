import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import home_background from '../../assets/home-background.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="image-overlay">
        <img src={home_background} alt="Background" />
        <div className="overlay-content">
          <h1>Welcome to Stack Overflow</h1>
          <p>Ask questions, get answers, and share knowledge</p>
        </div>
      </div>

      <section className="hero-section overlay-section">
        <div className="hero-image-overlay">
          <img src={home_background} alt="Hero" />
        </div>
        <div className="overlay-content">
          <h2>Hero Section</h2>
          <p>Some text for the hero section</p>
          <button className="ask-button">Ask your first question</button>
        </div>
      </section>

      <section className="featured-questions overlay-section">
        <div className="featured-image-overlay">
          <img src={home_background} alt="Featured" />
        </div>
        <div className="overlay-content">
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
        </div>
      </section>

      <footer className="footer overlay-section">
        <div className="footer-image-overlay">
          <img src={home_background} alt="Footer" />
        </div>
        <div className="overlay-content">
          <p>&copy; 2023 Stack Overflow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
