import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class FlatButton extends Component {
    render() {
        let containerStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 20
        }

        return (
            <TouchableOpacity activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.70} onPress={this.props.onPress} style={{ ...containerStyle, ...this.props.containerStyle }}>
                <View style={{ ...containerStyle, ...this.props.containerStyle }}>
                    <Text style={this.props.textStyle}>{this.props.text ? this.props.text : "button"}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default FlatButton;