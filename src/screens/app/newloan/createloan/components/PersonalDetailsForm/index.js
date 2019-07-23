import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button as SearchButton, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../../../../../../components/Button/index.js';
import FlatButton from '../../../../../../components/FlatButton/index.js';
import LabelTextField from '../../../../../../components/LabelTextField/index.js';
import LabelDropdown from '../../../../../../components/LabelDropdown/index.js'
import LabelSlider from '../../../../../../components/LabelSlider/index.js';

import LabelFilePicker from '../../../../../../components/LabelFilePicker/index.js';

import LabelDatePicker from '../../../../../../components/LabelDatePicker/index.js';

import SharedStyles from '../../../../../../styles/SharedStyles.js';

import LabelPassportPicker from '../../../../../../components/LabelPassportPicker/index.js';

import { formatAmount, formatAmountMajor } from '../../../../../../utils/AmountFormatter.js';


import LoanCard from './components/LoanCard/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendPersonalInfo } from '../../../../../../store/actions/PersonalDetailsActions';
import { allOrganizations } from '../../../../../../store/actions/AllOrganizationsActions';
import { organizationsByName } from '../../../../../../store/actions/OrganizationsByNameActions';
import { getGender, getTitle, getSecretQuestions, getState } from '../../../../../../store/actions/EnumsActions';


const defaultOrganizationOptions = [
    { label: "Andela", value: "Andela" },
    { label: "Intelia", value: "Intelia" },
    { label: "Interswitch", value: "Interswitch" },
    { label: "TeamApt", value: "TeamApt" },
];

//const titleOptions = [];
    // { label: "Mr", value: "Mr" },
    // { label: "Mrs", value: "Mrs" },
    // { label: "Miss", value: "Miss" },
    // { label: "Master", value: "Master" },


//const residenceStateOptions = [];
    // { label: "Abia", value: "ABA" },
    // { label: "Anambra", value: "ANB" },
    // { label: "Benue", value: "BEN" },
    // { label: "Adamawa", value: "AD" },

const subOrganizationOptions = [
    { label: "Design", value: "Design" },
    { label: "Engineering", value: "Engineering" },
    { label: "Product", value: "Product" }
];

const productOptions = [];
const productOptionsKey = [];

//const genderOptions = [];
    // { label: "Female", value: "Female" },
    // { label: "Male", value: "Male" },
    // { label: "Prefer to keep shrouded in mystery", value: "Other" },

//const secretQuestionOptions = [];
    // { label: "First pet's name", value: "First pet's name" },
    // { label: "Best friend's name", value: "Best friend's name" },
    // { label: "Favorite movie", value: "Favorite movie" }


const salaryDayOptions = [];
for (let i = 1; i < 31; i++) {
    salaryDayOptions.push({
        label: i,
        value: i
    });
};


class PersonalForm extends Component {

