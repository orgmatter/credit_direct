export const setLoggedInState = (value) => {
    return {
        type: 'AUTH__SET_LOGGED_IN',
        payload: value
    }
}