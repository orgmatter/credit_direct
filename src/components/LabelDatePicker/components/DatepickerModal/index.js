import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, DatePickerIOS, Modal } from 'react-native';

import { Constants } from 'expo';

class DatepickerModal extends Component {
    render() {

        let value = this.props.value;
        let date = null;

        if (!this.props.value) {
            date = new Date();
        } else {
            date = new Date(value.year, value.month, value.day);
        }

        return (
            <Modal animationType={"fade"} transparent={true} onRequestClose={() => { }} visible={this.props.show} style={{}}>
                <View style={{ backgroundColor: 'rgba(255,255,255,0.95)', flex: 1, justifyContent: 'center' }}>

                    <TouchableWithoutFeedback onPress={this.props.closeHandler}>
                        <View style={{ position: 'absolute', top: Constants.statusBarHeight, right: 0, height: 60, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                            {this.props.icon}
                        </View>
                    </TouchableWithoutFeedback>

                    <DatePickerIOS
                        date={date}
                        onDateChange={this.props.changeHandler}
                        mode={'date'}
                    />
                </View>

            </Modal>
        );
    }
}


export default DatepickerModal;