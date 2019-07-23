import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/types';

let initialState = {
    byType: [],
    status: false,
}


const ProductsByTypeReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                byType: action.payload,
                status: true
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                byType: action.payload,
                status: false
            }

        default:
            return state;
    }
}

export default ProductsByTypeReducer;