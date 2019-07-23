import headerParams from './headerParams';
import { endpoints as ENDPOINTS } from './endpoints';

export const getBvnDetails = async (data) => {
    var dataStatus = true;
    var isQuery = false;
    var queryParams = '';
    var bvn = data.bvn;
    var uri = ENDPOINTS.customer.bvnDetails.url;
    var methodType = ENDPOINTS.customer.bvnDetails.method;
    var auth = headerParams(bvn, methodType, uri, queryParams, dataStatus, isQuery);
    const { unixTimestamp, nonce, appId, genHashed } = auth;
    const response = await fetch(uri+bvn, {
       method: methodType,
       headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
           "TimeStamp": unixTimestamp,
           "Nonce": nonce,
           "Authentication": appId+genHashed
       }
    })
    console.log(response);
    const dataset = await response.json();
    return dataset;
}

export const postProfessionalPersonalInfo = async (data) => {
    var dataStatus = true;
    var isQuery = false;
    var queryParams = '';
    //console.log(JSON.stringify(data));
    var uri = ENDPOINTS.loanApplication.professional.personalInfo.url;
    var methodType = ENDPOINTS.loanApplication.professional.personalInfo.method;
    var auth = headerParams(data, methodType, uri, queryParams, dataStatus, isQuery);
    const { unixTimestamp, nonce, appId, genHashed, concatParams } = auth;
    console.log(unixTimestamp);
    console.log(nonce);
    console.log(appId);
    console.log(genHashed);
    console.log(concatParams);
    const response = await fetch(uri, {
       method: methodType,
       body: JSON.stringify(data),
       headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
           "TimeStamp": unixTimestamp,
           "Nonce": nonce,
           "Authentication": appId+genHashed
       }
    })
    //const dataset = await response.json();
    console.log(response);
    return response;
}

export const getProductsByType = async (data) => {
    console.log(data);
    var dataStatus = true;
    var isQuery = false;
    var queryParams = '';
    var employmentType = data;
    var uri = ENDPOINTS.product.productType.url;
    var methodType = ENDPOINTS.product.productType.method;
    var auth = headerParams(data, methodType, uri, queryParams, dataStatus, isQuery);
    const { unixTimestamp, nonce, appId, genHashed } = auth;
    const response = await fetch(uri+employmentType, {
       method: methodType,
       headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
           "TimeStamp": unixTimestamp,
           "Nonce": nonce,
           "Authentication": appId+genHashed
       }
    })
    //const dataset = await response.json();
    console.log(response);
    return response;
}


export const getAllOrganizations = async () => {
    var dataStatus = false;
    var isQuery = false;
    var queryParams = '';
    var empty = '';
    var uri = ENDPOINTS.organization.allOrganization.url;
    console.log(uri);
    var methodType = ENDPOINTS.organization.allOrganization.method;
    var auth = headerParams(empty, methodType, uri, queryParams, dataStatus, isQuery);
    const { unixTimestamp, nonce, appId, genHashed } = auth;
    console.log(unixTimestamp);
    console.log(nonce);
    console.log(genHashed);
    const response = await fetch(uri, {
       method: methodType,
       headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
           "TimeStamp": unixTimestamp,
           "Nonce": nonce,
           "Authentication": appId+genHashed
       }
    })
    //const dataset = await response.json();
    // console.log(response);
    //return response;
    console.log(uri); 
    const dataset = await response.json();
    console.log(dataset);           
}

