import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import Button from '../../../../../../components/Button/index.js';

import LabelTextField from '../../../../../../components/LabelTextField/index.js';

import LabelDropdown from '../../../../../../components/LabelDropdown/index.js'

import LabelFilePicker from '../../../../../../components/LabelFilePicker/index.js';

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


const educationLevelOptions = [
    { label: "WAEC", value: "reytegds" },
    { label: "BSc", value: "gewgw" },
    { label: "BEng", value: "retregtew" }
];


const residentStatusOptions = [
    { label: "Naturalized Citizen", value: "Lagos" },
    { label: "Lawful Permanent Resident", value: "dsfdffdfdf" },
    { label: "Conditional Permanent Resident", value: "sadssssa" }
];

const residentDurationOptions = [
    { label: "above 6 month", value: "Lagos" },
    { label: "above 12 month", value: "sadfs" },
    { label: "above 18 month", value: "reqwerew" },
    { label: "above 24 month", value: "reqhte" }
]

const identificationTypeOptions = [
    { label: "Driver License", value: "Lagos" },
    { label: "International Passport", value: "45y2i7lou" },
    { label: "Work ID Card", value: "fqwfsdhyr" }
]

const nextOfKinRelationshipOptions = [
    { label: "Father", value: "asdsa" },
    { label: "Mother", value: "t52y5" },
    { label: "Brother", value: "ewtewtr" },
    { label: "Sister", value: "frewffew" },
    { label: "Son", value: "gy5h" },
    { label: "Daughter", value: "t3457" }
];

const salaryDayOptions = [];
for (let i = 1; i < 31; i++) {
    salaryDayOptions.push({
        label: i,
        value: i
    });
};


