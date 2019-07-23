import { GENDER_SUCCESS, GENDER_ERROR, TITLE_SUCCESS, TITLE_ERROR, SECRET_QUESTIONS_SUCCESS, SECRET_QUESTIONS_ERROR, STATE_SUCCESS, STATE_ERROR, INDUSTRY_TYPES_SUCCESS, INDUSTRY_TYPES_ERROR  } from '../actions/types';
import { enumsState as initialState } from '../state';

const enumsReducer = (state = initialState, action) => {
    let enumState = state;
    let enumSecretQuestions = state;
    let enumTitle = state;
    let enumGender = state;
    let enumIndustryTypes = state;
    switch(action.type) {
        case GENDER_SUCCESS:
        enumGender.enums.gender.response = action.payload;
        enumGender.enums.gender.status = 'success';
        return {
            ...state,
            enumGender,
        }
        case GENDER_ERROR:
        enumGender.enums.gender.response = {label: 'No result', value: 'No result'};
        enumGender.enums.gender.status = 'error';
        return {
            ...state,
            enumGender,
        }
        case TITLE_SUCCESS:
        enumTitle.enums.title.response = action.payload;
        enumTitle.enums.title.status = 'success';
        return {
            ...state,
            enumTitle,
        }
        case TITLE_ERROR:
        enumTitle.enums.title.response = {label: 'No result', value: 'No result'};
        enumTitle.enums.title.status = 'error';
        return {
            ...state,
            enumTitle,
        }
        case SECRET_QUESTIONS_SUCCESS:
        enumSecretQuestions.enums.secretQuestions.response = action.payload;
        enumSecretQuestions.enums.secretQuestions.status = 'success';
        return {
            ...state,
            enumSecretQuestions,
        }
        case SECRET_QUESTIONS_ERROR:
        enumSecretQuestions.enums.secretQuestions.response = {label: 'No result', value: 'No result'};
        enumSecretQuestions.enums.secretQuestions.status = 'error';
        return {
            ...state,
            enumSecretQuestions,
        }
        case STATE_SUCCESS:
        enumState.enums.state.response = action.payload;
        enumState.enums.state.status = 'success';
        return {
            ...state,
            enumState,
        }
        case STATE_ERROR:
        enumState.enums.State.response = {label: 'No result', value: 'No result'};
        enumState.enums.State.status = 'error';
        return {
            ...state,
            enumState,
        }
        case INDUSTRY_TYPES_SUCCESS:
        enumIndustryTypes.enums.industryTypes.response = action.payload;
        enumIndustryTypes.enums.industryTypes.status = 'success';
        return {
            ...state,
            enumIndustryTypes,
        }
        case INDUSTRY_TYPES_ERROR:
        enumIndustryTypes.enums.industryTypes.response = {label: 'No result', value: 'No result'};
        enumIndustryTypes.enums.industryTypes.status = 'error';
        return {
            ...state,
            enumIndustryTypes,
        }
        default:
        return state
    }
}
export default enumsReducer