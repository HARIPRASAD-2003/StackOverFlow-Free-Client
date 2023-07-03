import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css'; // Import CSS file for styling

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://stack-overflow-free-server-hp.onrender.com/verification/send-feedback', {
        name,
        email,
        subject,
        message,
      });
      console.log(response)

      setSuccessMessage('Thank you for your feedback!');
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Oops! Something went wrong.');
      setSuccessMessage('');
    } finally {
      setName('');
      setEmail('');
      setMessage("");
      setSubject("");
    }
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default FeedbackForm;