class AdditionalDetailsForm extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                maritalStatus: { label: '', value: '' },
                numberOfDependants: '',
                educationLevel: { label: '', value: '' },
                residentStatus: { label: '', value: '' },
                residentDuration: { label: '', value: '' },
                identificationType: { label: '', value: '' },
                identificationExpiry: null,
                identificationNumber: '',
                nextOfKin: '',
                nextOfKinRelationship: { label: '', value: '' },
                nextOfKinNumber: '',
                nextOfKinAddress: '',
            },
            formErrors: {
                maritalStatus: '',
                numberOfDependants: '',
                educationLevel: '',
                residentStatus: '',
                residentDuration: '',
                identificationType: '',
                identificationExpiry: '',
                identificationNumber: '',
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

        this.educationLevel_onChange = this.educationLevel_onChange.bind(this);
        this.educationLevel_validate = this.educationLevel_validate.bind(this);

        this.residentStatus_onChange = this.residentStatus_onChange.bind(this);
        this.residentStatus_validate = this.residentStatus_validate.bind(this);

        this.residentDuration_onChange = this.residentDuration_onChange.bind(this);
        this.residentDuration_validate = this.residentDuration_validate.bind(this);

        this.identificationType_onChange = this.identificationType_onChange.bind(this);
        this.identificationType_validate = this.identificationType_validate.bind(this);

        this.identificationExpiry_onChange = this.identificationExpiry_onChange.bind(this);
        this.identificationExpiry_validate = this.identificationExpiry_validate.bind(this);

        this.identificationNumber_onChange = this.identificationNumber_onChange.bind(this);
        this.identificationNumber_validate = this.identificationNumber_validate.bind(this);

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
            { fieldName: 'educationLevel', validator: this.educationLevel_validate },
            { fieldName: 'residentStatus', validator: this.residentStatus_validate },
            { fieldName: 'residentDuration', validator: this.residentDuration_validate },
            { fieldName: 'identificationType', validator: this.identificationType_validate },
            { fieldName: 'identificationExpiry', validator: this.identificationExpiry_validate },
            { fieldName: 'identificationNumber', validator: this.identificationNumber_validate },
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


                    <LabelDropdown labelText={'LEVEL OF EDUCATION'}
                        onLayout={(val) => { this.fieldsLocations.educationLevel = val.nativeEvent.layout.y }}
                        value={this.state.formData.educationLevel}
                        options={educationLevelOptions}
                        onChange={this.educationLevel_onChange}
                        error={this.state.formErrors.educationLevel && this.state.showFormErrors ? this.state.formErrors.educationLevel : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />

                    <LabelDropdown labelText={'RESIDENT STATUS'}
                        onLayout={(val) => { this.fieldsLocations.residentStatus = val.nativeEvent.layout.y }}
                        value={this.state.formData.residentStatus}
                        options={residentStatusOptions}
                        onChange={this.residentStatus_onChange}
                        error={this.state.formErrors.residentStatus && this.state.showFormErrors ? this.state.formErrors.residentStatus : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelDropdown labelText={'MONTHS AT CURRENT RESIDENCE'}
                        onLayout={(val) => { this.fieldsLocations.residentDuration = val.nativeEvent.layout.y }}
                        value={this.state.formData.residentDuration}
                        options={residentDurationOptions}
                        onChange={this.residentDuration_onChange}
                        error={this.state.formErrors.residentDuration && this.state.showFormErrors ? this.state.formErrors.residentDuration : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelDropdown labelText={'IDENTIFICATION TYPE'}
                        onLayout={(val) => { this.fieldsLocations.identificationType = val.nativeEvent.layout.y }}
                        value={this.state.formData.identificationType}
                        options={identificationTypeOptions}
                        onChange={this.identificationType_onChange}
                        error={this.state.formErrors.identificationType && this.state.showFormErrors ? this.state.formErrors.identificationType : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />




                    <LabelDatePicker labelText={'IDENTIFICATION EXPIRY DATE'}
                        onLayout={(val) => { this.fieldsLocations.identificationExpiry = val.nativeEvent.layout.y }}
                        value={this.state.formData.identificationExpiry}
                        onChange={this.identificationExpiry_onChange}
                        error={this.state.formErrors.identificationExpiry && this.state.showFormErrors ? this.state.formErrors.identificationExpiry : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        icon={<Image source={require('../../../../../../../assets/components/LabelDatePicker/calendar.png')} style={{ height: 16, width: 16 * 1.08 }} tintColor={'#077DBB'} />}
                        modalIcon={<Image source={require('../../../../../../../assets/components/LabelDatePicker/close_button.png')} style={{ height: 28, width: 28 }} />}
                        labelStyle={SharedStyles.labelDatePicker.dark.labelStyle}
                        pickerContainerStyle={SharedStyles.labelDatePicker.dark.pickerContainerStyle}
                        pickerTextStyle={SharedStyles.labelDatePicker.dark.pickerTextStyle}
                    />


                    <LabelTextField labelText={'IDENTIFICATION NUMBER'}
                        onLayout={(val) => { this.fieldsLocations.identificationNumber = val.nativeEvent.layout.y }}
                        value={this.state.formData.identificationNumber}
                        onChangeText={this.identificationNumber_onChange}
                        error={this.state.formErrors.identificationNumber && this.state.showFormErrors ? this.state.formErrors.identificationNumber : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
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




    educationLevel_onChange(value) {
        let formData = this.state.formData;
        formData.educationLevel = value;

        this.setState({ formData: formData });
        this.educationLevel_validate(value);
    }

    educationLevel_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.educationLevel = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    residentStatus_onChange(value) {
        let formData = this.state.formData;
        formData.residentStatus = value;

        this.setState({ formData: formData });
        this.residentStatus_validate(value);
    }


    residentStatus_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.residentStatus = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    residentDuration_onChange(value) {
        let formData = this.state.formData;
        formData.residentDuration = value;

        this.setState({ formData: formData });
        this.residentDuration_validate(value);
    }

    residentDuration_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.residentDuration = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    identificationType_onChange(value) {
        let formData = this.state.formData;
        formData.identificationType = value;

        this.setState({ formData: formData });
        this.identificationType_validate(value);
    }

    identificationType_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.identificationType = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }






    identificationExpiry_onChange(value) {
        let formData = this.state.formData;
        formData.identificationExpiry = value;

        this.setState({ formData: formData });
        this.identificationExpiry_validate(value);
    }

    identificationExpiry_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.identificationExpiry = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }






    identificationNumber_onChange(value) {
        let formData = this.state.formData;
        formData.identificationNumber = value;

        this.setState({ formData: formData });
        this.identificationNumber_validate(value);
    }

    identificationNumber_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.identificationNumber = error;
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