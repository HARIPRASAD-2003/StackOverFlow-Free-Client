import axios from 'axios'

const API = axios.create({ baseURL: "https://stack-overflow-free-server-hp.onrender.com/" })
// const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
    if(localStorage.getItem("Profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req;
})

export const login = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, {value, userId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers })

export const fetchAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
export const addFriend = (id, updateData) => API.patch(`/user/addFriend/${id}`, updateData);

export const newPost = (newPostData) => API.post("/community/new-post", newPostData);
export const getAllPosts = () => API.get("/community/get");
export const deletePost = (id) => API.delete(`/community/delete/${id}`);
export const LikePost = (id, userId) => API.patch(`/community/like/${id}`, {userId})

export const postComment = (id, noOfComments, commentBody, userCommented, userId ) => API.patch(`/comment/post/${id}`, {noOfComments, commentBody, userCommented, userId})
export const deleteComment = (id, commentId, noOfComments) => API.patch(`/comment/delete/${id}`, {commentId, noOfComments})

export const sendOTPVerification = (id, email) => API.post("/verification/sendOTPVerification", {id, email})
export const resendOTPVerification = (id, email) => API.post("/verification/resendOTPVerification", {id, email})
export const verifyOTP = (id, otp) => API.patch("/verification/verifyOTP", {id, otp})

// export const getResponse = (query) => API.post("/ChatBot/post", {query})
