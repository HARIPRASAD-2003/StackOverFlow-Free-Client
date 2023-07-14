import * as api from '../api'
import { setVerified } from './currentUser';

export const sendOTPVerification = ({id, email}, navigate) => async (dispatch) => {
    try {
        console.log('Start')
        const { data } = await api.sendOTPVerification(id, email);
        console.log("SEND_OTP", data);
        if(data.status === "FAILED") {
            alert("Error!! Due to High Data Traffic! Please do Confirm Email again")
            navigate("/Verify-email")
        }else{
        // dispatch({type: "SEND_OTP", payload: data});
        navigate('/Verify-OTP')}

    } catch (error) {
        console.log("SEND_OTP_ERR", error);
        console.log("error", error);
    }

}

export const resendOTPVerification = ({id, email}, navigate) => async (dispatch) => {
    try {
        console.log('Start-resend')
        const { data } = await api.resendOTPVerification(id, email);
        console.log("RESEND_OTP", data);
        if(data.status === "FAILED") {
            alert("Error!! Due to High Data Traffic! Please do Confirm Email again")
            navigate("/Verify-email")
        }
        navigate('/Verify-OTP')

    } catch (error) {
        console.log("RESEND_OTP_ERR", error);
        console.log("error", error);
    }

}

export const verifyOTP = ({id, otp}, navigate) => async (dispatch) => {
    try {
        console.log('Start-verify')
        const { data } = await api.verifyOTP(id, otp);
        console.log("VERIFY_OTP", data);
        // dispatch({type: "SEND_OTP", payload: data});
        if (data.status === 'FAILED') {
            alert(data.message)
        }else{
        dispatch({type: "VERIFY_OTP", data});
        dispatch(setVerified(JSON.parse(localStorage.getItem("Verified"))))
        console.log(setVerified(JSON.parse(localStorage.getItem("Verified"))))
        navigate('/ChatBot')}

    } catch (error) {
        console.log("Verify_OTP_ERR", error);
        console.log("error", error);
    }
}

export const sendResetMail = ({id, email}, navigate) => async (dispatch) => {
    try{
        console.log("Mail started")
        const { data } = await api.sendResetMail(id, email);
        console.log("mail:", data);
        if(data.status === "FAILED") {
            alert("Error!! Due to High Data Traffic! Please do Confirm Email again")
            navigate("/reset-verify")
        }else{
            navigate("/mail-sent")
        }
    } catch(error) {
        console.log(error);
    }
}

export const resetPassword = ({id, newPassword}, navigate) => async (dispatch) => {
    try {
        const { data } = await api.resetPassword(id, newPassword);
        if(data.status === "FAILED") {
            alert("Error!! Due to High Data Traffic! Please do retry again")
            // navigate("/reset-verify")
        }else{
            navigate("/")
        }
    } catch(error) {
        console.log(error)
    }
}