import React, { Component } from 'react';

import { Text, View, TouchableHighlight } from 'react-native';

class NotificationBox extends Component {
    render() {

        if (!this.props.show) {
            return null;
        }
        
        let activeStyle = style[this.props.notificationType];

        return (

            <View style={{ position: 'absolute', left: 0, top: 0, right: 0, minHeight: 60, elevation: 2, backgroundColor: activeStyle.containerBackgroundColor, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, flexDirection: 'row', padding: 20, alignItems: 'center', elevation: 2 }}>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, lineHeight: 20, color: activeStyle.textColor }}>{this.props.message}</Text>
                </View>

                <View style={{ marginLeft: 20 }}>

                    <TouchableHighlight>
                        <View style={{}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: activeStyle.buttonColor }}>{this.props.buttonText || 'Dismiss'}</Text>
                        </View>
                    </TouchableHighlight>

                </View>

            </View>

        );
    }
}

let style = {
    success: {
        containerBackgroundColor: '#61DADA',
        textColor: '#203659',
        buttonColor: '#203659'
    },

    error: {
        containerBackgroundColor: '#EB5757',
        textColor: '#F3F7FA',
        buttonColor: '#F3F7FA'
    },

    notification: {

    }

}

export default NotificationBox;