    constructor() {
        super();
        this.state = {
            //dataSource:  '',
            formData: {
                organization: { label: "", value: "" },
                organizationSearch: "",
                organizationId: "",
                product: { label: "", value: "" },
                productId: "",
                title: { label: "", value: "" },
                salaryNetPay: "",
                loanAmount: "",
                loanReason: "",
                permanentResidence: "",
                residenceState: { label: "", value: "" },
                duration: 0,
                firstName: "",
                lastName: "",
                otherNames: "",
                gender: { label: "", value: "" },
                email: "",
                mobileNumber: "",
                alternateMobileNumber: "",
                dateOfBirth: null,
                password: "",
                confirmPassword: "",
                secretQuestion: { label: "", value: "" },
                secretAnswer: "",
                userBvn: {
                    details: "",
                    number: "",
                }

            },
            formErrors: {
                organization: '',
                subOrganization: '',
                product: '',
                title: '',
                salaryNetPay: '',
                loanAmount: '',
                loanReason: '',
                permanentResidence: '',
                residenceState: '',
                duration: '',
                firstName: '',
                lastName: '',
                otherNames: '',
                gender: '',
                email: '',
                mobileNumber: '',
                alternateMobileNumber: '',
                dateOfBirth: '',
                password: '',
                confirmPassword: '',
                secretQuestion: '',
                secretAnswer: ''
            },
            testData: {
                "Title": "Mr",
                "LastName": "Saiki",
                "FirstName": "Simpa",
                "OtherNames": "Kelvin",
                "MaidenName": "Korede",
                "MobileNumber": "08124545994",
                "AlternateNumber": "08124545995",
                "PersonalEmail": "simpasaiki01@gmail.com",
                "Gender": "Male",
                "DateOfBirth": "2019-05-09T09:19:21.457Z",
                "StartDate": "2019-05-09T09:19:21.457Z",
                "EndDate": "2019-05-09T09:19:21.457Z",
                "PermanentAddress": "30 Faramobi Ajike Street",
                "StateId": 3,
                "StateName": "Adamawa",
                "StateCode": "AD",
                "BankVerificationNumber": "1234567893",
                "ServiceYear": "2009",
                "Batch": "B",
                "Stream": 2,
                "EmploymentId": "E002",
                "JobLocation": "Lagos",
                "KnowledgeAboutUs": "News",
                "Organization": "Teamapt"
               }
            
        }

        
        this.organization_onChange = this.organization_onChange.bind(this);
        this.organization_validate = this.organization_validate.bind(this);

        //this.subOrganization_onChange = this.subOrganization_onChange.bind(this);
        //this.subOrganization_validate = this.subOrganization_validate.bind(this);

        this.product_onChange = this.product_onChange.bind(this);
        this.product_validate = this.product_validate.bind(this);

        this.loanAmount_onChange = this.loanAmount_onChange.bind(this);
        this.loanAmount_validate = this.loanAmount_validate.bind(this);

        this.duration_onChange = this.duration_onChange.bind(this);
        this.duration_validate = this.duration_validate.bind(this);

        this.firstName_onChange = this.firstName_onChange.bind(this);
        this.firstName_validate = this.firstName_validate.bind(this);

        this.lastName_onChange = this.lastName_onChange.bind(this);
        this.lastName_validate = this.lastName_validate.bind(this);

        this.otherNames_onChange = this.otherNames_onChange.bind(this);
        this.otherNames_validate = this.otherNames_validate.bind(this);

        this.gender_onChange = this.gender_onChange.bind(this);
        this.gender_validate = this.gender_validate.bind(this);

        this.email_onChange = this.email_onChange.bind(this);
        this.email_validate = this.email_validate.bind(this);

        this.mobileNumber_onChange = this.mobileNumber_onChange.bind(this);
        this.mobileNumber_validate = this.mobileNumber_validate.bind(this);

        this.alternateMobileNumber_onChange = this.alternateMobileNumber_onChange.bind(this);
        this.alternateMobileNumber_validate = this.alternateMobileNumber_validate.bind(this);

        this.dateOfBirth_onChange = this.dateOfBirth_onChange.bind(this);
        this.dateOfBirth_validate = this.dateOfBirth_validate.bind(this);

        this.password_onChange = this.password_onChange.bind(this);
        this.password_validate = this.password_validate.bind(this);

        this.confirmPassword_onChange = this.confirmPassword_onChange.bind(this);
        this.confirmPassword_validate = this.confirmPassword_validate.bind(this);

        this.secretQuestion_onChange = this.secretQuestion_onChange.bind(this);
        this.secretQuestion_validate = this.secretQuestion_validate.bind(this);

        this.secretAnswer_onChange = this.secretAnswer_onChange.bind(this);
        this.secretAnswer_validate = this.secretAnswer_validate.bind(this);

        this.handleTxtChange = this.handleTxtChange.bind(this);
        this.loanReasonChange = this.loanReasonChange.bind(this);
        this.loanReason_validate = this.loanReason_validate.bind(this);
        this.permanentResidenceChange = this.permanentResidenceChange.bind(this);
        this.permanentResidence_validate = this.permanentResidence_validate.bind(this);
        this.residenceState_onChange = this.residenceState_onChange.bind(this);
        this.residenceState_validate = this.residenceState_validate.bind(this);
        this.title_onChange = this.title_onChange.bind(this);
        this.title_validate = this.title_validate.bind(this);
        this.salaryNetPay_onChange = this.salaryNetPay_onChange.bind(this);
        this.salaryNetPay_validate = this.salaryNetPay_validate.bind(this);
        this.handleSearchPress = this.handleSearchPress.bind(this);
        //this.onClickList = this.onClickList.bind(this);


        this.submitHandler = this.submitHandler.bind(this);


        this.fieldsLocations = {};


        this.formValidators = [
            { fieldName: 'organization', validator: this.organization_validate },
            //{ fieldName: 'subOrganization', validator: this.subOrganization_validate },
            { fieldName: 'product', validator: this.product_validate },
            { fieldName: 'title', validator: this.title_validate },
            { fieldName: 'loanReason', validator: this.loanReason_validate },
            { fieldName: 'salaryNetPay', validator: this.salaryNetPay_validate },
            { fieldName: 'loanAmount', validator: this.loanAmount_validate },
            { fieldName: 'permanentResidence', validator: this.permanentResidence_validate },
            { fieldName: 'residenceState', validator: this.residenceState_validate },
            { fieldName: 'duration', validator: this.duration_validate },
            { fieldName: 'firstName', validator: this.firstName_validate },
            { fieldName: 'lastName', validator: this.lastName_validate },
            { fieldName: 'otherNames', validator: this.otherNames_validate },
            { fieldName: 'gender', validator: this.gender_validate },
            { fieldName: 'email', validator: this.email_validate },
            { fieldName: 'mobileNumber', validator: this.mobileNumber_validate },
            { fieldName: 'alternateMobileNumber', validator: this.alternateMobileNumber_validate },
            { fieldName: 'dateOfBirth', validator: this.dateOfBirth_validate },
            { fieldName: 'password', validator: this.password_validate },
            { fieldName: 'confirmPassword', validator: this.confirmPassword_validate },
            { fieldName: 'secretQuestion', validator: this.secretQuestion_validate },
            { fieldName: 'secretAnswer', validator: this.secretAnswer_validate }

        ];
    }
    

    

