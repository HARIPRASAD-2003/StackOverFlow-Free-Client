import React, {useEffect, useState} from 'react';
import './Verification.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendOTPVerification } from '../../actions/Verification';

const EmailConfirmationPage = () => {

  const [email, setEmail] = useState("");
    var currentUser = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email_end = currentUser?.result?.email[0] + currentUser?.result?.email.split('@')[0].replace(/./g, '*') + '@' + currentUser?.result?.email.split('@')[1]
  
  
  
    const handleConfirmEmail = (e) => {
    // Handle email confirmation logic
    // Redirect to OTP verification page
    if(currentUser?.result?.email === email){
      e.preventDefault()
      dispatch(sendOTPVerification({id: currentUser?.result?._id, email: currentUser?.result?.email}, navigate))
      console.log('SENT OTP')
    }else{
      e.preventDefault()
      alert("The entered Email-id Does not match with the Existing User. PLease Retry")
      setEmail('')
      navigate("/Verify-email")
    }
  };

  useEffect(() => {
    setEmail('');
  },[setEmail])

  return (
    <div className="container">
      <h2 className="title">Email Confirmation</h2>
      <h3 className="description">
        To access the Stack-Overflow ChatBot, we prioritize the security and privacy of our users. Therefore, we require a verification process to ensure the authenticity of user accounts. Before proceeding, please confirm your email address by entering the OTP (One-Time Password) sent to your registered email. This verification step helps us maintain a secure and reliable platform for all our users. Thank you for your cooperation.
      </h3>
      <form className="email-form" onSubmit={handleConfirmEmail}>
        <label htmlFor="email" className="label">
          Please confirm your email: <span className="email-domain">{email_end}</span>
        
        <input
          type="email"
          id="email"
          className="email-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <input type='submit' className="confirm-button" value='Confirm Email'/>
          {/* Confirm Email
        </input> */}
      </form>
    </div>
  );
};

export default EmailConfirmationPage;
