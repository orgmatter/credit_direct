import { VERIFY_BVN_SUCCESS, VERIFY_BVN_ERROR } from './types';
import { getBvnDetails } from '../../services';

export const verifyBvn = (data) => {
    return getBvnDetails(data);
}

// export const isBvnVerified = (bool) => {
//     return bool;
// }