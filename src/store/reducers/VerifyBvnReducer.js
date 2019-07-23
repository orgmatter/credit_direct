import { VERIFY_BVN_SUCCESS, VERIFY_BVN_ERROR } from '../actions/types';
import { verifyBvnState as initialState } from '../state';

const VerifyBvnReducer = (state = initialState, action) => {
    switch(action.type) {
        case VERIFY_BVN_SUCCESS:
            return {
                ...state,
                verifyBvnResponse: action.payload,
                status: 'success',
                isValid: true,
                type: action.type
            }
        case VERIFY_BVN_ERROR:
            return {
                ...state,
                verifyBvnResponse: action.payload,
                status: 'error',
                isValid: false,
                type: action.type
            }
        default:
            return {
                ...state,
                verifyBvnResponse: action.payload,
                status: 'success',
                isValid: true,
                type: action.type
            }
    }
}

export default VerifyBvnReducer;
