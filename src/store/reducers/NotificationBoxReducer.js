let initialState = {
    show: false,
    notificationType: '',
    message: ''
};


const LoadingOverlayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTIFICATION_BOX__SHOW':
            return {
                ...action.payload,
                show: true
            }

        case 'NOTIFICATION_BOX__HIDE':
            return {
                ...state,
                show: false
            }

        default:
            return state;

    }
}

export default LoadingOverlayReducer;