    componentWillMount() {
        const { products, getGender, getTitle, getSecretQuestions, getState, enums } = this.props;
        //console.log('BVN STATUS: '+bvnData.Status);
        //console.log('BVN NUMBER: '+bvn);
        var params;
        var uniqueId;
        getGender();
        getTitle();
        getSecretQuestions();
        getState();

        {
            products.status ? products.byType.map((data, index) => {
                params = {
                    label: data.ProductName,
                    value: data.ProductId
                }
                uniqueId = data.ProductId;
                //console.log(uniqueId);
                productOptions.push(params);
                productOptionsKey.push(uniqueId);
            }) : 
            productOptions = [
                { label: "CashToGo", value: "CashToGo" },
                { label: "UniversalLoan", value: "UniversalLoan" },
                { label: "Tsukuyomi Vibe", value: "Tsukuyomi Vibe" }
            ]
        }
        //console.log(productOptions);
    }


    componentDidMount() {
        // const { enums } = this.props;
        // var params;
        // console.log(enums);

        // {
        //     enums.gender.status == 'success' ? enums.gender.response.map((data, index) => {
        //         params = {
        //             label: data,
        //             value: data
        //         }
        //         //uniqueId = data.ProductId;
        //         //console.log(uniqueId);
        //         genderOptions.push(params);
        //         //productOptionsKey.push(uniqueId);
        //     }) : 
        //     genderOptions.push(
        //             { label: "Female", value: "Female" },
        //             { label: "Male", value: "Male" },
        //             { label: "Prefer to keep shrouded in mystery", value: "Other" }
        //         )
        // }

        // {
        //     enums.title.status == 'success' ? enums.title.response.map((data, index) => {
        //         params = {
        //             label: data,
        //             value: data
        //         }
        //         //uniqueId = data.ProductId;
        //         //console.log(uniqueId);
        //         titleOptions.push(params);
        //         //productOptionsKey.push(uniqueId);
        //     }) : 
        //     titleOptions.push(
        //             { label: "Mr", value: "Mr" },
        //             { label: "Mrs", value: "Mrs" },
        //             { label: "Miss", value: "Miss" },
        //             { label: "Master", value: "Master" }
        //         )
        // }

        // {
        //     enums.secretQuestions.status == 'success' ? enums.secretQuestions.response.map((data, index) => {
        //         params = {
        //             label: data,
        //             value: data
        //         }
        //         //uniqueId = data.ProductId;
        //         //console.log(uniqueId);
        //         secretQuestionOptions.push(params);
        //         //productOptionsKey.push(uniqueId);
        //     }) : 
        //     secretQuestionOptions.push(
        //             { label: "First pet's name", value: "First pet's name" },
        //             { label: "Best friend's name", value: "Best friend's name" },
        //             { label: "Favorite movie", value: "Favorite movie" }
        //         )
        // }

        // {
        //     enums.state.status == 'success' ? enums.state.response.map((data, index) => {
        //         params = {
        //             label: data.StateName,
        //             value: data.StateId
        //         }
        //         //uniqueId = data.ProductId;
        //         //console.log(uniqueId);
        //         residenceStateOptions.push(params);
        //         //productOptionsKey.push(uniqueId);
        //     }) : 
        //     residenceStateOptions.push(
        //             { label: "Abia", value: "ABA" },
        //             { label: "Anambra", value: "ANB" },
        //             { label: "Benue", value: "BEN" },
        //             { label: "Adamawa", value: "AD" }
        //         )
        // }
        //console.log(productOptions);
    }

