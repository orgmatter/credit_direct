import React, { Component } from 'react';

import { Text, View, Modal, Dimensions, Image } from 'react-native';

class SuccessPopup extends Component {

    render() {
        return (

            <Modal animationType={"fade"} transparent={true} onRequestClose={() => { }} visible={this.props.show}>
                <View style={{ flex: 1, backgroundColor: '#000000cc', justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ height: 370, backgroundColor: '#ffffff', width: Dimensions.get('window').width - 40, borderRadius: 8, padding: 20, justifyContent: 'flex-end' }}>

                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                            <Image source={require('../../../assets/components/SuccessPopup/balloons.png')} style={{ width: Dimensions.get('window').width - 40, height: Dimensions.get('window').width * 0.46 }} />
                        </View>

                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                            <Image source={require('../../../assets/components/SuccessPopup/confetti.png')} style={{ width: Dimensions.get('window').width - 40, height: Dimensions.get('window').width * 0.6 }} />
                        </View>


                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Image source={require('../../../assets/components/SuccessPopup/icon.png')} style={{ width: 70, height: 70 }} />
                        </View>


                        <Text style={{ color: '#010101', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 }}>{this.props.title}</Text>

                        <Text style={{ color: '#4F4F4F', fontSize: 15, textAlign: 'center', marginBottom: 20, lineHeight: 22 }}>{this.props.message}</Text>

                        {this.props.button}


                    </View>

                </View>
            </Modal >

        );
    }
}

export default SuccessPopup;