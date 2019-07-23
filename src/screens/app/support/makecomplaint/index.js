import React, { Component } from 'react';

import { View, Image, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Button from '../../../../components/Button/index.js';

import SharedStyles from '../../../../styles/SharedStyles.js';

import Navbar from '../../../../components/Navbar/index.js';

class MakeComplaintScreen extends Component {

    render() {

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                    <Navbar title={'Make Complaint'}
                        leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                        leftButtonHandler={() => { this.props.navigation.goBack() }}
                        containerStyle={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, elevation: 2}}
                    />

                    <View style={{ margin: 20, marginTop: 40, paddingBottom: 15 }}>
                        <TextInput
                            placeholder='Narrate your complaint...'
                            multiline={true}
                            style={{ fontSize: 18, color: '#4F4F4F', borderBottomColor: '#9c9c9c4d', borderBottomWidth: 1 }}
                        />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>
                        <Button
                            containerStyle={SharedStyles.button.containerStyle}
                            textStyle={SharedStyles.button.textStyle}
                            colors={['#097fbd', '#43ace2']}
                            text={'Submit'}
                            onPress={this.submitHandler}
                        />
                    </View>

                </View>

            </TouchableWithoutFeedback>
        );
    }
}

export default MakeComplaintScreen;