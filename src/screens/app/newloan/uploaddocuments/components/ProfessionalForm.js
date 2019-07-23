import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../../../../../components/Button/index.js';
import LabelFilePicker from '../../../../../components/LabelFilePicker/index.js';

import SharedStyles from '../../../../../styles/SharedStyles.js';





class ProfessionalForm extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                workProofLetterFile: null,
                identificationFile: null,
                bankStatementFile: null,
            },
            formErrors: {
                workProofLetterFile: '',
                identificationFile: '',
                bankStatementFile: ''
            }
        }



        this.workProofLetterFile_onChange = this.workProofLetterFile_onChange.bind(this);
        this.workProofLetterFile_validate = this.workProofLetterFile_validate.bind(this);

        this.identificationFile_onChange = this.identificationFile_onChange.bind(this);
        this.identificationFile_validate = this.identificationFile_validate.bind(this);

        this.bankStatementFile_onChange = this.bankStatementFile_onChange.bind(this);
        this.bankStatementFile_validate = this.bankStatementFile_validate.bind(this);


        this.submitHandler = this.submitHandler.bind(this);

        this.fieldsLocations = {};


        this.formValidators = [
            { fieldName: 'workProofLetterFile', validator: this.workProofLetterFile_validate },
            { fieldName: 'identificationFile', validator: this.identificationFile_validate },
            { fieldName: 'bankStatementFile', validator: this.bankStatementFile_validate }
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

                    <LabelFilePicker labelText={'UPLOAD WORK PROOF LETTER'}
                        onLayout={(val) => { this.fieldsLocations.workProofLetterFile = val.nativeEvent.layout.y }}
                        value={this.state.formData.workProofLetterFile}
                        onChange={this.workProofLetterFile_onChange}
                        error={this.state.formErrors.workProofLetterFile && this.state.showFormErrors ? this.state.formErrors.workProofLetterFile : ''}

                        buttonText={'Upload Letter'}
                        containerStyle={{ marginTop: 20, marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'UPLOAD IDENTIFICATION'}
                        onLayout={(val) => { this.fieldsLocations.identificationFile = val.nativeEvent.layout.y }}
                        value={this.state.formData.identificationFile}
                        onChange={this.identificationFile_onChange}
                        error={this.state.formErrors.identificationFile && this.state.showFormErrors ? this.state.formErrors.identificationFile : ''}

                        buttonText={'Upload ID'}
                        containerStyle={{ marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'BANK STATEMENT'}
                        onLayout={(val) => { this.fieldsLocations.bankStatementFile = val.nativeEvent.layout.y }}
                        value={this.state.formData.bankStatementFile}
                        onChange={this.bankStatementFile_onChange}
                        error={this.state.formErrors.bankStatementFile && this.state.showFormErrors ? this.state.formErrors.bankStatementFile : ''}

                        buttonText={'Upload Statement'}
                        containerStyle={{ marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                </KeyboardAwareScrollView>

                <View style={{ padding: 20 }}>
                    <Button
                        containerStyle={SharedStyles.button.containerStyle}
                        textStyle={SharedStyles.button.textStyle}
                        colors={['#097fbd', '#43ace2']}
                        text={'Next'}
                        onPress={this.submitHandler}
                    />
                </View>

            </View>
        );
    }


    workProofLetterFile_onChange(value) {
        let formData = this.state.formData;
        formData.workProofLetterFile = value;

        this.setState({ formData: formData });
        this.workProofLetterFile_validate(value);
    }


    workProofLetterFile_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.workProofLetterFile = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    identificationFile_onChange(value) {
        let formData = this.state.formData;
        formData.identificationFile = value;

        this.setState({ formData: formData });
        this.identificationFile_validate(value);
    }


    identificationFile_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.identificationFile = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    bankStatementFile_onChange(value) {
        let formData = this.state.formData;
        formData.bankStatementFile = value;

        this.setState({ formData: formData });
        this.bankStatementFile_validate(value);
    }


    bankStatementFile_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.bankStatementFile = error;
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


export default ProfessionalForm;