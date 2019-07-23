import { FETCH_ORGANIZATIONS_SUCCESS, FETCH_ORGANIZATIONS_ERROR } from '../actions/types';

let initialState = {
    all: [],
    status: false,
}


const AllOrganizationsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ORGANIZATIONS_SUCCESS:
            return {
                ...state,
                all: action.payload,
                status: true
            }
        case FETCH_ORGANIZATIONS_ERROR:
            return {
                ...state,
                all: action.payload,
                status: false
            }

        default:
            return state;
    }
}

export default AllOrganizationsReducer;