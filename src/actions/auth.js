import * as api from '../api'
import { setCurrentUser } from './currentUser';

export const signup = (authData, navigate) => async (dispatch) => {
    try{
        const Data  = await api.signup(authData);
        // console.log(Data.data)
        const data = Data.data
        // console.log("signup",data)
        dispatch({type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        // console.log(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        navigate('/')
    }catch(error){
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try{
        // console.log('hippo')
        const { data } = await api.login(authData);
        // console.log("login",data)
        dispatch({type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        navigate('/')
    }catch(error){
        console.log(error)
        alert(error.response.data.message)
    }
}