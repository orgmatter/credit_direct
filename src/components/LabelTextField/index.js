import React, { Component } from 'react';

import { View, Text, TextInput, Animated } from 'react-native';

class LabelTextField extends Component {
    constructor(props) {
        super(props);

        let labelFontWeight = props.value ? props.labelStyle.fontWeight : props.inputStyle.fontWeight;
        let labelColor = props.value ? props.labelStyle.color : props.placeholderTextColor;

        this.state = {
            labelScale: new Animated.Value(1),
            labeltranslateX: new Animated.Value(0),
            labeltranslateY: new Animated.Value(0),
            labelFontWeight: labelFontWeight,
            labelColor: labelColor
        }

        this.focusHandler = this.focusHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);

        this.floatLabel = this.floatLabel.bind(this);
        this.sinkLabel = this.sinkLabel.bind(this);

        this.labelOriginalWidth = null;
    }


    render() {

        let inputContainerStyle = this.props.error ? { borderBottomColor: '#be4343' } : {};

        let labelTop = (this.props.inputStyle.height - this.props.inputStyle.fontSize) / 2 - 2;

        return (


            <View style={this.props.containerStyle} onLayout={this.props.onLayout}>

                <View style={{ ...this.props.inputContainerStyle, ...inputContainerStyle }}>
                    <Animated.Text
                        onLayout={(val) => {
                            if (this.labelOriginalWidth != null) { return };

                            this.labelOriginalWidth = val.nativeEvent.layout.width;

                            if (this.props.value) {
                                this.floatLabel();
                            }
                        }}

                        style={{
                            position: 'absolute',

                            top: labelTop,
                            fontSize: this.props.inputStyle.fontSize,
                            transform: [{ scale: this.state.labelScale }, { translateX: this.state.labeltranslateX }, { translateY: this.state.labeltranslateY }],
                            fontWeight: this.state.labelFontWeight,
                            color: this.state.labelColor
                        }}
                    >
                        {this.props.labelText}
                    </Animated.Text>

                    <TextInput
                        value={this.props.value}
                        onChangeText={this.props.onChangeText}
                        onFocus={this.focusHandler}
                        onBlur={this.blurHandler}

                        placeholder={this.props.placeholder}
                        placeholderTextColor={this.props.placeholderTextColor}
                        style={this.props.inputStyle}
                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType={this.props.keyboardType || 'default'}
                        maxLength={this.props.maxLength}
                    />

                    {this.props.icon && (
                        <View style={{ position: 'absolute', height: this.props.inputStyle.height, right: 5, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                            {this.props.icon}
                        </View>
                    )}


                    <View style={{ position: 'absolute', left: 0, bottom: -23 }}>
                        <Text style={{ color: '#be4343', fontSize: 12 }}>{this.props.error}</Text>
                    </View>

                </View>

            </View>
        );
    }



    focusHandler() {

        if (this.props.value) {
            return;
        }

        this.floatLabel();
    }

    blurHandler() {
        let val = this.props.value;

        if (val || val != null && val != undefined && val != '') {
            return;
        }

        this.sinkLabel();
    }


    floatLabel() {
        let scale = this.props.labelStyle.fontSize / this.props.inputStyle.fontSize;

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
            labelFontWeight: this.props.inputStyle.fontWeight,
            labelColor: this.props.placeholderTextColor
        });
    }

}

export default LabelTextField;

