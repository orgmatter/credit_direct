import { FETCH_ORGANIZATIONS_SUCCESS, FETCH_ORGANIZATIONS_ERROR } from './types';
import { getAllOrganizations } from '../../services';

export const allOrganizations = () => dispatch => {
    getAllOrganizations();
    
}