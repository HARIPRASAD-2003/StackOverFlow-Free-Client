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

  const handleSubmit = (e) => {
    e.prevenDefault();
    if(newPass === conPass) {
      dispatch(resetPassword({id: id, newPassword: newPass}, navigate))
    } else {
      alert("Password does not match");
    }
  }

  return (
    <div className="container">
      <h2 className="title">Reset Password</h2>
      <form className="email-form" onSubmit={handleSubmit}>
        {/* <div className="form-group"> */}
          <label htmlFor="new-password" className="label">New Password:</label>
          <input type="password" id="new-password" name="new-password" value={newPass} placeholder="Enter your new password" onChange={(e) => {setNewPass(e.target.value)}}/>
        {/* </div> */}
        {/* <div className="form-group"> */}
          <label htmlFor="confirm-password" className="label">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" value={conPass} placeholder="Confirm your new password" onChange={(e) => {setConPass(e.target.value)}}/>
        {/* </div> */}
        <button className="confirm-button" type="submit">Reset Password</button>
      </form>
    </div>
  )
}

export default ForgotPassword
