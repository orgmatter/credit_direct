export const employmentStatusTypes = {
    PROFESSIONAL_GOVERNMENT: 'Professional',
    PROFESSIONAL_PRIVATE: 'Private',
    NYSC: 'NYSC'
}

export const setEmploymentStatusType = (value) => {
    return {
        type: 'NEW_LOAN_REQUEST__SET_EMPLOYMENT_STATUS_TYPE',
        payload: value
    }
}

