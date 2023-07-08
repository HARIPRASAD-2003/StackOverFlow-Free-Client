import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import home_background_1 from '../../assets/home-background-1.png';
import home_background_2 from '../../assets/home-background-2.png';
import home_background_3 from '../../assets/home-background-3.png';
import home_background_4 from '../../assets/home-background-4.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const checkAuth = () => {
      if(User === null){
        alert("login or signup to ask a question")
        navigate("/Auth")
      }else{
        navigate("/AskQuestion")
      }
    }

  return (
    <div className="homepage">
      <div className="image-overlay">
        <img src={home_background_1} alt="Background" />
        <div className="overlay-content" style={{backgroundColor:'transparent'}}>
          <h1>Welcome to TECH MARVEL</h1>
          <p>Ask questions, get answers, and share knowledge</p>
        </div>
      </div>
      <div className="image-overlay overlay-section" style={{ width: '100%' }}>
        <img src={home_background_2} alt="Background" />
        <div className="overlay-content" style={{ borderRadius: '10px', padding: '10px', paddingBottom: '30px' }}>
            <h2>Discover Our Platform</h2>
            <p>
            TECH MARVEL is a question and answer website for professional and enthusiast programmers. It is a
            community-driven platform where developers can ask questions, provide answers, and share knowledge.
            </p>
            <button className="ask-button" onClick={checkAuth}>Ask your first question</button>
            <div className='largeScreens'>
            <h3>Join our community to:</h3>
            <ul>
            <li><p>Connect with other developers</p></li>
            <li><p>Ask and answer questions</p></li>
            <li><p>Share your expertise</p></li>
            <li><p>Stay updated with the latest technologies</p></li>
            </ul>
            </div>
        </div>
      </div>

      <div className="image-overlay overlay-section" style={{ width: '100%' }}>
        <img src={home_background_3} alt="Background"/>
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
            <li className='largeScreens'>
              <h3>How to debug JavaScript code?</h3>
              <p>
                My JavaScript code isn't working as expected. What are some effective methods for debugging JavaScript
                applications?
              </p>
              <p>Views: 200 | Votes: 15</p>
            </li>
          </ul>
          <button className="view-more-button" onClick={() => navigate('/Questions')}>View More</button>
        </div>
      </div>
      {/* </section> */}
      {/* <section className='overlay-section'> */}
        <div className="image-overlay overlay-section" style={{ width: '100%' }}>
            <img src={home_background_4} alt="Background" />
            <div className="overlay-content">
            <h2>About TECH MARVEL</h2>
            <p>
            TECH MARVEL is a question and answer website for professional and enthusiast programmers. It is a
            community-driven platform where developers can ask questions, provide answers, and share knowledge.
            </p>
            <div className='largeScreens'>
            <h3>Why Choose TECH MARVEL:</h3>
            <ul>
            <li>Wide range of technology topics covered</li>
            <li>Active and supportive community</li>
            <li>Quality answers from experts</li>
            <li>User-friendly interface</li>
            <li>Regular updates and improvements</li>
            </ul>
            </div>
            <p>
            Join TECH MARVEL today and enhance your programming knowledge while connecting with a vibrant community of
            developers.
            </p>
            <button className="view-more-button" onClick={() => navigate('/About')}>View More</button>
        </div>
        </div>
        {/* </section> */}

      <footer className="footer" style={{ width: '100%' }}>
        <div>
          <p>&copy; 2023 TECH MARVEL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
