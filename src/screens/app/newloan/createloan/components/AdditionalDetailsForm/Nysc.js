import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import Button from '../../../../../../components/Button/index.js';
import LabelTextField from '../../../../../../components/LabelTextField/index.js';
import LabelDropdown from '../../../../../../components/LabelDropdown/index.js'

import LabelDatePicker from '../../../../../../components/LabelDatePicker/index.js';

import SharedStyles from '../../../../../../styles/SharedStyles.js';

import LabelPassportPicker from '../../../../../../components/LabelPassportPicker/index.js';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const maritalStatusOptions = [
    { label: "Single", value: "Abuja" },
    { label: "Married", value: "Lagos" },
    { label: "Divorced", value: "gerqgregre" },
    { label: "Widowed", value: "ewfwethge" },
    { label: "Separated", value: "dsfdsgyhyhytr4" }
];



const nextOfKinRelationshipOptions = [
    { label: "Father", value: "asdsa" },
    { label: "Mother", value: "t52y5" },
    { label: "Brother", value: "ewtewtr" },
    { label: "Sister", value: "frewffew" },
    { label: "Son", value: "gy5h" },
    { label: "Daughter", value: "t3457" }
];



class AdditionalDetailsForm extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                maritalStatus: { label: '', value: '' },
                numberOfDependants: '',
                nextOfKin: '',
                nextOfKinRelationship: { label: '', value: '' },
                nextOfKinNumber: '',
                nextOfKinAddress: '',
            },
            formErrors: {
                maritalStatus: '',
                numberOfDependants: '',
                nextOfKin: '',
                nextOfKinRelationship: '',
                nextOfKinNumber: '',
                nextOfKinAddress: '',
            }
        }



        this.maritalStatus_onChange = this.maritalStatus_onChange.bind(this);
        this.maritalStatus_validate = this.maritalStatus_validate.bind(this);

        this.numberOfDependants_onChange = this.numberOfDependants_onChange.bind(this);
        this.numberOfDependants_validate = this.numberOfDependants_validate.bind(this);

        this.nextOfKin_onChange = this.nextOfKin_onChange.bind(this);
        this.nextOfKin_validate = this.nextOfKin_validate.bind(this);

        this.nextOfKinRelationship_onChange = this.nextOfKinRelationship_onChange.bind(this);
        this.nextOfKinRelationship_validate = this.nextOfKinRelationship_validate.bind(this);

        this.nextOfKinNumber_onChange = this.nextOfKinNumber_onChange.bind(this);
        this.nextOfKinNumber_validate = this.nextOfKinNumber_validate.bind(this);

        this.nextOfKinAddress_onChange = this.nextOfKinAddress_onChange.bind(this);
        this.nextOfKinAddress_validate = this.nextOfKinAddress_validate.bind(this);


        this.submitHandler = this.submitHandler.bind(this);


        this.fieldsLocations = {};


        this.formValidators = [
            { fieldName: 'maritalStatus', validator: this.maritalStatus_validate },
            { fieldName: 'numberOfDependants', validator: this.numberOfDependants_validate },
            { fieldName: 'nextOfKin', validator: this.nextOfKin_validate },
            { fieldName: 'nextOfKinRelationship', validator: this.nextOfKinRelationship_validate },
            { fieldName: 'nextOfKinNumber', validator: this.nextOfKinNumber_validate },
            { fieldName: 'nextOfKinAddress', validator: this.nextOfKinAddress_validate }
        ];
    }


    render() {

        return (
            <View style={{ flex: 1 }}>


                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    extraScrollHeight={100}
                    // enableAutomaticScroll={false}
                    innerRef={ref => { this.scroll = ref }}
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                >


                    <View style={{ marginTop: 20, marginBottom: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#203659' }}>Additional Details</Text>
                    </View>



                    <LabelDropdown labelText={'MARITAL STATUS'}
                        onLayout={(val) => { this.fieldsLocations.maritalStatus = val.nativeEvent.layout.y }}
                        value={this.state.formData.maritalStatus}
                        options={maritalStatusOptions}
                        onChange={this.maritalStatus_onChange}
                        error={this.state.formErrors.maritalStatus && this.state.showFormErrors ? this.state.formErrors.maritalStatus : ''}

                        containerStyle={{ marginBottom: 40, marginTop: 10 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />



                    <LabelTextField labelText={'NUMBER OF DEPENDENTS'}
                        onLayout={(val) => { this.fieldsLocations.numberOfDependants = val.nativeEvent.layout.y }}
                        value={this.state.formData.numberOfDependants}
                        onChangeText={this.numberOfDependants_onChange}
                        error={this.state.formErrors.numberOfDependants && this.state.showFormErrors ? this.state.formErrors.numberOfDependants : ''}

                        containerStyle={{ marginBottom: 40, marginTop: 10 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'numeric'}
                    />



                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ color: '#0371AC', fontSize: 16, fontFamily: 'Nunito', fontWeight: 'bold' }}>Next Of Kin</Text>
                    </View>


                    <LabelTextField labelText={'NEXT OF KIN'}
                        onLayout={(val) => { this.fieldsLocations.nextOfKin = val.nativeEvent.layout.y }}
                        value={this.state.formData.nextOfKin}
                        onChangeText={this.nextOfKin_onChange}
                        error={this.state.formErrors.nextOfKin && this.state.showFormErrors ? this.state.formErrors.nextOfKin : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />


                    <LabelDropdown labelText={'RELATIONSHIP WITH NEXT OF KIN'}
                        onLayout={(val) => { this.fieldsLocations.nextOfKinRelationship = val.nativeEvent.layout.y }}
                        value={this.state.formData.nextOfKinRelationship}
                        options={nextOfKinRelationshipOptions}
                        onChange={this.nextOfKinRelationship_onChange}
                        error={this.state.formErrors.nextOfKinRelationship && this.state.showFormErrors ? this.state.formErrors.nextOfKinRelationship : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />



                    <LabelTextField labelText={'NEXT OF KIN PHONE NUMBER'}
                        onLayout={(val) => { this.fieldsLocations.nextOfKinNumber = val.nativeEvent.layout.y }}
                        value={this.state.formData.nextOfKinNumber}
                        onChangeText={this.nextOfKinNumber_onChange}
                        error={this.state.formErrors.nextOfKinNumber && this.state.showFormErrors ? this.state.formErrors.nextOfKinNumber : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                        keyboardType={'phone-pad'}
                    />


                    <LabelTextField labelText={'NEXT OF KIN ADDRESS'}
                        onLayout={(val) => { this.fieldsLocations.nextOfKinAddress = val.nativeEvent.layout.y }}
                        value={this.state.formData.nextOfKinAddress}
                        onChangeText={this.nextOfKinAddress_onChange}
                        error={this.state.formErrors.nextOfKinAddress && this.state.showFormErrors ? this.state.formErrors.nextOfKinAddress : ''}

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






    maritalStatus_onChange(value) {
        let formData = this.state.formData;
        formData.maritalStatus = value;

        this.setState({ formData: formData });
        this.maritalStatus_validate(value);
    }

    maritalStatus_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.maritalStatus = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    numberOfDependants_onChange(value) {
        let formData = this.state.formData;
        formData.numberOfDependants = value;

        this.setState({ formData: formData });
        this.numberOfDependants_validate(value);
    }

    numberOfDependants_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.numberOfDependants = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    nextOfKin_onChange(value) {
        let formData = this.state.formData;
        formData.nextOfKin = value;

        this.setState({ formData: formData });
        this.nextOfKin_validate(value);
    }

    nextOfKin_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.nextOfKin = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    nextOfKinRelationship_onChange(value) {
        let formData = this.state.formData;
        formData.nextOfKinRelationship = value;

        this.setState({ formData: formData });
        this.nextOfKinRelationship_validate(value);
    }

    nextOfKinRelationship_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.nextOfKinRelationship = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    nextOfKinNumber_onChange(value) {
        let formData = this.state.formData;
        formData.nextOfKinNumber = value;

        this.setState({ formData: formData });
        this.nextOfKinNumber_validate(value);
    }

    nextOfKinNumber_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.nextOfKinNumber = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    nextOfKinAddress_onChange(value) {
        let formData = this.state.formData;
        formData.nextOfKinAddress = value;

        this.setState({ formData: formData });
        this.nextOfKinAddress_validate(value);
    }

    nextOfKinAddress_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.nextOfKinAddress = error;
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

export default AdditionalDetailsForm;