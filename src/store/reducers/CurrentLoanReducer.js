const currentLoanData = {
    amountPaid: '',
    amountRemaining: '',
    startDate: '',
    endDate: '',
    entries: [
        {
            id: 48732719843,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'debit'
        },
        {
            id: 787398127983,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'credit'
        },
        {
            id: 4234324231423,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'credit'
        },
        {
            id: 42312313131423,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'debit'
        }
    ]
};

let initialState = {
    loading: false,
    loadingError: false,
    data: null
};


const CurrentLoanReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CURRENT_LOAN__SET_DATA':
            return {
                ...state,
                loading: false,
                loadingError: false,
                data: action.payload
            }

        default:
            return state;

    }
}

export default CurrentLoanReducer;

