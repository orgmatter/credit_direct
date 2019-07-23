import React, { Component } from 'react';

import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';


class Navbar extends Component {

    render() {
        return (
            <View style={{ ...style, ...this.props.containerStyle }}>

                {this.props.leftButton && (
                    <TouchableHighlight activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.9} onPress={this.props.leftButtonHandler} style={{ position: 'absolute', left: 0, top: 0, height: 60, width: 60, justifyContent: 'center', paddingLeft: 20, alignItems: 'flex-start' }} underlayColor="#1d304c">
                        <View style={{}}>
                            {this.props.leftButton}
                        </View>
                    </TouchableHighlight>
                )}


                <Text style={{ color: '#ffffff', fontSize: 20 }}>{this.props.title}</Text>


                {this.props.rightButton && (
                    <TouchableHighlight activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.9} onPress={this.props.rightButtonHandler} style={{ position: 'absolute', right: 0, top: 0, height: 60, width: 60, justifyContent: 'center', paddingRight: 20, alignItems: 'flex-end' }} underlayColor="#1d304c">
                        <View style={{}}>
                            {this.props.rightButton}
                        </View>
                    </TouchableHighlight>
                )}

            </View>
        );
    }
}

let style = {
    backgroundColor: '#203659',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
}

export default Navbar;