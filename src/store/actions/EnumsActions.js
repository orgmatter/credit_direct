import { GENDER_SUCCESS, GENDER_ERROR, TITLE_SUCCESS, TITLE_ERROR, SECRET_QUESTIONS_SUCCESS, SECRET_QUESTIONS_ERROR, STATE_SUCCESS, STATE_ERROR, INDUSTRY_TYPES_SUCCESS, INDUSTRY_TYPES_ERROR } from '../actions/types';
import { enums as ENUMS } from '../../services';

export const getGender = () => dispatch => {
    const response = ENUMS.gender();
    response.then(res => {
        console.log('gender: '+res);
        if(res.ok){
            console.log(res.ok);
            response.then(res => res.json())
            .then(gender => {
                dispatch({
                    type: GENDER_SUCCESS,
                    payload: gender,
                })
            })
        }else{
            return {
                type: GENDER_ERROR,
                payload: res.ok
            }
        }
    })
}

export const getTitle = () => dispatch => {
    const response = ENUMS.title();
    response.then(res => {
        console.log('title: '+res);
        if(res.ok){
            console.log(res.ok);
            response.then(res => res.json())
            .then(title => {
                dispatch({
                    type: TITLE_SUCCESS,
                    payload: title,
                })
            })
        }else{
            return {
                type: TITLE_ERROR,
                payload: res.ok
            }
        }
    })
}

export const getSecretQuestions = () => dispatch => {
    const response = ENUMS.secretQuestions();
    response.then(res => {
        console.log('secretQuestions: '+res);
        if(res.ok){
            console.log(res.ok);
            response.then(res => res.json())
            .then(secretQuestions => {
                dispatch({
                    type: SECRET_QUESTIONS_SUCCESS,
                    payload: secretQuestions,
                })
            })
        }else{
            return {
                type: SECRET_QUESTIONS_ERROR,
                payload: res.ok
            }
        }
    })
}

export const getState = () => dispatch => {
    const response = ENUMS.state();
    response.then(res => {
        console.log('state: '+res);
        if(res.ok){
            console.log(res.ok);
            response.then(res => res.json())
            .then(state => {
                dispatch({
                    type: STATE_SUCCESS,
                    payload: state,
                })
            })
        }else{
            return {
                type: STATE_ERROR,
                payload: res.ok
            }
        }
    })
}

export const getIndustryTypes = () => dispatch => {
    const response = ENUMS.industryTypes();
    response.then(res => {
        console.log('state: '+res);
        if(res.ok){
            console.log(res.ok);
            response.then(res => res.json())
            .then(state => {
                dispatch({
                    type: INDUSTRY_TYPES_SUCCESS,
                    payload: state,
                })
            })
        }else{
            return {
                type: INDUSTRY_TYPES_ERROR,
                payload: res.ok
            }
        }
    })
}