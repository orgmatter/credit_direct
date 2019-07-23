import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, Image, Animated } from 'react-native';


class PickerModal extends Component {
    constructor() {
        super();

        this.state = {
            translateY: new Animated.Value(70)
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.show == this.props.show) {
            return;
        }

        if(nextProps.show == true) {
            Animated.timing(this.state.translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
            return;
        }

        Animated.timing(this.state.translateY, {
            toValue: 70,
            duration: 300,
            useNativeDriver: true
        }).start();

    }

    render() {
        return (
            <Modal animationType={"none"} transparent={true} onRequestClose={() => { }} visible={this.props.show}>
                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.55)' }}>

                    <TouchableWithoutFeedback onPress={this.props.closeHandler}>
                        <View style={{ flex: 1 }}></View>
                    </TouchableWithoutFeedback>




                    <Animated.View style={{  height:80, backgroundColor: 'rgba(255,255,255,0.95)', flexDirection: 'row', transform: [{translateY: this.state.translateY  }] }}>

                        <TouchableWithoutFeedback onPress={this.props.closeHandler}>
                            <View style={{ flex: 1 }}></View>
                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={this.props.cameraButtonHandler}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View>
                                    <Image source={require('../../../assets/components/PickerModal/camera.png')} style={{ width: 25, height: 25 }} tintColor={'rgba(0,0,0,0.95)'} />
                                </View>
                                <Text style={{ color: 'rgba(0,0,0,0.95)' }}>Use Camera</Text>
                            </View>
                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={this.props.closeHandler}>
                            <View style={{ flex: 1 }}></View>
                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={this.props.fileButtonHandler}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View>
                                    <Image source={require('../../../assets/components/PickerModal/folder.png')} style={{ width: 25, height: 25 }} tintColor={'rgba(0,0,0,0.95)'} />
                                </View>
                                <Text style={{ color: 'rgba(0,0,0,0.95)' }}>Pick File</Text>
                            </View>
                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={this.props.closeHandler}>
                            <View style={{ flex: 1 }}></View>
                        </TouchableWithoutFeedback>

                    </Animated.View>

                </View>

            </Modal>
        );
    }
}

export default PickerModal;