export const getOrganizationsByName = async (data) => {
    var dataStatus = true;
    var isQuery = true;
    var queryParams = 'name='+data;
    var param = data;
    var uri = ENDPOINTS.organization.organizationByName.url;
    // console.log(uri);
    var methodType = ENDPOINTS.organization.organizationByName.method;
    var auth = headerParams(data, methodType, uri, queryParams, dataStatus, isQuery);
    const { unixTimestamp, nonce, appId, genHashed, concatParams } = auth;
    // console.log(unixTimestamp);
    // console.log(nonce);
    // console.log(genHashed);
    // console.log(concatParams);
    const response = await fetch(uri+param, {
       method: methodType,
       headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
           "TimeStamp": unixTimestamp,
           "Nonce": nonce,
           "Authentication": appId+genHashed
       }
    })
    //const dataset = await response.json();
    // console.log(response);
    //return response;
    //console.log(uri); 
    //const dataset = await response.json();
    //console.log(dataset);
    console.log(response);     
    return response;     
}


export const enums = {
    gender: async () => {
            var dataStatus = false;
            var isQuery = false;
            var queryParams = '';
            var empty = '';
            var uri = ENDPOINTS.enums.gender.url;
            var methodType = ENDPOINTS.enums.gender.method;
            var auth = headerParams(empty, methodType, uri, queryParams, dataStatus, isQuery);
            const { unixTimestamp, nonce, appId, genHashed } = auth;
            const response = await fetch(uri, {
                method: methodType,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "TimeStamp": unixTimestamp,
                    "Nonce": nonce,
                    "Authentication": appId+genHashed
                }
            })
            //const dataset = await response.json();
            //console.log(response);
            return response;
        },
    title: async () => {
            var dataStatus = false;
            var isQuery = false;
            var queryParams = '';
            var empty = '';
            var uri = ENDPOINTS.enums.title.url;
            var methodType = ENDPOINTS.enums.title.method;
            var auth = headerParams(empty, methodType, uri, queryParams, dataStatus, isQuery);
            const { unixTimestamp, nonce, appId, genHashed } = auth;
            const response = await fetch(uri, {
                method: methodType,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "TimeStamp": unixTimestamp,
                    "Nonce": nonce,
                    "Authentication": appId+genHashed
                }
            })
            //const dataset = await response.json();
            //console.log(response);
            return response;
        },
    secretQuestions: async () => {
                    var dataStatus = false;
                    var isQuery = false;
                    var queryParams = '';
                    var empty = '';
                    var uri = ENDPOINTS.enums.secretQuestions.url;
                    var methodType = ENDPOINTS.enums.secretQuestions.method;
                    var auth = headerParams(empty, methodType, uri, queryParams, dataStatus, isQuery);
                    const { unixTimestamp, nonce, appId, genHashed } = auth;
                    const response = await fetch(uri, {
                        method: methodType,
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "TimeStamp": unixTimestamp,
                            "Nonce": nonce,
                            "Authentication": appId+genHashed
                        }
                    })
                    //const dataset = await response.json();
                    //console.log(response);
                    return response;
                },
    state: async () => {
            var dataStatus = false;
            var isQuery = false;
            var queryParams = '';
            var empty = '';
            var uri = ENDPOINTS.enums.state.url;
            var methodType = ENDPOINTS.enums.state.method;
            var auth = headerParams(empty, methodType, uri, queryParams, dataStatus, isQuery);
            const { unixTimestamp, nonce, appId, genHashed } = auth;
            const response = await fetch(uri, {
                method: methodType,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "TimeStamp": unixTimestamp,
                    "Nonce": nonce,
                    "Authentication": appId+genHashed
                }
            })
            //const dataset = await response.json();
            //console.log(response);
            return response;
        },
        industryTypes: async () => {
            var dataStatus = false;
            var isQuery = false;
            var queryParams = '';
            var empty = '';
            var uri = ENDPOINTS.enums.industryTypes.url;
            var methodType = ENDPOINTS.enums.industryTypes.method;
            var auth = headerParams(empty, methodType, uri, queryParams, dataStatus, isQuery);
            const { unixTimestamp, nonce, appId, genHashed } = auth;
            const response = await fetch(uri, {
                method: methodType,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "TimeStamp": unixTimestamp,
                    "Nonce": nonce,
                    "Authentication": appId+genHashed
                }
            })
            //const dataset = await response.json();
            //console.log(response);
            return response;
        },
}