    render() {
        const styles = StyleSheet.create({
            inputFlexStyles: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
            inputItem1Styles: {
                width: '80%',
                paddingTop: 15,
                paddingBottom: 15
            },
            inputItem2Styles: {
                width: '20%',
            },
            inputText: {
                fontSize: 1.2,
                borderBottomWidth: 0.5,
                borderBottomColor: 'lightgrey',
            },
            orgList: {
                padding: 12,
                fontSize: 1.3,
                borderBottomWidth: 0.5,
                borderBottomColor: 'lightgrey',
            },
            separator: {
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: '#8E8E8E',
              },
        })

        const { byNameOrganizations, enums } = this.props;
        let organizationOptions;
        let residenceStateOptions;
        let genderOptions;
        let titleOptions;
        let secretQuestionOptions;
        if (byNameOrganizations.status == true) { 
            
            organizationOptions = [];
            byNameOrganizations.all.map((data, index) => {
                this.loadOrganizationOptions = {label: data.OrganizationName,value: data.OrganizationId};
                organizationOptions.push(this.loadOrganizationOptions);
                //console.log(this.loadOrganizationOptions);
                //console.log('organizationOptions: '+organizationOptions);

                
                /*return (
                    <TouchableOpacity
                        onPress={(id, text) => this.onClickList(data.OrganizationId, data.OrganizationName)}
                        key={index}
                    >
                        <View style={styles.orgList}>
                            <Text>{data.OrganizationName}</Text>
                        </View>
                    </TouchableOpacity>
                )*/
            })
        }else{
            organizationOptions = [
                {label: 'No result', value: 0}
                /*{ label: "Andela", value: "Andela" },
                { label: "Intelia", value: "Intelia" },
                { label: "Interswitch", value: "Interswitch" },
                { label: "TeamApt", value: "TeamApt" },*/
            ];
        }

        //const { enums } = this.props;
        var params;
        console.log(enums);

        //{
            if(enums.gender.status == 'success') {
                genderOptions = [];
                enums.gender.response.map((data, index) => {
                    params = {
                        label: data,
                        value: data
                    }
                    //uniqueId = data.ProductId;
                    //console.log(uniqueId);
                    genderOptions.push(params);
                    //productOptionsKey.push(uniqueId);
                }) 
            } else {
                genderOptions = [
                    { label: "Female", value: "Female" },
                    { label: "Male", value: "Male" },
                    { label: "Prefer to keep shrouded in mystery", value: "Other" }
                ]
            }
            
        //}

        //{
            if(enums.title.status == 'success') {
                titleOptions = [];
                enums.title.response.map((data, index) => {
                    params = {
                        label: data,
                        value: data
                    }
                    //uniqueId = data.ProductId;
                    //console.log(uniqueId);
                    titleOptions.push(params);
                    //productOptionsKey.push(uniqueId);
                })
            }else{
                titleOptions = [
                    { label: "Mr", value: "Mr" },
                    { label: "Mrs", value: "Mrs" },
                    { label: "Miss", value: "Miss" },
                    { label: "Master", value: "Master" }
                ]
            }
        //}

        //{
            if(enums.secretQuestions.status == 'success') {
                secretQuestionOptions = [];
                enums.secretQuestions.response.map((data, index) => {
                    params = {
                        label: data,
                        value: data
                    }
                    //uniqueId = data.ProductId;
                    //console.log(uniqueId);
                    secretQuestionOptions.push(params);
                    //productOptionsKey.push(uniqueId);
                })
            }else{
                secretQuestionOptions = [
                    { label: "First pet's name", value: "First pet's name" },
                    { label: "Best friend's name", value: "Best friend's name" },
                    { label: "Favorite movie", value: "Favorite movie" }
                ]
            }
        //}

        //{
            if(enums.state.status == 'success') {
                residenceStateOptions = [];
                enums.state.response.map((data, index) => {
                    params = {
                        label: data.StateName,
                        value: data.StateId
                    }
                    //uniqueId = data.ProductId;
                    //console.log(uniqueId);
                    residenceStateOptions.push(params);
                    //productOptionsKey.push(uniqueId);
                })
            }else{
                residenceStateOptions = [
                    { label: "Abia", value: "ABA" },
                    { label: "Anambra", value: "ANB" },
                    { label: "Benue", value: "BEN" },
                    { label: "Adamawa", value: "AD" }
                ]
            }
            
        //}

        let monthlyInstallment = 0;
        let totalRepayment = 0;

        let { duration, loanAmount } = this.state.formData;

        if (duration > 0 && loanAmount != '') {
            interestRate = (10 + (70 * duration / 24));

            let loanAmountFloat = parseFloat(this.extractLoanAmount(loanAmount));

            totalRepayment = loanAmountFloat * ((100 + interestRate) / 100)
            monthlyInstallment = totalRepayment / duration;
        }

        monthlyInstallment = formatAmount(monthlyInstallment);
        totalRepayment = formatAmount(totalRepayment);

        return (
            <View style={{ flex: 1 }}>


                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    extraScrollHeight={100}
                    // enableAutomaticScroll={false}
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                    innerRef={ref => { this.scroll = ref }}
                >

                    <View style={{ marginTop: 20, marginBottom: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#203659' }}>Your Loan</Text>
                    </View>
                    <View>
                        <View style={styles.inputFlexStyles}>
                            <View style={styles.inputItem1Styles}>
                                <LabelTextField 
                                    labelText={'ENTER YOUR ORGANIZATION'}
                                    onChangeText={(text) => this.handleTxtChange(text)}
                                    error={this.state.formErrors.organization && this.state.showFormErrors ? this.state.formErrors.organization : ''}

                                    containerStyle={{ marginBottom: 40 }}
                                    placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                                    labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                                    inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                                    inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                                />
                                {/*<TextInput
                                    onChangeText={(text) => this.handleTxtChange(text)}
                                    placeholder='ORGANIZATION'
                                    error={this.state.formErrors.organization && this.state.showFormErrors ? this.state.formErrors.organization : ''} 
                                />*/}
                            </View>
                            <View style={styles.inputItem2Styles}>
                                <SearchButton 
                                    onPress={this.handleSearchPress}
                                    title='search'
                                />
                            </View>
                        </View>
                        {/*<View>
                            {byNameOrganizations.status == true ? listView : null}
                        </View>*/}
                    </View>
                    
                {   
                    byNameOrganizations.status == true ? 
                        <LabelDropdown labelText={'FIND YOUR ORGANIZATION HERE'}
                            onLayout={(val) => { this.fieldsLocations.organization = val.nativeEvent.layout.y }}
                            value={this.state.formData.organization}
                            options={organizationOptions}
                            onChange={this.organization_onChange}
                            error={this.state.formErrors.organization && this.state.showFormErrors ? this.state.formErrors.organization : ''}

                            containerStyle={{ marginBottom: 40 }}
                            placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                            labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                            dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                            dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                            dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                        />
                    : null

                }

                    {/*<LabelDropdown labelText={'SUB-ORGANIZATION'}
                        onLayout={(val) => { this.fieldsLocations.subOrganization = val.nativeEvent.layout.y }}
                        value={this.state.formData.subOrganization}
                        options={subOrganizationOptions}
                        onChange={this.subOrganization_onChange}
                        error={this.state.formErrors.subOrganization && this.state.showFormErrors ? this.state.formErrors.subOrganization : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
        />*/}



                    <LabelDropdown labelText={'SELECT A PRODUCT'}
                        onLayout={(val) => { this.fieldsLocations.product = val.nativeEvent.layout.y }}
                        value={this.state.formData.product}
                        options={productOptions}
                        onChange={this.product_onChange}
                        error={this.state.formErrors.product && this.state.showFormErrors ? this.state.formErrors.product : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />

                    <LabelTextField labelText={'YOUR SALARY NET PAY'}
                        onLayout={(val) => { this.fieldsLocations.salaryNetPay = val.nativeEvent.layout.y }}
                        value={this.state.formData.salaryNetPay}
                        onChangeText={this.salaryNetPay_onChange}
                        error={this.state.formErrors.salaryNetPay && this.state.showFormErrors ? this.state.formErrors.salaryNetPay : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'number-pad'}
                    />

                    <LabelTextField labelText={'AMOUNT YOU WANT TO LOAN'}
                        onLayout={(val) => { this.fieldsLocations.loanAmount = val.nativeEvent.layout.y }}
                        value={this.state.formData.loanAmount}
                        onChangeText={this.loanAmount_onChange}
                        error={this.state.formErrors.loanAmount && this.state.showFormErrors ? this.state.formErrors.loanAmount : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'number-pad'}
                    />

                    <View style={styles.inputItem1Styles}>
                        <TextInput
                            onChangeText={(text) => this.loanReasonChange(text)}
                            multiline
                            placeholder='REASON FOR THE LOAN'
                            error={this.state.formErrors.loanReason && this.state.showFormErrors ? this.state.formErrors.loanReason : ''}
                            
                        />
                    </View>


                    <LabelSlider labelText={'DURATION'}
                        onLayout={(val) => { this.fieldsLocations.duration = val.nativeEvent.layout.y }}
                        value={this.state.formData.duration}
                        valueText={this.state.formData.duration + (this.state.formData.duration == 1 ? ' Month' : ' Months')}
                        minimumValue={0}
                        maximumValue={24}
                        step={1}
                        onChange={this.duration_onChange}
                        error={this.state.formErrors.duration && this.state.showFormErrors ? this.state.formErrors.duration : ''}

                        containerStyle={{ marginBottom: 40 }}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                    />



                    <View style={{ alignItems: 'center', marginBottom: 40 }}>
                        <LoanCard
                            monthlyInstallment={monthlyInstallment}
                            totalRepayment={totalRepayment}
                        />

                        <View style={{ marginTop: 20 }}>
                            <FlatButton
                                onPress={() => { }}
                                text={'View Repayment Schedule'}
                                textStyle={{ color: '#61DADA', fontSize: 16, fontWeight: 'bold' }}
                                containerStyle={{ height: 40 }}
                            />
                        </View>


                    </View>


                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#203659' }}>Tell us a bit about you</Text>
                    </View>

                    <LabelDropdown labelText={'Title'}
                        onLayout={(val) => { this.fieldsLocations.title = val.nativeEvent.layout.y }}
                        value={this.state.formData.title}
                        options={titleOptions}
                        onChange={this.title_onChange}
                        error={this.state.formErrors.title && this.state.showFormErrors ? this.state.formErrors.title : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />

                    <LabelTextField labelText={'FIRST NAME'}
                        onLayout={(val) => { this.fieldsLocations.firstName = val.nativeEvent.layout.y }}
                        value={this.state.formData.firstName}
                        onChangeText={this.firstName_onChange}
                        error={this.state.formErrors.firstName && this.state.showFormErrors ? this.state.formErrors.firstName : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <LabelTextField labelText={'LAST NAME'}
                        onLayout={(val) => { this.fieldsLocations.lastName = val.nativeEvent.layout.y }}
                        value={this.state.formData.lastName}
                        onChangeText={this.lastName_onChange}
                        error={this.state.formErrors.lastName && this.state.showFormErrors ? this.state.formErrors.lastName : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <LabelTextField labelText={'OTHER NAMES'}
                        onLayout={(val) => { this.fieldsLocations.otherNames = val.nativeEvent.layout.y }}
                        value={this.state.formData.otherNames}
                        onChangeText={this.otherNames_onChange}
                        error={this.state.formErrors.otherNames && this.state.showFormErrors ? this.state.formErrors.otherNames : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <LabelDropdown labelText={'GENDER *'}
                        onLayout={(val) => { this.fieldsLocations.gender = val.nativeEvent.layout.y }}
                        value={this.state.formData.gender}
                        options={genderOptions}
                        onChange={this.gender_onChange}
                        error={this.state.formErrors.gender && this.state.showFormErrors ? this.state.formErrors.gender : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />

                    <View style={styles.inputItem1Styles}>
                        <TextInput
                            onChangeText={(text) => this.permanentResidenceChange(text)}
                            multiline
                            placeholder='PERMANENT RESIDENCE'
                            error={this.state.formErrors.permanentResidence && this.state.showFormErrors ? this.state.formErrors.permanentResidence : ''}   
                        />
                    </View>

                    <LabelDropdown labelText={'STATE OF RESIDENCE'}
                        onLayout={(val) => { this.fieldsLocations.residenceState = val.nativeEvent.layout.y }}
                        value={this.state.formData.residenceState}
                        options={residenceStateOptions}
                        onChange={this.residenceState_onChange}
                        error={this.state.formErrors.residenceState && this.state.showFormErrors ? this.state.formErrors.residenceState : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />



                    <LabelTextField labelText={'EMAIL ADDRESS *'}
                        onLayout={(val) => { this.fieldsLocations.email = val.nativeEvent.layout.y }}
                        value={this.state.formData.email}
                        onChangeText={this.email_onChange}
                        error={this.state.formErrors.email && this.state.showFormErrors ? this.state.formErrors.email : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'email-address'}
                    />



                    <LabelTextField labelText={'MOBILE NUMBER *'}
                        onLayout={(val) => { this.fieldsLocations.mobileNumber = val.nativeEvent.layout.y }}
                        value={this.state.formData.mobileNumber}
                        onChangeText={this.mobileNumber_onChange}
                        error={this.state.formErrors.mobileNumber && this.state.showFormErrors ? this.state.formErrors.mobileNumber : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'phone-pad'}
                    />




                    <LabelTextField labelText={'ALTERNATE MOBILE NUMBER'}
                        onLayout={(val) => { this.fieldsLocations.alternateMobileNumber = val.nativeEvent.layout.y }}
                        value={this.state.formData.alternateMobileNumber}
                        onChangeText={this.alternateMobileNumber_onChange}
                        error={this.state.formErrors.alternateMobileNumber && this.state.showFormErrors ? this.state.formErrors.alternateMobileNumber : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'phone-pad'}
                    />



                    <LabelDatePicker labelText={'DATE OF BIRTH *'}
                        onLayout={(val) => { this.fieldsLocations.dateOfBirth = val.nativeEvent.layout.y }}
                        value={this.state.formData.dateOfBirth}
                        onChange={this.dateOfBirth_onChange}
                        error={this.state.formErrors.dateOfBirth && this.state.showFormErrors ? this.state.formErrors.dateOfBirth : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        icon={<Image source={require('../../../../../../../assets/components/LabelDatePicker/calendar.png')} style={{ height: 16, width: 16 * 1.08 }} tintColor={'#077DBB'} />}
                        modalIcon={<Image source={require('../../../../../../../assets/components/LabelDatePicker/close_button.png')} style={{ height: 28, width: 28 }} />}
                        labelStyle={SharedStyles.labelDatePicker.dark.labelStyle}
                        pickerContainerStyle={SharedStyles.labelDatePicker.dark.pickerContainerStyle}
                        pickerTextStyle={SharedStyles.labelDatePicker.dark.pickerTextStyle}
                    />



                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#203659' }}>Security</Text>
                    </View>


                    <LabelTextField labelText={'PASSWORD'}
                        onLayout={(val) => { this.fieldsLocations.password = val.nativeEvent.layout.y }}
                        value={this.state.formData.password}
                        onChangeText={this.password_onChange}
                        error={this.state.formErrors.password && this.state.showFormErrors ? this.state.formErrors.password : ''}

                        containerStyle={{ marginBottom: 40, marginTop: 10 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        secureTextEntry={true}
                    />


                    <LabelTextField labelText={'CONFIRM PASSWORD'}
                        onLayout={(val) => { this.fieldsLocations.confirmPassword = val.nativeEvent.layout.y }}
                        value={this.state.formData.confirmPassword}
                        onChangeText={this.confirmPassword_onChange}
                        error={this.state.formErrors.confirmPassword && this.state.showFormErrors ? this.state.formErrors.confirmPassword : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        secureTextEntry={true}
                    />



                    <LabelDropdown
                        onLayout={(val) => { this.fieldsLocations.secretQuestion = val.nativeEvent.layout.y }}
                        labelText={'SECRET QUESTION'}
                        value={this.state.formData.secretQuestion}
                        options={secretQuestionOptions}
                        onChange={this.secretQuestion_onChange}
                        error={this.state.formErrors.secretQuestion && this.state.showFormErrors ? this.state.formErrors.secretQuestion : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelTextField labelText={'SECRET ANSWER'}
                        onLayout={(val) => { this.fieldsLocations.secretAnswer = val.nativeEvent.layout.y }}
                        value={this.state.formData.secretAnswer}
                        onChangeText={this.secretAnswer_onChange}
                        error={this.state.formErrors.secretAnswer && this.state.showFormErrors ? this.state.formErrors.secretAnswer : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <View style={{ justifyContent: 'flex-end', marginBottom: 20 }}>
                        <Button
                            containerStyle={SharedStyles.button.containerStyle}
                            textStyle={SharedStyles.button.textStyle}
                            colors={['#097fbd', '#43ace2']}
                            text={'Next'}
                            onPress={this.submitHandler}
                        />
                    </View>

                </KeyboardAwareScrollView>

            </View>

        );
    }



   organization_onChange(value) {
        let formData = this.state.formData;
        formData.organization = value;

        this.setState({ formData: formData });
        this.organization_validate(value);
    }

    organization_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.organization = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }

    title_onChange(value) {
        let formData = this.state.formData;
        formData.title = value;

        this.setState({ formData: formData });
        this.title_validate(value);
    }

    title_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.title = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }

    /*subOrganization_onChange(value) {
        let formData = this.state.formData;
        formData.subOrganization = value;

        this.setState({ formData: formData });
        this.subOrganization_validate(value);
    }

    subOrganization_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.subOrganization = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }*/

    handleTxtChange(text) {
        console.log(text);
        let trimTxt = text.replace(' ', '');
        console.log(trimTxt);
        let formData = this.state.formData;
        formData.organizationSearch = trimTxt;
        this.setState({
            formData
        });
        //this.props.organizationsByName(text);
    }

    handleSearchPress() {
        orgSearchValue = this.state.formData.organizationSearch;
        this.props.organizationsByName(orgSearchValue);
    }

    /*onClickList(id, text) {
        console.log(id);
        let formData = this.state.formData;
        formData.organizationId = id;
        formData.organization = text;
        this.setState({
            formData
        });
    }*/


    product_onChange(value) {
        console.log(value);
        let formData = this.state.formData;
        formData.product = value;

        this.setState({ formData: formData });
        this.product_validate(value);
    }

    product_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.product = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    loanReasonChange (value) {
        let formData = this.state.formData;
        formData.loanReason = value;

        this.setState({ formData: formData });
        this.loanReason_validate(value);
    }
    loanReason_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.loanReason = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    salaryNetPay_onChange(value) {

        let valueCharArray = value.split('');

        let decimalFound = false;
        let filteredCharArray = valueCharArray.filter(char => {
            let charCode = char.charCodeAt();
            if(charCode == 46 && decimalFound) {
                return false;
            }
            return (charCode >= 48 && charCode <= 57) || charCode == 46; 
        });

        let filteredCharString = filteredCharArray.join('');

        let [majorPart, minorPart] = filteredCharString.split('.');

        let newValue = ''; 
        if(majorPart) {
            newValue = formatAmountMajor(majorPart);
        }
        
        if(filteredCharString.indexOf('.')> - 1) {
            newValue += '.';
        }

        if(minorPart) {
            if(minorPart.length > 2) {
                minorPart = minorPart.slice(0, 2);
            }
            newValue += minorPart;
        } 

        let formData = this.state.formData;
        formData.salaryNetPay = newValue;

        this.setState({ formData: formData });
        this.salaryNetPay_validate(value);
    }

    salaryNetPay_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.salaryNetPay = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }

    extractSalaryNetPay(value) {
        let valueCharArray = value.split('');

        let decimalFound= false;

        let filteredCharArray = valueCharArray.filter(char => {
            let charCode = char.charCodeAt();
            if(charCode == 46 && decimalFound) {
                return false;
            }
            return (charCode >= 48 && charCode <= 57) || charCode == 46; 
        });

        return filteredCharArray.join('');
    }



    loanAmount_onChange(value) {

        let valueCharArray = value.split('');

        let decimalFound = false;
        let filteredCharArray = valueCharArray.filter(char => {
            let charCode = char.charCodeAt();
            if(charCode == 46 && decimalFound) {
                return false;
            }
            return (charCode >= 48 && charCode <= 57) || charCode == 46; 
        });

        let filteredCharString = filteredCharArray.join('');

        let [majorPart, minorPart] = filteredCharString.split('.');

        let newValue = ''; 
        if(majorPart) {
            newValue = formatAmountMajor(majorPart);
        }
        
        if(filteredCharString.indexOf('.')> - 1) {
            newValue += '.';
        }

        if(minorPart) {
            if(minorPart.length > 2) {
                minorPart = minorPart.slice(0, 2);
            }
            newValue += minorPart;
        } 

        let formData = this.state.formData;
        formData.loanAmount = newValue;

        this.setState({ formData: formData });
        this.loanAmount_validate(value);
    }

    loanAmount_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.loanAmount = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }

    extractLoanAmount(value) {
        let valueCharArray = value.split('');

        let decimalFound= false;

        let filteredCharArray = valueCharArray.filter(char => {
            let charCode = char.charCodeAt();
            if(charCode == 46 && decimalFound) {
                return false;
            }
            return (charCode >= 48 && charCode <= 57) || charCode == 46; 
        });

        return filteredCharArray.join('');
    }


    duration_onChange(value) {
        let formData = this.state.formData;
        formData.duration = value;

        this.setState({ formData: formData });
        this.duration_validate(value);
    }

    duration_validate(value) {
        let error = '';

        if (value == '' || value < 1) {
            error = 'Minimum duration is 1 Month';
        }

        let formErrors = this.state.formErrors;
        formErrors.duration = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }

    title_onChange(value) {
        //console.log(value);
        let formData = this.state.formData;
        formData.title = value;

        this.setState({ formData: formData });
        this.title_validate(value);
    }

    title_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.title = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    firstName_onChange(value) {
        let formData = this.state.formData;
        formData.firstName = value;

        this.setState({ formData: formData });
        this.firstName_validate(value);
    }

    firstName_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.firstName = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    lastName_onChange(value) {
        let formData = this.state.formData;
        formData.lastName = value;

        this.setState({ formData: formData });
        this.lastName_validate(value);
    }

    lastName_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.lastName = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    otherNames_onChange(value) {
        let formData = this.state.formData;
        formData.otherNames = value;

        this.setState({ formData: formData });
        this.otherNames_validate(value);
    }

    otherNames_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.otherNames = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    gender_onChange(value) {
        let formData = this.state.formData;
        formData.gender = value;

        this.setState({ formData: formData });
        this.gender_validate(value);
    }

    gender_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.gender = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    permanentResidenceChange (value) {
        let formData = this.state.formData;
        formData.permanentResidence = value;

        this.setState({ formData: formData });
        this.permanentResidence_validate(value);
    }
    permanentResidence_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.permanentResidence = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }
    
    residenceState_onChange(value) {
        let formData = this.state.formData;
        formData.residenceState = value;

        this.setState({ formData: formData });
        this.residenceState_validate(value);
    }

    residenceState_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.residenceState = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    email_onChange(value) {
        let formData = this.state.formData;
        formData.email = value;

        this.setState({ formData: formData });
        this.email_validate(value);
    }

    email_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.email = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    mobileNumber_onChange(value) {
        let formData = this.state.formData;
        formData.mobileNumber = value;

        this.setState({ formData: formData });
        this.mobileNumber_validate(value);
    }

    mobileNumber_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.mobileNumber = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    alternateMobileNumber_onChange(value) {
        let formData = this.state.formData;
        formData.alternateMobileNumber = value;

        this.setState({ formData: formData });
        this.alternateMobileNumber_validate(value);
    }

    alternateMobileNumber_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.alternateMobileNumber = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    dateOfBirth_onChange(value) {
        let formData = this.state.formData;
        formData.dateOfBirth = value;

        this.setState({ formData: formData });
        this.dateOfBirth_validate(value);
    }

    dateOfBirth_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.dateOfBirth = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    password_onChange(value) {
        let formData = this.state.formData;
        formData.password = value;

        this.setState({ formData: formData });
        this.password_validate(value);
    }

    password_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.password = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    confirmPassword_onChange(value) {
        let formData = this.state.formData;
        formData.confirmPassword = value;

        this.setState({ formData: formData });
        this.confirmPassword_validate(value);
    }

    confirmPassword_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.confirmPassword = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    secretQuestion_onChange(value) {
        let formData = this.state.formData;
        formData.secretQuestion = value;

        this.setState({ formData: formData });
        this.secretQuestion_validate(value);
    }

    secretQuestion_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.secretQuestion = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    secretAnswer_onChange(value) {
        let formData = this.state.formData;
        formData.secretAnswer = value;

        this.setState({ formData: formData });
        this.secretAnswer_validate(value);
    }

    secretAnswer_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.secretAnswer = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    submitHandler() {
        console.log('submit bvn: '+this.props.bvn)
        let bvn = this.props.bvn;
        let bvnData = this.props.bvnData;
        let validForm = true;
        let anchorPosition = null;

        this.formValidators.map(item => {
            let value = this.state.formData[item.fieldName];

            if (!item.validator(value)) {
                validForm = false;

                //scroll to the topmost invalid field
                if (anchorPosition == null) {
                    anchorPosition = this.fieldsLocations[item.fieldName];
                }
            }
        });

        

        if (validForm) {
            let formData = this.state.formData;
            formData.userBvn.details = bvnData;
            formData.userBvn.number = bvn;
            this.setState({
                formData: formData
            })
            this.props.submitHandler(this.state.formData);
            this.props.sendPersonalInfo(this.state.formData);
            return;
        }

        this.setState({ showFormErrors: true });
        this.scroll.props.scrollToPosition(0, anchorPosition - 10, true);
    }
}

const mapStateToProps = (state) => {
    return {
        personalDetails: state.personalDetails,
        products: state.products,
        byNameOrganizations: state.organizationsByName,
        enums: state.enums.enums
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendPersonalInfo: (data) => dispatch(sendPersonalInfo(data)),
        allOrganizations: () => dispatch(allOrganizations()),
        getGender: () => dispatch(getGender()),
        getTitle: () => dispatch(getTitle()),
        getSecretQuestions: () => dispatch(getSecretQuestions()),
        getState: () => dispatch(getState()),
        organizationsByName: (text) => dispatch(organizationsByName(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);