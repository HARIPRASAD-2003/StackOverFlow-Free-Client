import React, { useEffect, useState } from 'react';
import './Verification.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendResetMail } from '../../actions/Verification';

const ResetEmailConfirmationPage = () => {
  const [email, setEmail] = useState('');
  // const currentUser = useSelector((state) => state.currentUserReducer.result);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector( state => state.usersReducer)
  // const email_end =
  //   currentUser?.email[0] +
  //   currentUser?.email.split('@')[0].replace(/./g, '*') +
  //   '@' +
  //   currentUser?.email.split('@')[1];

  const handleConfirmEmail = (e) => {
    e.preventDefault();
    if(users.filter((user) => user.email === email).length === 1) {
      const user = users.filter((user) => user.email === email)[0]
      dispatch(sendResetMail({ id: user._id, email: email }, navigate));
    } else {
      alert("The user does not exists!! \n Please enter the registered email-id.");
      setEmail('');
      navigate('/reset-verify')
    }
  };

  useEffect(() => {
    setEmail('');
  }, []);

  return (
    <div className="container">
      <h2 className="title">Email Confirmation</h2>
      <h3 className="description">
        To reset your password for your TECH MARVEL user account, we prioritize the security and privacy of our users. Therefore, we have implemented a password reset process to ensure the authenticity of user accounts. Please provide your registered email address below, and we will send you further instructions on how to reset your password. Thank you for your cooperation.
      </h3>
      <form className="email-form" onSubmit={handleConfirmEmail}>
        <label htmlFor="email" className="label">
          Please confirm your email:
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
        If you do not receive the reset email in your inbox, please check your spam folder. The email will be sent from
        techmarvel-hp@outlook.com
      </p>
    </div>
  );
};

export default ResetEmailConfirmationPage;
