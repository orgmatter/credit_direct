import { FETCH_ORGANIZATIONS_BY_NAME_SUCCESS, FETCH_ORGANIZATIONS_BY_NAME_ERROR } from './types';
import { getOrganizationsByName } from '../../services';

export const organizationsByName = (text) => dispatch => {
    const response = getOrganizationsByName(text);
    response.then(data => {
        if (data.ok === true ) {
            //data.json();
            response.then(data => data.json())
            .then(res => {
                dispatch({
                    type: FETCH_ORGANIZATIONS_BY_NAME_SUCCESS,
                    payload: res,
                    status: data.ok,
                })
            })
            
        }else{
            dispatch({
                type: FETCH_ORGANIZATIONS_BY_NAME_ERROR,
                status: data.ok,
            })
        }
    })
}