import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { verifyBvn, isBvnVerified }  from '../../../../store/actions/VerifyBvnActions';

import { View, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Navbar from '../../../../components/Navbar/index.js';
import Button from '../../../../components/Button/index.js';
import LabelTextField from '../../../../components/LabelTextField/index.js';
//import LoadingOverlay from '../../../../components/LoadingOverlay/index.js'

import SharedStyles from '../../../../styles/SharedStyles.js';

class BvnValidate extends Component {

    constructor(props) {
        super(props);

        let formData = {
            bvn: '',
        };

        if (props.formData) {
            formData = props.formData;
        }

        this.state = {
            bvnCharLimit: 10,
            showFormErrors: false,

            formData: formData,
            isLoadingOverlay: false,
            isClicked: false,

            formErrors: {
                bvn: ''
            },
            isBvnVerified: false,
        }

        this.bvn_onChange = this.bvn_onChange.bind(this);
        this.bvn_validate = this.bvn_validate.bind(this);

        this.submitHandler = this.submitHandler.bind(this);
    }

// componentDidMount() {
//     console.log(this.props.bvnVerifyResponse);
//     console.log(this.props.bvnIsValid);
//     console.log(this.props.actionType);
// }

    render() {

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, backgroundColor: '#203659' }}>
                    {/*this.state.isLoadingOverlay == true && <LoadingOverlay />*/}

                    <Navbar title={'Request New Loan'}
                        leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                        leftButtonHandler={() => { this.props.navigation.goBack() }}
                        containerStyle={{}}
                    />

                    <View style={{ marginTop: 50, paddingLeft: 20, paddingRight: 20 }}>
                        <Text style={{ fontSize: 20, lineHeight: 28, color: '#FFFFFF', fontWeight: '100', marginBottom: 40 }}>
                            Enter your BVN
                    </Text>

                        <LabelTextField labelText={'ENTER YOUR BVN'}
                            value={this.state.formData.bvn}
                            onChangeText={this.bvn_onChange}
                            error={this.state.formErrors.bvn && this.state.showFormErrors ? this.state.formErrors.bvn : ''}

                            placeholderTextColor={SharedStyles.labelTextField.light.placeholderTextColor}
                            containerStyle={{ marginBottom: 40 }}
                            labelStyle={SharedStyles.labelTextField.light.labelStyle}
                            inputContainerStyle={SharedStyles.labelTextField.light.inputContainerStyle}
                            inputStyle={SharedStyles.labelTextField.light.inputStyle}
                            keyboardType={'number-pad'}
                            maxLength={11}
                        />
                    </View>



                    <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>
                        <Button
                            containerStyle={SharedStyles.button.containerStyle}
                            textStyle={SharedStyles.button.textStyle}
                            colors={['#097fbd', '#43ace2']}
                            text={this.state.isClicked == false ? 'Next' : '...Processing'}
                            onPress={this.submitHandler}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>

        );
    }

    bvn_onChange(value) {
        let formData = this.state.formData;
        formData.bvn = value;

        this.setState({ formData: formData });

        this.bvn_validate(value);
    }

    bvn_validate(value) {
        let error = '';

        let pattern = /^[0-9]{11}$/;

        if (!pattern.test(value)) {
            error = 'Please provide a valid BVN'
        }

        let formErrors = this.state.formErrors;
        formErrors.bvn = error;
        this.setState({ formErrors: formErrors });

        return !error ? true : false;
    }

    submitHandler() {
        this.setState({
            isClicked: !this.state.isClicked
        })
        let validForm = this.bvn_validate(this.state.formData.bvn);

        if (validForm) {
            console.log(this.state.formData);
            const isBvnVerified = verifyBvn(this.state.formData);
            
            isBvnVerified.then(res => {
                console.log(res);
                if(res.Status) {
                    this.props.navigation.navigate('CreateLoan', {
                        bvnData: res,
                        bvn: this.state.formData.bvn
                    })
                }else if(!res.Status) {
                    this.setState({
                        isClicked: false,
                    })
                    alert('BVN not verified, pls try again!')
                }
            })

            
            //return;
        }

        this.setState({ showFormErrors: true});
    }
}

// const mapStateToProps = (state, ownProps) => ({
//     bvnVerifyResponse: state.verifyBvn.verifyBvnResponse,
//     verifyStatus: state.verifyBvn.status,
//     bvnIsValid: state.verifyBvn.isValid,
//     actionType: state.verifyBvn.type,
// });


// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(actions, dispatch)
// })

//export default connect(mapStateToProps, mapDispatchToProps)(BvnValidate);
export default BvnValidate;