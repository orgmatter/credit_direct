import { VERIFY_BVN_SUCCESS, VERIFY_BVN_ERROR } from './types';
import { getBvnDetails, postPersonalInfo } from '../../services';

export const verifyBvn = (data) => despatch => {
    const response = getBvnDetails(data);
    response.then(res => {
        if (res.Status == true) {
            despatch({
                type: VERIFY_BVN_SUCCESS,
                payload: res,
            })
        } else if (res.Status == false) {
            despatch({
                type: VERIFY_BVN_ERROR,
                payload: res,
            })
        }
    })
}