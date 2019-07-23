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
                nyscId: null,
                nationalId: null,
                bankStatement: null,
                postingLetter: null,
                proofOfSelf: null,
                proofOfApplication: null,
                bizStarterForm: null
            },
            formErrors: {
                nyscId: '',
                nationalId: '',
                bankStatement: '',
                postingLetter: '',
                proofOfSelf: '',
                proofOfApplication: '',
                bizStarterForm: ''
            }
        }



        this.nyscId_onChange = this.nyscId_onChange.bind(this);
        this.nyscId_validate = this.nyscId_validate.bind(this);

        this.nationalId_onChange = this.nationalId_onChange.bind(this);
        this.nationalId_validate = this.nationalId_validate.bind(this);

        this.bankStatement_onChange = this.bankStatement_onChange.bind(this);
        this.bankStatement_validate = this.bankStatement_validate.bind(this);

        this.postingLetter_onChange = this.postingLetter_onChange.bind(this);
        this.postingLetter_validate = this.postingLetter_validate.bind(this);

        this.proofOfSelf_onChange = this.proofOfSelf_onChange.bind(this);
        this.proofOfSelf_validate = this.proofOfSelf_validate.bind(this);

        this.proofOfApplication_onChange = this.proofOfApplication_onChange.bind(this);
        this.proofOfApplication_validate = this.proofOfApplication_validate.bind(this);

        this.bizStarterForm_onChange = this.bizStarterForm_onChange.bind(this);
        this.bizStarterForm_validate = this.bizStarterForm_validate.bind(this);

        this.submitHandler = this.submitHandler.bind(this);

        this.fieldsLocations = {};


        this.formValidators = [
            { fieldName: 'nyscId', validator: this.nyscId_validate },
            { fieldName: 'nationalId', validator: this.nationalId_validate },
            { fieldName: 'bankStatement', validator: this.bankStatement_validate },
            { fieldName: 'postingLetter', validator: this.postingLetter_validate },
            { fieldName: 'proofOfSelf', validator: this.proofOfSelf_validate },
            { fieldName: 'proofOfApplication', validator: this.proofOfApplication_validate },
            { fieldName: 'bizStarterForm', validator: this.bizStarterForm_validate },

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
                        onLayout={(val) => { this.fieldsLocations.nyscId = val.nativeEvent.layout.y }}
                        value={this.state.formData.nyscId}
                        onChange={this.nyscId_onChange}
                        error={this.state.formErrors.nyscId && this.state.showFormErrors ? this.state.formErrors.nyscId : ''}

                        buttonText={'Upload NYSC ID'}
                        containerStyle={{ marginTop: 20, marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'UPLOAD NATIONAL ID'}
                        onLayout={(val) => { this.fieldsLocations.nationalId = val.nativeEvent.layout.y }}
                        value={this.state.formData.nationalId}
                        onChange={this.nationalId_onChange}
                        error={this.state.formErrors.nationalId && this.state.showFormErrors ? this.state.formErrors.nationalId : ''}

                        buttonText={'Upload National ID'}
                        containerStyle={{ marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'BANK STATEMENT'}
                        onLayout={(val) => { this.fieldsLocations.bankStatement = val.nativeEvent.layout.y }}
                        value={this.state.formData.bankStatement}
                        onChange={this.bankStatement_onChange}
                        error={this.state.formErrors.bankStatement && this.state.showFormErrors ? this.state.formErrors.bankStatement : ''}

                        buttonText={'Upload ATM Card Photos'}
                        containerStyle={{ marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'PROOF OF EMPLOYMENT'}
                        onLayout={(val) => { this.fieldsLocations.postingLetter = val.nativeEvent.layout.y }}
                        value={this.state.formData.postingLetter}
                        onChange={this.postingLetter_onChange}
                        error={this.state.formErrors.postingLetter && this.state.showFormErrors ? this.state.formErrors.postingLetter : ''}

                        buttonText={'Upload Posting Letter'}
                        containerStyle={{ marginTop: 20, marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'PROOF OF SELF'}
                        onLayout={(val) => { this.fieldsLocations.proofOfSelf = val.nativeEvent.layout.y }}
                        value={this.state.formData.proofOfSelf}
                        onChange={this.proofOfSelf_onChange}
                        error={this.state.formErrors.proofOfSelf && this.state.showFormErrors ? this.state.formErrors.proofOfSelf : ''}

                        buttonText={'Upload Regalia Photo'}
                        containerStyle={{ marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'PROOF OF APPLICATION'}
                        onLayout={(val) => { this.fieldsLocations.proofOfApplication = val.nativeEvent.layout.y }}
                        value={this.state.formData.proofOfApplication}
                        onChange={this.proofOfApplication_onChange}
                        error={this.state.formErrors.proofOfApplication && this.state.showFormErrors ? this.state.formErrors.proofOfApplication : ''}

                        buttonText={'Upload Letter of Undertaking'}
                        containerStyle={{ marginBottom: 40 }}
                        //icon={<Image source={require('../../../../../../../assets/screens/newloan/picture_icon.png')} style={{ width: 18 * 1.2, height: 18 }} />}
                        labelStyle={{ fontSize: 11, fontWeight: '800', color: '#9c9c9ccc' }}
                        buttonContainerStyle={{ marginTop: 7 }}
                        buttonStyle={{ borderRadius: 5, height: 45, backgroundColor: '#56BAEE' }}
                        buttonTextColor={'#FFFFFF'}
                    />

                    <LabelFilePicker labelText={'BIZ STARTER APPLICATION FORM'}
                        onLayout={(val) => { this.fieldsLocations.bizStarterForm = val.nativeEvent.layout.y }}
                        value={this.state.formData.bizStarterForm}
                        onChange={this.bizStarterForm_onChange}
                        error={this.state.formErrors.bizStarterForm && this.state.showFormErrors ? this.state.formErrors.bizStarterForm : ''}

                        buttonText={'Upload Application Form'}
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


    nyscId_onChange(value) {
        let formData = this.state.formData;
        formData.nyscId = value;

        this.setState({ formData: formData });
        this.nyscId_validate(value);
    }


    nyscId_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.nyscId = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }







    nationalId_onChange(value) {
        let formData = this.state.formData;
        formData.nationalId = value;

        this.setState({ formData: formData });
        this.nationalId_validate(value);
    }


    nationalId_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.nationalId = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    bankStatement_onChange(value) {
        let formData = this.state.formData;
        formData.bankStatement = value;

        this.setState({ formData: formData });
        this.bankStatement_validate(value);
    }


    bankStatement_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.bankStatement = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }




    postingLetter_onChange(value) {
        let formData = this.state.formData;
        formData.postingLetter = value;

        this.setState({ formData: formData });
        this.postingLetter_validate(value);
    }


    postingLetter_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.postingLetter = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    proofOfSelf_onChange(value) {
        let formData = this.state.formData;
        formData.proofOfSelf = value;

        this.setState({ formData: formData });
        this.proofOfSelf_validate(value);
    }


    proofOfSelf_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.proofOfSelf = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }






    proofOfApplication_onChange(value) {
        let formData = this.state.formData;
        formData.proofOfApplication = value;

        this.setState({ formData: formData });
        this.proofOfApplication_validate(value);
    }


    proofOfApplication_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.proofOfApplication = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }





    bizStarterForm_onChange(value) {
        let formData = this.state.formData;
        formData.bizStarterForm = value;

        this.setState({ formData: formData });
        this.bizStarterForm_validate(value);
    }


    bizStarterForm_validate(value) {
        let error = '';

        if (value == null) {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.bizStarterForm = error;
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