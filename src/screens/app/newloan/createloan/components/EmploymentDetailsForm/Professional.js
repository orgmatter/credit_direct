import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import Button from '../../../../../../components/Button/index.js';

import LabelTextField from '../../../../../../components/LabelTextField/index.js';

import LabelDropdown from '../../../../../../components/LabelDropdown/index.js'

import LabelFilePicker from '../../../../../../components/LabelFilePicker/index.js';

import LabelDatePicker from '../../../../../../components/LabelDatePicker/index.js';

import SharedStyles from '../../../../../../styles/SharedStyles.js';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { getIndustryTypes, getEmployeeStatus } from '../../../../../../store/actions/EnumsActions';


const workIdentificationTypeOptions = [
    { label: "Salary Review Letter", value: "Salary Review Letter" },
    { label: "Work ID", value: "Work ID" },
];

const jobRoleOptions = [
    { label: "Web Developer", value: "Web Developer" },
    { label: "Mobile Developer ID", value: "Mobile Developer ID" },
];


const lgaOptions = [
    { label: "Eti-Osa", value: "Lagos" },
    { label: "Lekki", value: "Owerri" }
];


// const industryOptions = [
//     { label: "Fin-Tech", value: "Lagos" },
//     { label: "Waste", value: "Owerri" }
// ];

// const employmentStatusOptions = [
//     { label: "Employed", value: "Lagos" },
//     { label: "Unemployed", value: "Owerri" }
// ];

const repaymentTypeOptions = [
    { label: "DDM", value: "Lagos" },
    { label: "RDNM", value: "Owerri" }
];

const salaryDayOptions = [];
for (let i = 1; i < 31; i++) {
    salaryDayOptions.push({
        label: i,
        value: i
    });
};


