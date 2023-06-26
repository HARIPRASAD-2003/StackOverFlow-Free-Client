import { combineReducers } from "redux";
import authReducer from "./Auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import postsReducer from "./post";
import VerifyReducer from "./verify";
import currentVerificationReducer from "./currentVerification";

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, usersReducer, postsReducer, VerifyReducer, currentVerificationReducer
})