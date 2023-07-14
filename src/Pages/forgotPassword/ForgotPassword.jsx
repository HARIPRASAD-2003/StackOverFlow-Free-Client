import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../actions/Verification';



const ForgotPassword = () => {
  const { id } = useParams();
  const [newPass, setNewPass] = useState();
  const [conPass, setConPass] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(newPass === conPass) {
      dispatch(resetPassword({id: id, newPassword: newPass}, navigate))
    } else {
      alert("Password does not match");
    }
  }

  return (
    <div className="container">
      <h2 className="title">Reset Password</h2>
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="new-password">New Password:</label>
          <input type="password" id="new-password" name="new-password" placeholder="Enter your new password" onChange={(e) => {setNewPass(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your new password" onChange={(e) => {setConPass(e.target.value)}}/>
        </div>
        <button className="reset-password-button" type="submit">Reset Password</button>
      </form>
    </div>
  )
}

export default ForgotPassword
