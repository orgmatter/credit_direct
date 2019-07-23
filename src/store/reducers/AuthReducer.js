let initialState = {
    loggedIn: false,
    userData: {}
}


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH__SET_LOGGED_IN':
            return {
                ...state,
                loggedIn: action.payload
            }

        default:
            return state;

    }
}

export default AuthReducer;
