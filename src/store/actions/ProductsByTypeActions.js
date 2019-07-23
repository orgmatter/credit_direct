import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './types';
import { getProductsByType } from '../../services';

export const productsByType = value => dispatch => {
    const response = getProductsByType(value);
    //var products;
    var status;
    response.then(data => {
        //products = data.json()
        //status = data.ok
        if (data && data.ok == true) {
            response.then(res => res.json())
            .then(products => {
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    payload: products
                });
            })
        }else if (!data.ok) {
            return {
                type: FETCH_PRODUCTS_ERROR,
                payload: data.ok
            }
        }
        //console.log(data.ok);
    })
}