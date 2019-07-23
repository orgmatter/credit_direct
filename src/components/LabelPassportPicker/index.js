import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, Platform } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import PickerModal from '../PickerModal/index.js';

class LabelFilePicker extends Component {

    constructor() {
        super();

        this.state = {
            showModal: false
        }


        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.pickImageHandler = this.pickImageHandler.bind(this);
        this.processPickImage = this.processPickImage.bind(this);

        this.pickFileHandler = this.pickFileHandler.bind(this);
        this.processPickFile = this.processPickFile.bind(this);
    }

    render() {

        let labelStyle = { marginBottom: 10 };
        let buttonContainerStyle = {};

        return (
            <View style={this.props.containerStyle} onLayout={this.props.onLayout}>

                <PickerModal
                    cameraButtonHandler={this.pickImageHandler}
                    fileButtonHandler={this.pickFileHandler}
                    show={this.state.showModal}
                    closeHandler={this.closeModal}
                />


                <Text style={{ ...this.props.labelStyle, ...labelStyle }}>{this.props.labelText}</Text>

                {!this.props.value && (
                    <View style={{ ...this.props.buttonContainerStyle, ...buttonContainerStyle }}>
                        <TouchableOpacity activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.70} onPress={this.openModal} style={{ borderRadius: this.props.buttonStyle.borderRadius, elevation: 0 }}>

                            <View style={{ height: 85, width: 85 }}>

                                <View style={{ width: 20, height: 20, backgroundColor: '#56BAEE', position: 'absolute', right: -7, top: -7, borderRadius: 20, justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
                                    <Image source={require('../../../assets/components/LabelPassportPicker/plus_icon.png')} style={{ width: 10, height: 10 }} />
                                </View>

                                <Image source={require('../../../assets/components/LabelPassportPicker/placeholder.png')} style={{ width: 85, height: 85 }} />
                            </View>

                        </TouchableOpacity>

                        <View style={{ position: 'absolute', left: 0, bottom: -23 }}>
                            <Text style={{ color: '#be4343', fontSize: 12 }}>{this.props.error}</Text>
                        </View>

                    </View>
                )}

                {this.props.value && (

                    <View style={{ ...this.props.buttonContainerStyle, ...buttonContainerStyle }}>
                        <TouchableOpacity activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.70} onPress={this.openModal} style={{ borderRadius: this.props.buttonStyle.borderRadius, elevation: 0 }}>

                            <View style={{ height: 85, width: 85 }}>

                                <View style={{ width: 20, height: 20, backgroundColor: '#56BAEE', position: 'absolute', right: -7, top: -7, borderRadius: 20, justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
                                    <Image source={require('../../../assets/components/LabelPassportPicker/plus_icon.png')} style={{ width: 10, height: 10 }} />
                                </View>

                                <Image
                                    resizeMode='cover'
                                    style={{
                                        flex: 1,
                                        width: 85,
                                        height: 85,
                                        borderRadius: 5
                                        // aspectRatio: this.props.value.height / this.props.value.width,
                                        // opacity: 1
                                    }}
                                    source={{ uri: this.props.value.uri }}
                                />
                            </View>

                        </TouchableOpacity>

                        <View style={{ position: 'absolute', left: 0, bottom: -23 }}>
                            <Text style={{ color: '#be4343', fontSize: 12 }}>{this.props.error}</Text>
                        </View>

                    </View>

                )}


            </View>
        );
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }

    async pickImageHandler() {

        let cameraPermissionStatus = await Permissions.getAsync(Permissions.CAMERA);

        cameraPermissionStatus = cameraPermissionStatus.status;

        if (cameraPermissionStatus != 'granted') {
            cameraPermissionStatus = await Permissions.askAsync(Permissions.CAMERA);
            cameraPermissionStatus = cameraPermissionStatus.status;

            if (cameraPermissionStatus != 'granted') {
                //handle permission rejection
                return;
            }
        }


        let cameraRollPermissionStatus = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        cameraRollPermissionStatus = cameraRollPermissionStatus.status;

        if (cameraRollPermissionStatus != 'granted') {
            cameraRollPermissionStatus = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            cameraRollPermissionStatus = cameraRollPermissionStatus.status;

            if (cameraRollPermissionStatus != 'granted') {
                //handle permission rejection
                return;
            }
        }

        this.processPickImage();

    }

    async processPickImage() {
        let result;

        try {
            result = await ImagePicker.launchCameraAsync({ allowsEditing: false });
        } catch (e) {
            console.log(e)
            return;
        }

        this.closeModal();

        if (!result) {
            //handle error
        }

        if (result.cancelled) {
            return;
        }


        this.props.onChange(result);


    }


    async pickFileHandler() {

        if (Platform.OS != 'ios') {
            this.processPickFile();
            return;
        }

        let cameraRollPermissionStatus = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        cameraRollPermissionStatus = cameraRollPermissionStatus.status;

        if (cameraRollPermissionStatus == 'granted') {
            this.processPickFile();
            return;
        }

        cameraRollPermissionStatus = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        cameraRollPermissionStatus = cameraRollPermissionStatus.status;

        if (cameraRollPermissionStatus == 'granted') {
            this.processPickFile();
            return;
        }

        //handle rejection

    };

    async processPickFile() {

        let result;

        try {
            result = await ImagePicker.launchImageLibraryAsync({ allowsEditing: false });
        } catch (e) {
            console.log(e)
            return;
        }


        this.closeModal();

        if (!result) {
            //handle error
        }

        if (result.cancelled) {
            return;
        }

        this.props.onChange(result);

    }
}


export default LabelFilePicker;



