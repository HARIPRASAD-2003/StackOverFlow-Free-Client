import React from 'react'
import { useNavigate } from 'react-router-dom'

const MailSent = () => {
    const navigate = useNavigate();
    const handleResend = () => {
        navigate('/reset-verify')
    }
  return (
    <div className="container">
      <h2 className="title">Reset Password Email Sent</h2>
      <h4 className="description">
        We have sent an email to your registered address with instructions on how to reset your password. Please check your inbox and follow the steps provided to complete the password reset process.
      </h4>
      <p className="spam-message">
        If you do not receive the email in your inbox, please check your spam folder. The email will be sent from
        techmarvel-hp@outlook.com.
      </p>
      <button className="resend-button" onClick={handleResend}>
        Resend email
      </button>
    </div>
  )
}

export default MailSent
