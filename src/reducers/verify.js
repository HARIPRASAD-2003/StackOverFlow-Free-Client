

const VerifyReducer = (state = {data: null}, action) => {
    switch (action.type) {
        case "VERIFY_OTP":
            localStorage.setItem("Verified", JSON.stringify({...action?.data}));
            return { ...state, data: action.data};
        default:
            return state;
    }
};

export default VerifyReducer;