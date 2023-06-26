export const setCurrentUser = (data) => {
    return{
        type: 'FETCH_CURRENT_USER',
        payload: data
    }
}

export const setVerified = (data) => {
    return{
        type: 'FETCH_VERIFY_STATUS',
        payload: data
    }
}