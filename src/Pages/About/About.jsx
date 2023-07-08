import React from 'react';
import './About.css';
import founder from '../../assets/founder.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About TECH MARVEL</h2>
        <p>
          TECH MARVEL is a question and answer website for professional and enthusiast programmers. It is a
          community-driven platform where developers can ask questions, provide answers, and share knowledge.
        </p>
      </section>

      <section className="mission-section">
        <h3>Our Mission</h3>
        <p>
          At TECH MARVEL, our mission is to provide a collaborative space where programmers can connect, learn, and
          grow together.
        </p>
      </section>

      <section className="features-section">
        <h3>Features and Benefits</h3>
        <ul>
          <li>Ask and answer questions related to programming, algorithms, software development, and more.</li>
          <li>Engage in discussions with fellow programmers and gain insights from experienced professionals.</li>
          <li>Access a vast repository of questions, answers, and tutorials contributed by the community.</li>
          <li>Stay updated with the latest trends and advancements in the programming world.</li>
          <li>Enhance your problem-solving skills and broaden your technical knowledge.</li>
          <li>A platform where users can share their achievements and doubts using images, videos, and text format.</li>
          <li>An AI ChatBot powered by ChatGPT that provides answers to all programming-related queries.</li>
        </ul>
      </section>

      <section className="testimonials-section">
        <h3>User Testimonials</h3>
        <div className="testimonial">
          <blockquote>
            "TECH MARVEL has been an invaluable resource for me. The community is incredibly supportive, and I've learned
            so much from the discussions and answers provided. Highly recommended!"
          </blockquote>
          <cite>- John Doe, Software Engineer</cite>
        </div>
        <div className="testimonial">
          <blockquote>
            "I love how TECH MARVEL brings together programmers from different backgrounds. It's a great platform for
            sharing knowledge, solving coding challenges, and connecting with like-minded individuals."
          </blockquote>
          <cite>- Jane Smith, Web Developer</cite>
        </div>
      </section>

      <section className="community-section">
        <h3>Join Our Community</h3>
        <p>
          TECH MARVEL is a place to engage, contribute, and learn. Here's how you can get involved:
        </p>
        <ul>
          <li>Create an account and become a member of our programming community.</li>
          <li>Ask questions and seek help from experienced programmers.</li>
          <li>Share your knowledge by answering questions and providing insights.</li>
          <li>Participate in discussions, debates, and collaborative coding projects.</li>
          <li>Stay active and help create a vibrant and inclusive community.</li>
          <li>Share your achievements, doubts, and queries using images, videos, and text format.</li>
          <li>Interact with the AI ChatBot to get instant answers to your programming-related questions.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>Privacy and Security</h3>
        <p>
          At TECH MARVEL, we prioritize the privacy and security of our users. We take appropriate measures to protect
          your personal information and ensure a safe environment for interactions within the community. Please review
          our privacy policy for more details.
        </p>
      </section>

      <section className="future-plans-section">
        <h3>Future Plans</h3>
        <p>
          We have ambitious plans for the future of TECH MARVEL, including:
        </p>
        <ul>
          <li>Introducing advanced search and filtering options for an enhanced user experience.</li>
          <li>Expanding the range of programming topics and categories covered on the platform.</li>
          <li>Launching a mobile app for seamless access to the community on-the-go.</li>
          <li>Organizing programming events, workshops, and hackathons to foster collaboration.</li>
        </ul>
      </section>

      <section className="founder-section">
        <h3>Meet the Founder</h3>
        <div className="founder-info">
          <img src={founder} alt="Founder Avatar" className="founder-avatar" />
          <div className="founder-details">
            <h4>Hari Prasad</h4>
            <p>Founder and CEO</p>
            <p>
              Hari Prasad is a passionate programmer and a student at Chennai Institute of Technology, currently pursuing
              their studies at the 3rd year. With a strong belief in the power of community-driven learning, Hari Prasad
              founded TECH MARVEL to provide a platform where programmers can connect, share knowledge, and support each
              other in their coding journey.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>
          If you have any questions, feedback, or inquiries, we'd love to hear from you. Feel free to reach out to us
          through the contact information below:
        </p>
        <ul>
          <li>Email: techmarvel-hp@outlook.com</li>
          <li>Phone: +91 7550-160-349</li>
          {/* <li>Address: 123 Main Street, City, Country</li> */}
        </ul>
        <p>
          You can also provide your <Link to="/feedback">feedback</Link> here.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} TECH MARVEL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
