import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Slider from "react-native-slider";

class LabelSlider extends Component {
    render() {
        let sliderContainerStyle = this.props.error ? { borderBottomColor: 'red' } : {};


        return (


            <View style={this.props.containerStyle} onLayout={this.props.onLayout}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                    <Text style={{ ...this.props.labelStyle }}>{this.props.labelText}</Text>

                    <View style={{ backgroundColor: '#1d3441', padding: 3, paddingLeft: 7, paddingRight: 7, borderRadius: 3 }}>
                        <Text style={{ ...this.props.labelStyle, color: '#ffffff', fontSize: 12 }}>{this.props.valueText}</Text>
                    </View>
                </View>



                <View style={{ ...this.props.sliderContainerStyle, ...sliderContainerStyle }}>
                    <Slider
                        style={{ marginLeft: 0, marginRight: 0 }}
                        minimumValue={this.props.minimumValue}
                        maximumValue={this.props.maximumValue}
                        step={this.props.step}
                        onValueChange={this.props.onChange ? this.props.onChange : () => { }}
                        thumbTintColor='#077DBB'
                        trackStyle={{ height: 7, borderRadius: 10 }}
                        minimumTrackTintColor='#56BAEE'
                        maximumTrackTintColor='#6898b133'
                        thumbStyle={{ height: 20, width: 20, elevation: 1 }}
                    ></Slider>

                    <View style={{ position: 'absolute', left: 0, bottom: -15 }}>
                        <Text style={{ color: '#be4343', fontSize: 12 }}>{this.props.error}</Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default LabelSlider;