import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import Button from '../../../../../../components/Button/index.js';

import LabelTextField from '../../../../../../components/LabelTextField/index.js';

import LabelDropdown from '../../../../../../components/LabelDropdown/index.js'

import LabelFilePicker from '../../../../../../components/LabelFilePicker/index.js';

import LabelDatePicker from '../../../../../../components/LabelDatePicker/index.js';

import SharedStyles from '../../../../../../styles/SharedStyles.js';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const zoneOptions = [
    { label: "Ikoyi", value: "Ikoyi" },
    { label: "Lekki", value: "Lekki" },
];



class VerificationForm extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                nyscStateCode: '',
                alternativeEmail: '',
                placeOfPrimaryAssigment: '',
                ppaAddress: '',
                workNumber: '',
                zone: { label: '', value: '' },
                residentialAddress: '',
                landmark: '',
            },
            formErrors: {
                nyscStateCode: '',
                alternativeEmail: '',
                placeOfPrimaryAssigment: '',
                ppaAddress: '',
                workNumber: '',
                zone: '',
                residentialAddress: '',
                landmark: '',
            }
        }




        this.nyscStateCode_onChange = this.nyscStateCode_onChange.bind(this);
        this.nyscStateCode_validate = this.nyscStateCode_validate.bind(this);

        this.alternativeEmail_onChange = this.alternativeEmail_onChange.bind(this);
        this.alternativeEmail_validate = this.alternativeEmail_validate.bind(this);

        this.placeOfPrimaryAssigment_onChange = this.placeOfPrimaryAssigment_onChange.bind(this);
        this.placeOfPrimaryAssigment_validate = this.placeOfPrimaryAssigment_validate.bind(this);

        this.ppaAddress_onChange = this.ppaAddress_onChange.bind(this);
        this.ppaAddress_validate = this.ppaAddress_validate.bind(this);

        this.workNumber_onChange = this.workNumber_onChange.bind(this);
        this.workNumber_validate = this.workNumber_validate.bind(this);

        this.zone_onChange = this.zone_onChange.bind(this);
        this.zone_validate = this.zone_validate.bind(this);

        this.residentialAddress_onChange = this.residentialAddress_onChange.bind(this);
        this.residentialAddress_validate = this.residentialAddress_validate.bind(this);

        this.landmark_onChange = this.landmark_onChange.bind(this);
        this.landmark_validate = this.landmark_validate.bind(this);

    


        this.submitHandler = this.submitHandler.bind(this);


        this.fieldsLocations = {};


        this.formValidators = [

            { fieldName: 'nyscStateCode', validator: this.nyscStateCode_validate },
            { fieldName: 'alternativeEmail', validator: this.alternativeEmail_validate },
            { fieldName: 'placeOfPrimaryAssigment', validator: this.placeOfPrimaryAssigment_validate },
            { fieldName: 'ppaAddress', validator: this.ppaAddress_validate },  
            { fieldName: 'workNumber', validator: this.workNumber_validate },
            { fieldName: 'zone', validator: this.zone_validate },
            { fieldName: 'residentialAddress', validator: this.residentialAddress_validate },
            { fieldName: 'landmark', validator: this.landmark_validate },
            
            
        ];
    }


    render() {

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


                    <LabelTextField labelText={'NYSC STATE CODE'}
                        onLayout={(val) => { this.fieldsLocations.nyscStateCode = val.nativeEvent.layout.y }}
                        value={this.state.formData.nyscStateCode}
                        onChangeText={this.nyscStateCode_onChange}
                        error={this.state.formErrors.nyscStateCode && this.state.showFormErrors ? this.state.formErrors.nyscStateCode : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />


                    <LabelTextField labelText={'ALTERNATIVE EMAIL'}
                        onLayout={(val) => { this.fieldsLocations.alternativeEmail = val.nativeEvent.layout.y }}
                        value={this.state.formData.alternativeEmail}
                        onChangeText={this.alternativeEmail_onChange}
                        error={this.state.formErrors.alternativeEmail && this.state.showFormErrors ? this.state.formErrors.alternativeEmail : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />


                    <LabelTextField labelText={'PLACE OF PRIMARY ASIGMENT'}
                        onLayout={(val) => { this.fieldsLocations.placeOfPrimaryAssigment = val.nativeEvent.layout.y }}
                        value={this.state.formData.placeOfPrimaryAssigment}
                        onChangeText={this.placeOfPrimaryAssigment_onChange}
                        error={this.state.formErrors.placeOfPrimaryAssigment && this.state.showFormErrors ? this.state.formErrors.placeOfPrimaryAssigment : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                    />



                    <LabelTextField labelText={'PPA ADDRESS'}
                        onLayout={(val) => { this.fieldsLocations.ppaAddress = val.nativeEvent.layout.y }}
                        value={this.state.formData.ppaAddress}
                        onChangeText={this.ppaAddress_onChange}
                        error={this.state.formErrors.ppaAddress && this.state.showFormErrors ? this.state.formErrors.ppaAddress : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelTextField.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.dark.inputStyle}
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



                    <LabelDropdown labelText={'ZONE'}
                        onLayout={(val) => { this.fieldsLocations.zone = val.nativeEvent.layout.y }}
                        value={this.state.formData.zone}
                        options={zoneOptions}
                        onChange={this.zone_onChange}
                        error={this.state.formErrors.zone && this.state.showFormErrors ? this.state.formErrors.zone : ''}

                        containerStyle={{ marginBottom: 40 }}
                        placeholderTextColor={SharedStyles.labelDropdown.dark.placeholderTextColor}
                        labelStyle={SharedStyles.labelDropdown.dark.labelStyle}
                        dropdownContainerStyle={SharedStyles.labelDropdown.dark.dropdownContainerStyle}
                        dropdownCaretStyle={SharedStyles.labelDropdown.dark.dropdownCaretStyle}
                        dropdownTextStyle={SharedStyles.labelDropdown.dark.dropdownTextStyle}
                    />


                    <LabelTextField labelText={'RESIDENTIAL ADDRESS'}
                        onLayout={(val) => { this.fieldsLocations.residentialAddress = val.nativeEvent.layout.y }}
                        value={this.state.formData.residentialAddress}
                        onChangeText={this.residentialAddress_onChange}
                        error={this.state.formErrors.residentialAddress && this.state.showFormErrors ? this.state.formErrors.residentialAddress : ''}

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








    nyscStateCode_onChange(value) {
        let formData = this.state.formData;
        formData.nyscStateCode = value;

        this.setState({ formData: formData });
        this.nyscStateCode_validate(value);
    }

    nyscStateCode_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.nyscStateCode = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    alternativeEmail_onChange(value) {
        let formData = this.state.formData;
        formData.alternativeEmail = value;

        this.setState({ formData: formData });
        this.alternativeEmail_validate(value);
    }

    alternativeEmail_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.alternativeEmail = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    placeOfPrimaryAssigment_onChange(value) {
        let formData = this.state.formData;
        formData.placeOfPrimaryAssigment = value;

        this.setState({ formData: formData });
        this.placeOfPrimaryAssigment_validate(value);
    }

    placeOfPrimaryAssigment_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.placeOfPrimaryAssigment = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    ppaAddress_onChange(value) {
        let formData = this.state.formData;
        formData.ppaAddress = value;

        this.setState({ formData: formData });
        this.ppaAddress_validate(value);
    }

    ppaAddress_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.ppaAddress = error;
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


    zone_onChange(value) {
        let formData = this.state.formData;
        formData.zone = value;

        this.setState({ formData: formData });
        this.zone_validate(value);
    }

    zone_validate(value) {
        let error = '';

        if (value.value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.zone = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }



    residentialAddress_onChange(value) {
        let formData = this.state.formData;
        formData.residentialAddress = value;

        this.setState({ formData: formData });
        this.residentialAddress_validate(value);
    }

    residentialAddress_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.residentialAddress = error;
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

export default VerificationForm;