import React, { Component } from 'react';

import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';

import Button from '../../../../components/Button/index.js';

import SharedStyles from '../../../../styles/SharedStyles.js';

import Navbar from '../../../../components/Navbar/index.js';

import LabelTextField from '../../../../components/LabelTextField/index.js';
class MakeComplaintScreen extends Component {

    render() {

        return (

            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                <Navbar title={'Profile'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.navigation.goBack() }}
                    containerStyle={{}}
                />

                <View style={{ backgroundColor: '', paddingBottom: 20 }}>

                    <View style={{ position: 'absolute', left: 0, top: 0, right: 0, height: 90, backgroundColor: '#203659', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}></View>

                    <View style={{ backgroundColor: '#ffffff', marginLeft: 40, marginRight: 40, borderRadius: 10, }}>

                        <View style={{ paddingTop: 30, paddingBottom: 30, justifyContent: 'center', alignItems: 'center' }}>

                            <TouchableWithoutFeedback>
                                <View style={{ backgroundColor: '#077dbb80', borderRadius: 110, width: 110, height: 110, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../../../assets/common/camera.png')} style={{ width: 25, height: 25 }} tintColor='#ffffff' />
                                    <Text style={{ fontSize: 12, color: '#ffffff', marginTop: 5 }}>Change Photo</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>


                        <LabelTextField labelText={'EMAIL'}
                            value={'Ednaaa@gmail.com'}
                            onChangeText={this.loanAmount_onChange}
                            containerStyle={{ padding: 30, paddingTop: 0 }}
                            labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                            inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                            inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                            keyboardType={'email'}
                        />

                        <LabelTextField labelText={'PASSWORD'}
                            value={'Ednaaa@gmail.com'}
                            onChangeText={this.loanAmount_onChange}
                            containerStyle={{ padding: 30, paddingTop: 0 }}
                            labelStyle={SharedStyles.labelTextField.dark.labelStyle}
                            inputContainerStyle={SharedStyles.labelTextField.dark.inputContainerStyle}
                            inputStyle={SharedStyles.labelTextField.dark.inputStyle}
                            keyboardType={'email'}
                        />

                    </View>

                </View>


                <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>
                    <Button
                        containerStyle={SharedStyles.button.containerStyle}
                        textStyle={SharedStyles.button.textStyle}
                        colors={['#097fbd', '#43ace2']}
                        text={'Update'}
                        onPress={this.submitHandler}
                    />
                </View>

            </View>

        );
    }
}

export default MakeComplaintScreen;