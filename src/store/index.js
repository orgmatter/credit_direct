import { combineReducers } from 'redux';

import AuthReducer from './reducers/AuthReducer.js';
import LoadingOverlayReducer from './reducers/LoadingOverlayReducer.js';
import NotificationBoxReducer from './reducers/NotificationBoxReducer.js';
import CurrentLoanReducer from './reducers/CurrentLoanReducer.js';
import NewLoanRequestReducer from './reducers/NewLoanRequestReducer.js';
import VerifyBvnReducer from './reducers/VerifyBvnReducer';
import PersonalDetailsReducer from './reducers/PersonalDetailsReducer';
import ProductsByTypeReducer from './reducers/ProductsByTypeReducer';
import AllOrganizationsReducer from './reducers/AllOrganizationsReducer';
import OrganizationsByNameReducer from './reducers/OrganizationsByNameReducer';
import EnumsReducer from './reducers/EnumsReducer';

const RootReducer = combineReducers({
    verifyBvn: VerifyBvnReducer,
    personalDetails: PersonalDetailsReducer,
    auth: AuthReducer,
    loadingOverlay: LoadingOverlayReducer,
    notificationBox: NotificationBoxReducer,
    currentLoan: CurrentLoanReducer,
    newLoanRequest: NewLoanRequestReducer,
    products: ProductsByTypeReducer,
    organizations: AllOrganizationsReducer,
    organizationsByName: OrganizationsByNameReducer,
    enums: EnumsReducer,
});

export default RootReducer;