import React, { Component } from 'react';

import { Text, TouchableOpacity, View, Image } from 'react-native';

class ArrowButton extends Component {

    render() {

        let containerStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
            paddingLeft: 15,
            paddingRight: 15,
            flexDirection: 'row',
            backgroundColor: '#142541',
            borderRadius: 15,
            width: 130
        }

        return (
            <TouchableOpacity activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.70} onPress={this.props.onPress} style={{elevation: 0, ...this.props.containerStyle  }}>
                <View
                    style={{ ...containerStyle, ...this.props.containerStyle }}
                >
                    <Text style={this.props.textStyle}>{this.props.text ? this.props.text : "button"}</Text>
                    <Image
                        source={require('../../../assets/common/chevron_right.png')}
                        style={{ height: 10, width: 12 * 0.59 , opacity: 1, marginLeft: 5 }}
                        tintColor={'#B2C7DB'}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

export default ArrowButton;