import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import Button from '../../../../../../components/Button/index.js';

import LabelTextField from '../../../../../../components/LabelTextField/index.js';

import LabelDropdown from '../../../../../../components/LabelDropdown/index.js'

import LabelFilePicker from '../../../../../../components/LabelFilePicker/index.js';

import LabelDatePicker from '../../../../../../components/LabelDatePicker/index.js';

import SharedStyles from '../../../../../../styles/SharedStyles.js';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const bankOptions = [
    { label: "Access", value: "Abuja" },
    { label: "GTB", value: "ewfrwgvte" },
    { label: "First Bank", value: "Lagos" },
    { label: "UBA", value: "Owerri" },
    { label: "Zenith", value: "asfdg43w" }

];


const accountTypeOptions = [
    { label: "Savings Account", value: "Lagos" },
    { label: "Current Account", value: "Owerri" }
];




class BankDetailsForm extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                bank: { label: '', value: '' },
                accountName: '',
                accountNumber: '',
                accountType: { label: '', value: '' },
                disbursementMode: '',
                processingBranch: ''
            },
            formErrors: {
                bank: '',
                accountName: '',
                accountNumber: '',
                accountType: '',
                disbursementMode: '',
                processingBranch: ''
            }
        }



        this.bank_onChange = this.bank_onChange.bind(this);
        this.bank_validate = this.bank_validate.bind(this);

        this.accountName_onChange = this.accountName_onChange.bind(this);
        this.accountName_validate = this.accountName_validate.bind(this);

        this.accountNumber_onChange = this.accountNumber_onChange.bind(this);
        this.accountNumber_validate = this.accountNumber_validate.bind(this);

        this.accountType_onChange = this.accountType_onChange.bind(this);
        this.accountType_validate = this.accountType_validate.bind(this);

        this.disbursementMode_onChange = this.disbursementMode_onChange.bind(this);
        this.disbursementMode_validate = this.disbursementMode_validate.bind(this);

        this.processingBranch_onChange = this.processingBranch_onChange.bind(this);
        this.processingBranch_validate = this.processingBranch_validate.bind(this);


        this.submitHandler = this.submitHandler.bind(this);


        this.fieldsLocations = {};


        this.formValidators = [
            { fieldName: 'bank', validator: this.bank_validate },
            { fieldName: 'accountName', validator: this.accountName_validate },
            { fieldName: 'accountNumber', validator: this.accountNumber_validate },
            { fieldName: 'accountType', validator: this.accountType_validate },
            { fieldName: 'disbursementMode', validator: this.disbursementMode_validate },
            { fieldName: 'processingBranch', validator: this.processingBranch_validate }

        ];
    }


    render() {

        return (
            <View style={{ flex: 1 }}>



                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    extraScrollHeight={100}
                    innerRef={ref => { this.scroll = ref }}
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                >


                    <View style={{ marginTop: 20, marginBottom: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#203659' }}>Bank Details</Text>
                    </View>


                    <LabelDropdown labelText={'BANK NAME'}
                        onLayout={(val) => { this.fieldsLocations.bank = val.nativeEvent.layout.y }}
                        value={this.state.formData.bank}
                        options={bankOptions}
                        onChange={this.bank_onChange}
                        error={this.state.formErrors.bank && this.state.showFormErrors ? this.state.formErrors.bank : ''}

                        containerStyle={{ marginBottom: 40, marginTop: 10 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />



                    <LabelTextField labelText={'ACCOUNT NAME'}
                        onLayout={(val) => { this.fieldsLocations.accountName = val.nativeEvent.layout.y }}
                        value={this.state.formData.accountName}
                        onChangeText={this.accountName_onChange}
                        error={this.state.formErrors.accountName && this.state.showFormErrors ? this.state.formErrors.accountName : ''}

                        containerStyle={{ marginBottom: 40, marginTop: 10 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />


                    <LabelTextField labelText={'ACCOUNT NUMBER'}
                        onLayout={(val) => { this.fieldsLocations.accountNumber = val.nativeEvent.layout.y }}
                        value={this.state.formData.accountNumber}
                        onChangeText={this.accountNumber_onChange}
                        error={this.state.formErrors.accountNumber && this.state.showFormErrors ? this.state.formErrors.accountNumber : ''}

                        containerStyle={{ marginBottom: 40, marginTop: 10 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'numeric'}
                    />


                    <LabelDropdown labelText={'ACCOUNT TYPE'}
                        onLayout={(val) => { this.fieldsLocations.accountType = val.nativeEvent.layout.y }}
                        value={this.state.formData.accountType}
                        options={accountTypeOptions}
                        onChange={this.accountType_onChange}
                        error={this.state.formErrors.accountType && this.state.showFormErrors ? this.state.formErrors.accountType : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />





                    <LabelTextField labelText={'DISBURSEMENT MODE'}
                        onLayout={(val) => { this.fieldsLocations.disbursementMode = val.nativeEvent.layout.y }}
                        value={this.state.formData.disbursementMode}
                        onChangeText={this.disbursementMode_onChange}
                        error={this.state.formErrors.disbursementMode && this.state.showFormErrors ? this.state.formErrors.disbursementMode : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <LabelTextField labelText={'PROCESSING BRANCH'}
                        onLayout={(val) => { this.fieldsLocations.processingBranch = val.nativeEvent.layout.y }}
                        value={this.state.formData.processingBranch}
                        onChangeText={this.processingBranch_onChange}
                        error={this.state.formErrors.processingBranch && this.state.showFormErrors ? this.state.formErrors.processingBranch : ''}

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



    bank_onChange(value) {
        let formData = this.state.formData;
        formData.bank = value;

        this.setState({ formData: formData });
        this.bank_validate(value);
    }

    bank_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.bank = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    accountName_onChange(value) {
        let formData = this.state.formData;
        formData.accountName = value;

        this.setState({ formData: formData });
        this.accountName_validate(value);
    }

    accountName_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.accountName = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    accountNumber_onChange(value) {
        let formData = this.state.formData;
        formData.accountNumber = value;

        this.setState({ formData: formData });
        this.accountNumber_validate(value);
    }

    accountNumber_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.accountNumber = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    accountType_onChange(value) {
        let formData = this.state.formData;
        formData.accountType = value;

        this.setState({ formData: formData });
        this.accountType_validate(value);
    }

    accountType_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.accountType = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }







    disbursementMode_onChange(value) {
        let formData = this.state.formData;
        formData.disbursementMode = value;

        this.setState({ formData: formData });
        this.disbursementMode_validate(value);
    }

    disbursementMode_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.disbursementMode = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    processingBranch_onChange(value) {
        let formData = this.state.formData;
        formData.processingBranch = value;

        this.setState({ formData: formData });
        this.processingBranch_validate(value);
    }

    processingBranch_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.processingBranch = error;
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

export default BankDetailsForm;