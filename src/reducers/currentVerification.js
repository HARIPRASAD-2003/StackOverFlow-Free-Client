const currentVerificationReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_VERIFY_STATUS':
            return action.payload;
        default:
            return state;
    }
}

export default currentVerificationReducer