export const endpoints = {
    customer : {
        bvnDetails: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Customer/GetBvnDetails/',
            method: 'GET'
        }
    },
    loanApplication: {
        professional: {
            personalInfo: {
                url: 'http://mobile.nimblex.com.ng/api/v1/LoanApplication/Professional/AddPersonalInfo',
                method: 'POST'
            }
        }
    },
    bank: {
        allBanks: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Bank/GetAll',
            method: 'GET'
        }
    },
    product: {
        productType: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Product/GetProductsByType/',
            method: 'GET'
        }
    },
    organization: {
        allOrganization: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Organization/GetAll',
            method: 'GET'
        },
        organizationByName: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Organization/GetOrganizationsByName?name=',
            method: 'GET'
        }
    },
    enums: {
        gender: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Enumeration/Gender',
            method: 'GET'
        },
        title: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Enumeration/Titles',
            method: 'GET'
        },
        secretQuestions: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Enumeration/SecretQuestions',
            method: 'GET'
        },
        state: {
            url: 'http://mobile.nimblex.com.ng/api/v1/State/GetAll',
            method: 'GET'
        },
        industryTypes: {
            url: 'http://mobile.nimblex.com.ng/api/v1/Enumeration/IndustryTypes',
            method: 'GET'
        }
    }
}