import React, { useState } from 'react';
import { resendOTPVerification, verifyOTP } from '../../actions/Verification';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const OTPConfirmationPage = () => {
  const [otp, setOtp] = useState('');
  const currentUser = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOTP({ id: currentUser?.result._id, otp: otp }, navigate));
  };

  const handleResendOTP = () => {
    dispatch(resendOTPVerification({ id: currentUser?.result._id, email: currentUser?.result.email }, navigate));
  };

  return (
    <div className="container">
      <h2 className="title">OTP Verification</h2>
      <h4 className="description">
        To complete the email verification process, please enter the OTP (One-Time Password) sent to your registered email
        address. This additional step ensures the security of your account.
      </h4>
      <form className="otp-form" onSubmit={handleOtpSubmit}>
        <label htmlFor="otp" className="label">
          Enter OTP:
        </label>
        <input
          type="text"
          id="otp"
          className="otp-input"
          placeholder="Enter the OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button className="verify-button" type="submit">
          Verify OTP
        </button>
      </form>
      <button className="resend-button" onClick={handleResendOTP}>
        Resend OTP
      </button>
      <p className="spam-message">
        If you do not receive the OTP email in your inbox, please check your spam folder. The email will be sent from
        techmarvel-hp@outlook.com.
      </p>
    </div>
  );
};

export default OTPConfirmationPage;

