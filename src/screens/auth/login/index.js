import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';

//components
// import Features from './components/FeaturesCarousel/index.js';
import Button from '../../../components/Button/index.js';
import LabelTextField from '../../../components/LabelTextField/index.js';
import SharedStyles from '../../../styles/SharedStyles.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//redux actions
import { setLoadingOverlayShowing } from '../../../store/actions/LoadingOverlayActions.js';
import { setLoggedInState } from '../../../store/actions/AuthActions.js';


class LoginScreen extends Component {

    constructor() {
        super();

        this.state = {
            // showFeatures: true,

            showFormErrors: false,

            formData: {
                username: '',
                password: '',
                identification: null
            },

            formErrors: {
                username: '',
                password: '',
                identification: ''
            }
        }


        this.username_onChange = this.username_onChange.bind(this);
        this.username_validate = this.username_validate.bind(this);

        this.password_onChange = this.password_onChange.bind(this);
        this.password_validate = this.password_validate.bind(this);

        this.submitHandler = this.submitHandler.bind(this);

        this.fieldsLocations = {};
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 20, backgroundColor: '#203659', justifyContent: 'flex-end' }}>

                {/* <Features show={this.state.showFeatures} onDone={() => { this.setState({ showFeatures: false }) }} /> */}


                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>

                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', height: 90, }}>
                        <Image source={require('../../../../assets/logo.png')} style={{ width: 270, height: 270 * 0.24 }} />
                    </View>


                </View>





                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    extraScrollHeight={0}
                    style={{ height: 250, zIndex: 2, marginBottom: 30 }}
                    innerRef={ref => { this.scroll = ref }}
                >

                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ color: '#ffffff', fontSize: 30, letterSpacing: 1.5 }}>Welcome</Text>
                    </View>

                    <LabelTextField labelText={'USERNAME'}
                        onLayout={(val) => { this.fieldsLocations.username = val.nativeEvent.layout.y }}
                        value={this.state.formData.username}
                        onChangeText={this.username_onChange}
                        error={this.state.formErrors.username && this.state.showFormErrors ? this.state.formErrors.username : ''}

                        placeholderTextColor={SharedStyles.labelTextField.light.placeholderTextColor}
                        containerStyle={{ marginBottom: 40 }}
                        labelStyle={SharedStyles.labelTextField.light.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.light.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.light.inputStyle}
                        icon={<Image source={require('../../../../assets/screens/login/user.png')} style={{ height: 20, width: 20 * 1 }} />}
                    />

                    <LabelTextField labelText={'PASSWORD'}
                        onLayout={(val) => { this.fieldsLocations.password = val.nativeEvent.layout.y }}
                        value={this.state.formData.password}
                        onChangeText={this.password_onChange}
                        error={this.state.formErrors.password && this.state.showFormErrors ? this.state.formErrors.password : ''}

                        placeholderTextColor={SharedStyles.labelTextField.light.placeholderTextColor}
                        containerStyle={{ marginBottom: 70 }}
                        labelStyle={SharedStyles.labelTextField.light.labelStyle}
                        inputContainerStyle={SharedStyles.labelTextField.light.inputContainerStyle}
                        inputStyle={SharedStyles.labelTextField.light.inputStyle}
                        icon={<Image source={require('../../../../assets/screens/login/lock.png')} style={{ height: 20, width: 20 * 0.75 }} />}
                        secureTextEntry={true}
                    />



                    <View style={{ marginBottom: 30}}>
                        <Button
                            containerStyle={SharedStyles.button.containerStyle}
                            textStyle={SharedStyles.button.textStyle}
                            colors={['#097fbd', '#43ace2']}
                            text={'Login'}
                            onPress={this.submitHandler}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center',  alignItems: 'center' }}>
                        <Text style={{ color: '#ffffff', fontSize: 14 }}>Want to get started? </Text>

                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('Signup') }}>

                            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <Text style={{ color: '#95daff', fontSize: 14 }}>Request for Loan</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>

                </KeyboardAwareScrollView>





                <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center' }}>
                    <Text style={{ color: '#949dad', fontSize: 10 }}>Powered by Credit Direct</Text>
                    <Text style={{ color: '#949dad', fontSize: 10 }}>v 1.0.1</Text>
                </View>



                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 0 }}>
                    <Image source={require('../../../../assets/screens/login/login_top.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width / 2.46 }} />
                </View>


                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 0 }}>
                    <Image source={require('../../../../assets/screens/login/login_bottom.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width / 1.54 }} />
                </View>


            </View>
        );
    }



    username_onChange(value) {
        let formData = this.state.formData;
        formData.username = value;

        this.setState({ formData: formData });
        this.username_validate(value);
    }

    username_validate(value) {
        let error = '';

        if (value == '') {
            error = 'This value is required';
        }

        let formErrors = this.state.formErrors;
        formErrors.username = error;
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


    submitHandler() {

        let validForm = true;

        let usernameValid = this.username_validate(this.state.formData.username);
        let passwordValid = this.password_validate(this.state.formData.password);

        validForm = usernameValid && passwordValid;

        if (!validForm) {
            this.setState({ showFormErrors: true });
            return;
        }

        // this.props.setLoadingOverlayShowing(true);

        // setTimeout(() => {
        //     this.props.setLoadingOverlayShowing(false);
        //     this.props.setLoggedInState(true);
        // }, 4000)

        this.props.setLoggedInState(true);
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingOverlayShowing: (value) => dispatch(setLoadingOverlayShowing(value)),
        setLoggedInState: (value) => dispatch(setLoggedInState(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
