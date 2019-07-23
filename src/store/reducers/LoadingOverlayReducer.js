let initialState = false;


const LoadingOverlayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_OVERLAY__SET_SHOWING':
            return action.payload;

        default:
            return state;

    }
}

export default LoadingOverlayReducer;