class VerificationForm extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                workIdentificationType: { label: '', value: '' },
                jobRole: { label: '', value: '' },
                jobLocation: { label: '', value: '' },
                workEmail: '',
                workNumber: '',
                officeAddress: '',
                idCard: null,
                lga: '',
                landmark: '',
                industry: { label: '', value: '' },
                employmentStatus: { label: '', value: '' },
                employmentNumber: '',
                employmentDate: null,
                repaymentType: { label: '', value: '' },
                consistentSalaryDay: { label: '', value: '' },
                lastSalaryOne: { label: '', value: '' },
                lastSalaryTwo: { label: '', value: '' },
                lastSalaryThree: { label: '', value: '' },
            },
            formErrors: {
                workIdentificationType: '',
                jobRole: '',
                jobLocation: '',
                workEmail: '',
                workNumber: '',
                idCard: '',
                lga: '',
                landmark: '',
                industry: '',
                employmentStatus: '',
                employmentNumber: '',
                employmentDate: '',
                repaymentType: '',
                consistentSalaryDay: '',
                lastSalaryOne: '',
                lastSalaryTwo: '',
                lastSalaryThree: ''
            }
        }




        // this.workIdentificationType_onChange = this.workIdentificationType_onChange.bind(this);
        // this.workIdentificationType_validate = this.workIdentificationType_validate.bind(this);

        this.jobRole_onChange = this.jobRole_onChange.bind(this);
        this.jobRole_validate = this.jobRole_validate.bind(this);

        this.jobLocation_onChange = this.jobLocation_onChange.bind(this);
        this.jobLocation_validate = this.jobLocation_validate.bind(this);

        this.workEmail_onChange = this.workEmail_onChange.bind(this);
        this.workEmail_validate = this.workEmail_validate.bind(this);

        this.workNumber_onChange = this.workNumber_onChange.bind(this);
        this.workNumber_validate = this.workNumber_validate.bind(this);

        this.lga_onChange = this.lga_onChange.bind(this);
        this.lga_validate = this.lga_validate.bind(this);

        this.landmark_onChange = this.landmark_onChange.bind(this);
        this.landmark_validate = this.landmark_validate.bind(this);

        this.industry_onChange = this.industry_onChange.bind(this);
        this.industry_validate = this.industry_validate.bind(this);

        this.employmentStatus_onChange = this.employmentStatus_onChange.bind(this);
        this.employmentStatus_validate = this.employmentStatus_validate.bind(this);

        this.employmentNumber_onChange = this.employmentNumber_onChange.bind(this);
        this.employmentNumber_validate = this.employmentNumber_validate.bind(this);

        this.employmentDate_onChange = this.employmentDate_onChange.bind(this);
        this.employmentDate_validate = this.employmentDate_validate.bind(this);

        this.repaymentType_onChange = this.repaymentType_onChange.bind(this);
        this.repaymentType_validate = this.repaymentType_validate.bind(this);

        this.consistentSalaryDay_onChange = this.consistentSalaryDay_onChange.bind(this);
        this.consistentSalaryDay_validate = this.consistentSalaryDay_validate.bind(this);

        this.lastSalaryOne_onChange = this.lastSalaryOne_onChange.bind(this);
        this.lastSalaryOne_validate = this.lastSalaryOne_validate.bind(this);

        this.lastSalaryTwo_onChange = this.lastSalaryTwo_onChange.bind(this);
        this.lastSalaryTwo_validate = this.lastSalaryTwo_validate.bind(this);

        this.lastSalaryThree_onChange = this.lastSalaryThree_onChange.bind(this);
        this.lastSalaryThree_validate = this.lastSalaryThree_validate.bind(this);

        this.officeAddressChange = this.officeAddressChange.bind(this);
        this.officeAddress_validate = this.officeAddress_validate.bind(this);


        this.submitHandler = this.submitHandler.bind(this);


        this.fieldsLocations = {};


        this.formValidators = [

            //{ fieldName: 'workIdentificationType', validator: this.workIdentificationType_validate },
            { fieldName: 'jobRole', validator: this.jobRole_validate },
            { fieldName: 'jobLocation', validator: this.jobLocation_validate },
            { fieldName: 'workEmail', validator: this.workEmail_validate },
            { fieldName: 'workNumber', validator: this.workNumber_validate },
            { fieldName: 'officeAddress', validator: this.officeAddress_validate },
            { fieldName: 'lga', validator: this.lga_validate },
            { fieldName: 'landmark', validator: this.landmark_validate },
            { fieldName: 'industry', validator: this.industry_validate },
            { fieldName: 'employmentStatus', validator: this.employmentStatus_validate },
            { fieldName: 'employmentNumber', validator: this.employmentNumber_validate },
            { fieldName: 'employmentDate', validator: this.employmentDate_validate },
            { fieldName: 'repaymentType', validator: this.repaymentType_validate },
            { fieldName: 'consistentSalaryDay', validator: this.consistentSalaryDay_validate },
            { fieldName: 'lastSalaryOne', validator: this.lastSalaryOne_validate },
            { fieldName: 'lastSalaryTwo', validator: this.lastSalaryTwo_validate },
            { fieldName: 'lastSalaryThree', validator: this.lastSalaryThree_validate }
        ];
    }

    componentWillMount() {
        const { getIndustryTypes, getEmployeeStatus } = this.props;
        getIndustryTypes();
        getEmployeeStatus();
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

        const { enums } = this.props;
        let jobLocationOptions;
        let employmentStatusOptions;
        if(enums.state.status == 'success') {
            jobLocationOptions = [];
            enums.state.response.map((data, index) => {
                params = {
                    label: data.StateName,
                    value: data.StateId
                }
                //uniqueId = data.ProductId;
                //console.log(uniqueId);
                jobLocationOptions.push(params);
                //productOptionsKey.push(uniqueId);
            })
        }else{
            jobLocationOptions = [
                { label: "Abia", value: "ABA" },
                { label: "Anambra", value: "ANB" },
                { label: "Benue", value: "BEN" },
                { label: "Adamawa", value: "AD" }
            ]
        }

        if(enums.industryTypes.status == 'success') {
            industryOptions = [];
            enums.industryTypes.response.map((data, index) => {
                params = {
                    label: data.StateName,
                    value: data.StateId
                }
                //uniqueId = data.ProductId;
                //console.log(uniqueId);
                industryOptions.push(params);
                //productOptionsKey.push(uniqueId);
            })
        }else{
            industryOptions = [
                { label: "Fin-Tech", value: "Lagos" },
                { label: "Waste", value: "Owerri" }
            ]
        }

        if(enums.employeeStatus.status == 'success') {
            employmentStatusOptions = [];
            enums.employeeStatus.response.map((data, index) => {
                params = {
                    label: data.StateName,
                    value: data.StateId
                }
                //uniqueId = data.ProductId;
                //console.log(uniqueId);
                industryOptions.push(params);
                //productOptionsKey.push(uniqueId);
            })
        }else{
            employmentStatusOptions = [
                { label: "Employed", value: "Lagos" },
                { label: "Unemployed", value: "Owerri" }
            ]
        }

        return (
            <View style={{ flex: 1 }}>

                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    style={{}}
                    innerRef={ref => { this.scroll = ref }}
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                >


                    <View style={{ marginTop: 20, marginBottom: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#203659' }}>Employment Details</Text>
                    </View>

                    {/*<LabelDropdown labelText={'TYPE OF WORK IDENTIFICATION'}
                        onLayout={(val) => { this.fieldsLocations.workIdentificationType = val.nativeEvent.layout.y }}
                        value={this.state.formData.workIdentificationType}
                        options={workIdentificationTypeOptions}
                        onChange={this.workIdentificationType_onChange}
                        error={this.state.formErrors.workIdentificationType && this.state.showFormErrors ? this.state.formErrors.workIdentificationType : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />*/}

                    <LabelDropdown labelText={'JOB ROLE/GRADE'}
                        onLayout={(val) => { this.fieldsLocations.jobRole = val.nativeEvent.layout.y }}
                        value={this.state.formData.jobRole}
                        options={jobRoleOptions}
                        onChange={this.jobRole_onChange}
                        error={this.state.formErrors.jobRole && this.state.showFormErrors ? this.state.formErrors.jobRole : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />

                    <LabelDropdown labelText={'JOB LOCATION'}
                        onLayout={(val) => { this.fieldsLocations.jobLocation = val.nativeEvent.layout.y }}
                        value={this.state.formData.jobLocation}
                        options={jobLocationOptions}
                        onChange={this.jobLocation_onChange}
                        error={this.state.formErrors.jobLocation && this.state.showFormErrors ? this.state.formErrors.jobLocation : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    {/*<LabelTextField labelText={'JOB LOCATION'}
                        onLayout={(val) => { this.fieldsLocations.jobLocation = val.nativeEvent.layout.y }}
                        value={this.state.formData.jobLocation}
                        onChangeText={this.jobLocation_onChange}
                        error={this.state.formErrors.jobLocation && this.state.showFormErrors ? this.state.formErrors.jobLocation : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />*/}


                    <LabelTextField labelText={'WORK EMAIL'}
                        onLayout={(val) => { this.fieldsLocations.workEmail = val.nativeEvent.layout.y }}
                        value={this.state.formData.workEmail}
                        onChangeText={this.workEmail_onChange}
                        error={this.state.formErrors.workEmail && this.state.showFormErrors ? this.state.formErrors.workEmail : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'email-address'}
                    />


                    <LabelTextField labelText={'OFFICE PHONE NUMBER'}
                        onLayout={(val) => { this.fieldsLocations.workNumber = val.nativeEvent.layout.y }}
                        value={this.state.formData.workNumber}
                        onChangeText={this.workNumber_onChange}
                        error={this.state.formErrors.workNumber && this.state.showFormErrors ? this.state.formErrors.workNumber : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'phone-pad'}
                    />

                    <View style={styles.inputItem1Styles}>
                        <TextInput
                            onChangeText={(text) => this.officeAddressChange(text)}
                            multiline
                            placeholder='OFFICE ADDRESS'
                            error={this.state.formErrors.officeAddress && this.state.showFormErrors ? this.state.formErrors.officeAddress : ''}   

                            containerStyle={{ marginBottom: 40 }}
                            placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                            labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                            inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                            inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        />
                    </View>


                    {/* <LabelFilePicker labelText={'EMPLOYMENT ID CARD'}
                        onLayout={(val) => { this.fieldsLocations.idCard = val.nativeEvent.layout.y }}
                        value={this.state.formData.idCard}
                        onChange={this.idCard_onChange}
                        error={this.state.formErrors.idCard && this.state.showFormErrors ? this.state.formErrors.idCard : ''}

                        buttonText={'Upload ID'}
                        containerStyle={{ marginBottom: 40 }}
                        icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    /> */}


                    {/*<LabelDropdown labelText={'LGA'}
                        onLayout={(val) => { this.fieldsLocations.lga = val.nativeEvent.layout.y }}
                        value={this.state.formData.lga}
                        options={lgaOptions}
                        onChange={this.lga_onChange}
                        error={this.state.formErrors.lga && this.state.showFormErrors ? this.state.formErrors.lga : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />*/}


                    <LabelTextField labelText={'LGA'}
                        onLayout={(val) => { this.fieldsLocations.lga = val.nativeEvent.layout.y }}
                        value={this.state.formData.lga}
                        onChangeText={this.lga_onChange}
                        error={this.state.formErrors.lga && this.state.showFormErrors ? this.state.formErrors.lga : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />


                    <LabelTextField labelText={'NEAREST B-STOP/LANDMARK'}
                        onLayout={(val) => { this.fieldsLocations.landmark = val.nativeEvent.layout.y }}
                        value={this.state.formData.landmark}
                        onChangeText={this.landmark_onChange}
                        error={this.state.formErrors.landmark && this.state.showFormErrors ? this.state.formErrors.landmark : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <LabelDropdown labelText={'INDUSTRY'}
                        onLayout={(val) => { this.fieldsLocations.industry = val.nativeEvent.layout.y }}
                        value={this.state.formData.industry}
                        options={industryOptions}
                        onChange={this.industry_onChange}
                        error={this.state.formErrors.industry && this.state.showFormErrors ? this.state.formErrors.industry : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelDropdown labelText={'EMPLOYMENT STATUS'}
                        onLayout={(val) => { this.fieldsLocations.employmentStatus = val.nativeEvent.layout.y }}
                        value={this.state.formData.employmentStatus}
                        options={employmentStatusOptions}
                        onChange={this.employmentStatus_onChange}
                        error={this.state.formErrors.employmentStatus && this.state.showFormErrors ? this.state.formErrors.employmentStatus : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelTextField labelText={'EMPLOYMENT NUMBER'}
                        onLayout={(val) => { this.fieldsLocations.employmentNumber = val.nativeEvent.layout.y }}
                        value={this.state.formData.employmentNumber}
                        onChangeText={this.employmentNumber_onChange}
                        error={this.state.formErrors.employmentNumber && this.state.showFormErrors ? this.state.formErrors.employmentNumber : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <LabelDatePicker labelText={'EMPLOYMENT DATE'}
                        onLayout={(val) => { this.fieldsLocations.employmentDate = val.nativeEvent.layout.y }}
                        value={this.state.formData.employmentDate}
                        onChange={this.employmentDate_onChange}
                        error={this.state.formErrors.employmentDate && this.state.showFormErrors ? this.state.formErrors.employmentDate : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        icon={<Image source={require('../../../../../../../assets/components/LabelDatePicker/calendar.png')} style={{ height: 16, width: 16 * 1.08 }} tintColor={'#aaa'} />}
                        modalIcon={<Image source={require('../../../../../../../assets/components/LabelDatePicker/close_button.png')} style={{ height: 28, width: 28 }} />}
                        labelStyle={SharedStyles.labelDatePicker.dark.labelStyle}
                        pickerContainerStyle={SharedStyles.labelDatePicker.dark.pickerContainerStyle}
                        pickerTextStyle={SharedStyles.labelDatePicker.dark.pickerTextStyle}
                    />


                    <LabelDropdown labelText={'REPAYMENT TYPE'}
                        onLayout={(val) => { this.fieldsLocations.repaymentType = val.nativeEvent.layout.y }}
                        value={this.state.formData.repaymentType}
                        options={repaymentTypeOptions}
                        onChange={this.repaymentType_onChange}
                        error={this.state.formErrors.repaymentType && this.state.showFormErrors ? this.state.formErrors.repaymentType : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelDropdown labelText={'MOST CONSISTENT SALARY DAY'}
                        onLayout={(val) => { this.fieldsLocations.consistentSalaryDay = val.nativeEvent.layout.y }}
                        value={this.state.formData.consistentSalaryDay}
                        options={salaryDayOptions}
                        onChange={this.consistentSalaryDay_onChange}
                        error={this.state.formErrors.consistentSalaryDay && this.state.showFormErrors ? this.state.formErrors.consistentSalaryDay : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />

                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ color: '#828282', fontSize: 10, fontFamily: 'Nunito', fontWeight: 'bold', lineHeight: 13 }}>WHICH DAY DID YOU RECEIVE THE LAST 3(THREE) MONTHS SALARY?</Text>
                    </View>


                    <LabelDropdown labelText={'LAST MONTH'}
                        onLayout={(val) => { this.fieldsLocations.lastSalaryOne = val.nativeEvent.layout.y }}
                        value={this.state.formData.lastSalaryOne}
                        options={salaryDayOptions}
                        onChange={this.lastSalaryOne_onChange}
                        error={this.state.formErrors.lastSalaryOne && this.state.showFormErrors ? this.state.formErrors.lastSalaryOne : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelDropdown labelText={'TWO MONTHS AGO'}
                        onLayout={(val) => { this.fieldsLocations.lastSalaryTwo = val.nativeEvent.layout.y }}
                        value={this.state.formData.lastSalaryTwo}
                        options={salaryDayOptions}
                        onChange={this.lastSalaryTwo_onChange}
                        error={this.state.formErrors.lastSalaryTwo && this.state.showFormErrors ? this.state.formErrors.lastSalaryTwo : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelDropdown labelText={'THREE MONTHS AGO'}
                        onLayout={(val) => { this.fieldsLocations.lastSalaryThree = val.nativeEvent.layout.y }}
                        value={this.state.formData.lastSalaryThree}
                        options={salaryDayOptions}
                        onChange={this.lastSalaryThree_onChange}
                        error={this.state.formErrors.lastSalaryThree && this.state.showFormErrors ? this.state.formErrors.lastSalaryThree : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
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








    /*workIdentificationType_onChange(value) {
        let formData = this.state.formData;
        formData.workIdentificationType = value;

        this.setState({ formData: formData });
        this.workIdentificationType_validate(value);
    }

    workIdentificationType_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.workIdentificationType = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }*/







    jobRole_onChange(value) {
        let formData = this.state.formData;
        formData.jobRole = value;

        this.setState({ formData: formData });
        this.jobRole_validate(value);
    }

    jobRole_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.jobRole = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    jobLocation_onChange(value) {
        let formData = this.state.formData;
        formData.jobLocation = value;

        this.setState({ formData: formData });
        this.jobLocation_validate(value);
    }

    jobLocation_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.jobLocation = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    workEmail_onChange(value) {
        let formData = this.state.formData;
        formData.workEmail = value;

        this.setState({ formData: formData });
        this.workEmail_validate(value);
    }

    workEmail_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.workEmail = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    workNumber_onChange(value) {
        let formData = this.state.formData;
        formData.workNumber = value;

        this.setState({ formData: formData });
        this.workNumber_validate(value);
    }

    workNumber_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.workNumber = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    officeAddressChange (value) {
        let formData = this.state.formData;
        formData.officeAddress = value;

        this.setState({ formData: formData });
        this.officeAddress_validate(value);
    }
    officeAddress_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.officeAddress = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }







    lga_onChange(value) {
        let formData = this.state.formData;
        formData.lga = value;

        this.setState({ formData: formData });
        this.lga_validate(value);
    }

    lga_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.lga = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    landmark_onChange(value) {
        let formData = this.state.formData;
        formData.landmark = value;

        this.setState({ formData: formData });
        this.landmark_validate(value);
    }

    landmark_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.landmark = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    industry_onChange(value) {
        let formData = this.state.formData;
        formData.industry = value;

        this.setState({ formData: formData });
        this.industry_validate(value);
    }

    industry_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.industry = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    employmentStatus_onChange(value) {
        let formData = this.state.formData;
        formData.employmentStatus = value;

        this.setState({ formData: formData });
        this.employmentStatus_validate(value);
    }

    employmentStatus_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.employmentStatus = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    employmentNumber_onChange(value) {
        let formData = this.state.formData;
        formData.employmentNumber = value;

        this.setState({ formData: formData });
        this.employmentNumber_validate(value);
    }

    employmentNumber_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.employmentNumber = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }


    employmentDate_onChange(value) {
        let formData = this.state.formData;
        formData.employmentDate = value;

        this.setState({ formData: formData });
        this.employmentDate_validate(value);
    }

    employmentDate_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.employmentDate = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    repaymentType_onChange(value) {
        let formData = this.state.formData;
        formData.repaymentType = value;

        this.setState({ formData: formData });
        this.repaymentType_validate(value);
    }

    repaymentType_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.repaymentType = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    consistentSalaryDay_onChange(value) {
        let formData = this.state.formData;
        formData.consistentSalaryDay = value;

        this.setState({ formData: formData });
        this.consistentSalaryDay_validate(value);
    }

    consistentSalaryDay_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.consistentSalaryDay = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    lastSalaryOne_onChange(value) {
        let formData = this.state.formData;
        formData.lastSalaryOne = value;

        this.setState({ formData: formData });
        this.lastSalaryOne_validate(value);
    }

    lastSalaryOne_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.lastSalaryOne = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    lastSalaryTwo_onChange(value) {
        let formData = this.state.formData;
        formData.lastSalaryTwo = value;

        this.setState({ formData: formData });
        this.lastSalaryTwo_validate(value);
    }

    lastSalaryTwo_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.lastSalaryTwo = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    lastSalaryThree_onChange(value) {
        let formData = this.state.formData;
        formData.lastSalaryThree = value;

        this.setState({ formData: formData });
        this.lastSalaryThree_validate(value);
    }

    lastSalaryThree_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.lastSalaryThree = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    submitHandler() {

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
            this.props.submitHandler(this.state.formData);
            return;
        }

        this.setState({ showFormErrors: true });
        this.scroll.props.scrollToPosition(0, anchorPosition - 10, true);
    }
}


const mapStateToProps = (state) => {
    return {
        //personalDetails: state.personalDetails,
        //products: state.products,
        //byNameOrganizations: state.organizationsByName,
        enums: state.enums.enums
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // sendPersonalInfo: (data) => dispatch(sendPersonalInfo(data)),
        // allOrganizations: () => dispatch(allOrganizations()),
        // getGender: () => dispatch(getGender()),
        // getTitle: () => dispatch(getTitle()),
        // getSecretQuestions: () => dispatch(getSecretQuestions()),
        // getState: () => dispatch(getState()),
        // organizationsByName: (text) => dispatch(organizationsByName(text)),
        getIndustryTypes: () => dispatch(getIndustryTypes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationForm);