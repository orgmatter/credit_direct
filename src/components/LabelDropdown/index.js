import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

import Dropdown from '../Dropdown/index.js';

class LabelDropdown extends Component {
    constructor(props) {
        super(props);


        let value = props.value.value;

        let labelFontWeight = value ? props.labelStyle.fontWeight : props.dropdownTextStyle.fontWeight;
        let labelColor = value ? props.labelStyle.color : props.placeholderTextColor;

        this.state = {
            labelScale: new Animated.Value(1),
            labeltranslateX: new Animated.Value(0),
            labeltranslateY: new Animated.Value(0),
            labelFontWeight: labelFontWeight,
            labelColor: labelColor
        }


        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.floatLabel = this.floatLabel.bind(this);
        this.sinkLabel = this.sinkLabel.bind(this);



        this.labelOriginalWidth = null;
    }

    render() {
        let dropdownContainerStyle = this.props.error ? { borderBottomColor: '#be4343' } : {};

        let labelTop = (this.props.dropdownContainerStyle.height - this.props.dropdownTextStyle.fontSize) / 2 - 2;

        return (
            <View style={this.props.containerStyle} onLayout={this.props.onLayout}>

                <Animated.Text
                    onLayout={(val) => {

                        if (this.labelOriginalWidth != null){return};
                                
                        this.labelOriginalWidth = val.nativeEvent.layout.width;
                        
                        if(this.props.value.value) {
                            this.floatLabel();
                        }
                    }}

                    style={{
                        position: 'absolute',

                        top: labelTop,
                        fontSize: this.props.dropdownTextStyle.fontSize,
                        transform: [{ scale: this.state.labelScale }, { translateX: this.state.labeltranslateX }, { translateY: this.state.labeltranslateY }],
                        fontWeight: this.state.labelFontWeight,
                        color: this.state.labelColor
                    }}
                >
                    {this.props.labelText}
                </Animated.Text>

                <Dropdown
                    value={this.props.value}
                    options={this.props.options}
                    placeholder={this.props.placeholder}
                    placeholderColor={this.props.placeholderColor}
                    containerStyle={{ ...this.props.dropdownContainerStyle, ...dropdownContainerStyle }}
                    textStyle={this.props.dropdownTextStyle}
                    caretStyle={this.props.dropdownCaretStyle}
                    onChange={this.onChangeHandler}
                />

                <View style={{ position: 'absolute', left: 0, bottom: -23 }}>
                    <Text style={{ color: '#be4343', fontSize: 12 }}>{this.props.error}</Text>
                </View>
            </View>
        );
    }

    onChangeHandler(value) {
        let val = value.value;

        if (!val || val == null || val == undefined || val == '') {
            return;
        }

        this.floatLabel();

        this.props.onChange(value)
    }
    
    floatLabel() {
        let scale = this.props.labelStyle.fontSize / this.props.dropdownTextStyle.fontSize;

        let labeltranslateX = (-1 * (this.labelOriginalWidth - (this.labelOriginalWidth * scale)) / 2) * (1 / scale);


        Animated.parallel([
            Animated.timing(this.state.labelScale, {
                toValue: scale,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(this.state.labeltranslateX, {
                toValue: labeltranslateX,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(this.state.labeltranslateY, {
                toValue: -40,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();


        this.setState({
            labelFontWeight: this.props.labelStyle.fontWeight,
            labelColor: this.props.labelStyle.color
        });
    }

    sinkLabel() {
        Animated.parallel([
            Animated.timing(this.state.labelScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(this.state.labeltranslateX, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(this.state.labeltranslateY, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();

        this.setState({
            labelFontWeight: this.props.dropdownTextStyle.fontWeight,
            labelColor: this.props.placeholderTextColor
        });
    }
}

export default LabelDropdown;