import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import home_background_1 from '../../assets/home-background-1.png';
import home_background_2 from '../../assets/home-background-2.png';
import home_background_3 from '../../assets/home-background-3.png';
import home_background_4 from '../../assets/home-background-4.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="image-overlay">
        <img src={home_background_1} alt="Background" />
        <div className="overlay-content">
          <h1>Welcome to TECH MARVEL</h1>
          <p>Ask questions, get answers, and share knowledge</p>
        </div>
      </div>

      <div className="image-overlay" style={{ width: '100%' }}>
        <img src={home_background_2} alt="Background" />
        <div className="overlay-content" style={{backgroundColor: 'white', borderRadius: '10px', paddingBottom: "10px"}}>
          <h2>Discover Our Platform</h2>
          <p>
            TECH MARVEL is a question and answer website for professional and enthusiast programmers. It is a
            community-driven platform where developers can ask questions, provide answers, and share knowledge.
          </p>
          <button className="ask-button">Ask your first question</button>
        </div>
      </div>

      <div className="image-overlay" style={{ width: '100%' }}>
        <img src={home_background_3} alt="Background" />
        <div className="overlay-content">
          <h2>Featured Questions</h2>
          <ul>
            <li>
              <h3>How to create a responsive website?</h3>
              <p>
                I'm looking for suggestions on building a responsive website. Any tips or best practices would be
                appreciated.
              </p>
              <p>Views: 100 | Votes: 10</p>
            </li>
            <li>
              <h3>How to debug JavaScript code?</h3>
              <p>
                My JavaScript code isn't working as expected. What are some effective methods for debugging JavaScript
                applications?
              </p>
              <p>Views: 200 | Votes: 15</p>
            </li>
          </ul>
          <button className="view-more-button">View More</button>
        </div>
      </div>

      <div className="image-overlay" style={{ width: '100%' }}>
        <img src={home_background_4} alt="Background" />
        <div className="overlay-content">
          <h2>About TECH MARVEL</h2>
          <p>
            TECH MARVEL is a question and answer website for professional and enthusiast programmers. It is a
            community-driven platform where developers can ask questions, provide answers, and share knowledge.
          </p>
        </div>
      </div>

      <footer className="footer" style={{ width: '100%' }}>
        <div>
          <p>&copy; 2023 TECH MARVEL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
