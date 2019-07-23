import { PERSONAL_DETAILS_SUCCESS, PERSONAL_DETAILS_ERROR } from '../actions/types';
import { personalDetailsState as initialState } from '../state';

export default function (state = initialState, action) {
    switch(action.type) {
        case PERSONAL_DETAILS_SUCCESS:
        return {
            ...state,
            personalDetailsResponse: action.payload,
            status: 'success',
        }
        case PERSONAL_DETAILS_ERROR:
        return {
            ...state,
            personalDetailsResponse: action.payload,
            status: 'error',
        }
        default:
        return state
    }
}