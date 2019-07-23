let initialState = {
    employmentStatusType: null,
    
}


const NewLoanRequestReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'NEW_LOAN_REQUEST__SET_EMPLOYMENT_STATUS_TYPE':
            return {
                ...state,
                employmentStatusType: action.payload
            }

        default:
            return state;
    }
}

export default NewLoanRequestReducer;