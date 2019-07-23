import { FETCH_ORGANIZATIONS_BY_NAME_SUCCESS, FETCH_ORGANIZATIONS_BY_NAME_ERROR } from '../actions/types';

let initialState = {
    all: [],
    status: '...loading',
}


const OrganizationsByNameReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ORGANIZATIONS_BY_NAME_SUCCESS:
            return {
                ...state,
                all: action.payload,
                status: action.status
            }
        case FETCH_ORGANIZATIONS_BY_NAME_ERROR:
            return {
                ...state,
                all: action.payload,
                status: action.status
            }

        default:
            return state;
    }
}

export default OrganizationsByNameReducer;