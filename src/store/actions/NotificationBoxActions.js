export const showNotificationBox = (value) => {
    return {
        type: 'NOTIFICATION_BOX__SHOW',
        payload: value
    }
}

export const hideNotificationBox = () => {
    return {
        type: 'NOTIFICATION_BOX__HIDE'
    }
}