import { PERSONAL_DETAILS_SUCCESS, PERSONAL_DETAILS_ERROR } from './types';
import { postProfessionalPersonalInfo } from '../../services';
export const sendPersonalInfo = (data) => dispatch => {
    const dob = `${data.dateOfBirth.year}-${data.dateOfBirth.month}-${data.dateOfBirth.day}T09:19:21.457Z`;

    const apiData = {
        addProfessionalPersonalInfo: {
            "Title": data.title.value,
            "LastName": data.lastName,
            "FirstName": data.firstName,
            "OtherNames": data.otherNames,
            "MaidenName": "Nil",
            "MobileNumber": data.mobileNumber,
            "AlternateNumber": data.alternateMobileNumber,
            "PersonalEmail": data.email,
            "Gender": data.gender.value,
            "DateOfBirth": dob,
            "BankVerificationNumber": data.userBvn.number,
            "OrganizationId": data.organization.value,
            "PermanentAddress": data.permanentResidence,
            "StateId": 3,
            //"StateName": "Adamawa",
            //"StateCode": "AD",
            //"ServiceYear": "2009",
            //"Batch": "B",
            //"Stream": 2,
            //"JobLocation": "Lagos",
            "KnowledgeAboutUs": "News",
            "Password": data.password,
            "ConfirmPassword": data.confirmPassword,
            "SecurityQuestion": data.secretQuestion.value,
            "SecurityAnswer": data.secretAnswer,
            "ProductId": data.product.value,
            "LoanAmount": data.loanAmount,
            "SalaryNetPay": data.salaryNetPay,
            "Tenor": data.duration,
            //"DseId": "NA",
            "LoanReason": data.loanReason,
            "LoanCategory": "NEW LOAN",
            "EmploymentId": "E002",
            "DisbursementMode": "NA",
        },
        addPreloanAccInfo: {
            CustomerId: '',
            LoanAccountId: '',
            ProductId: '',
            Tenor: '',
            DisbursementMode: '',
            LoanAmount: '',
            SalaryNetPay: '',
            DseId: '',
            ParentLoanAccountId: '',
            LoanReason: '',
            OrganizationId: '',
            LoanCategory: '',
            CRC: ''
        },
    }
    

    const response = postProfessionalPersonalInfo(apiData.addProfessionalPersonalInfo);
    //console.log('apiData: '+apiData.addPersonalInfo);
    response.then(res => {
        console.log('action: '+res);
        if(res.ok){
            response.then(res => res.json())
            .then(personalRes => dispatch({
                type: PERSONAL_DETAILS_SUCCESS,
                payload: personalRes
            }))
        }else{
            return {
                type: PERSONAL_DETAILS_ERROR,
                payload: personalRes
            }
        }
    })
}