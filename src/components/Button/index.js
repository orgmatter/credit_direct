import React, { Component } from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo';

class Button extends Component {

  render() {

    let containerStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      borderRadius: 3,
    }

    return (
      <TouchableOpacity activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.70} onPress={this.props.onPress} style={{ borderRadius: this.props.containerStyle.borderRadius, elevation: 0 }}>
        <LinearGradient
          style={{ ...containerStyle, ...this.props.containerStyle }}
          colors={[this.props.colors[0], this.props.colors[1]]}
          start={[0, 0]} end={[1, 0]}
        >
          <Text style={this.props.textStyle}>{this.props.text ? this.props.text : "button"}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

export default Button;