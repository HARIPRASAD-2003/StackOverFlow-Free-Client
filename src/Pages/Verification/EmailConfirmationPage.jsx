import React, { useEffect, useState } from 'react';
import './Verification.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendOTPVerification } from '../../actions/Verification';

const EmailConfirmationPage = () => {
  const [email, setEmail] = useState('');
  const currentUser = useSelector((state) => state.currentUserReducer.result);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email_end =
    currentUser?.email[0] +
    currentUser?.email.split('@')[0].replace(/./g, '*') +
    '@' +
    currentUser?.email.split('@')[1];

  const handleConfirmEmail = (e) => {
    e.preventDefault();
    if (currentUser?.email === email) {
      dispatch(sendOTPVerification({ id: currentUser?._id, email: currentUser?.email }, navigate));
    } else {
      alert('The entered Email-id does not match with the existing user. Please retry.');
      setEmail('');
      navigate('/Verify-email');
    }
  };

  useEffect(() => {
    setEmail('');
  }, []);

  return (
    <div className="container">
      <h2 className="title">Email Confirmation</h2>
      <h3 className="description">
        To access the TECH MARVEL ChatBot, we prioritize the security and privacy of our users. Therefore, we require
        a verification process to ensure the authenticity of user accounts. Before proceeding, please confirm your email
        address by entering the OTP (One-Time Password) sent to your registered email. This verification step helps us
        maintain a secure and reliable platform for all our users. Thank you for your cooperation.
      </h3>
      <form className="email-form" onSubmit={handleConfirmEmail}>
        <label htmlFor="email" className="label">
          Please confirm your email: <span className="email-domain">{email_end}</span>
        </label>
        <input
          type="email"
          id="email"
          className="email-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" className="confirm-button" value="Confirm Email" />
      </form>
      <p className="spam-message">
        If you do not receive the OTP email in your inbox, please check your spam folder. The email will be sent from
        techmarvel-hp@outlook.com.
      </p>
    </div>
  );
};

export default EmailConfirmationPage;
