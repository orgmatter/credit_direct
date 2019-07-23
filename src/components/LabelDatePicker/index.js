import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, DatePickerAndroid, Platform, Animated } from 'react-native';

import DatepickerModal from './components/DatepickerModal/index.js';

class LabelDatePicker extends Component {

    constructor(props) {
        super(props);

        let value = props.value;

        let labelFontWeight = value ? props.labelStyle.fontWeight : props.pickerTextStyle.fontWeight;
        let labelColor = value ? props.labelStyle.color : props.placeholderTextColor;

        this.state = {
            showIosModal: false,

            labelScale: new Animated.Value(1),
            labeltranslateX: new Animated.Value(0),
            labeltranslateY: new Animated.Value(0),
            labelFontWeight: labelFontWeight,
            labelColor: labelColor
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.floatLabel = this.floatLabel.bind(this);
        this.sinkLabel = this.sinkLabel.bind(this);

        this.openHandler = this.openHandler.bind(this);
        this.iosModalChangeHandler = this.iosModalChangeHandler.bind(this);
        this.iosModalCloseHandler = this.iosModalCloseHandler.bind(this);

        this.labelOriginalWidth = null;
    }


    render() {

        let pickerContainerStyle = this.props.error ? { borderBottomColor: '#be4343' } : {};

        let value = this.props.value;
        let renderText = <Text></Text>;

        if (value != null) {
            renderText = (
                <Text style={{ ...this.props.pickerTextStyle }}>
                    {value.day} \ {value.month + 1} \ {value.year}
                </Text>
            )
        }

        let labelTop = (this.props.pickerContainerStyle.height - this.props.pickerTextStyle.fontSize) / 2 - 2;

        return (
            <View style={{ marginBottom: 40 }} onLayout={this.props.onLayout}>

                {Platform.OS == 'ios' && (
                    <DatepickerModal
                        value={this.props.value}
                        show={this.state.showIosModal}
                        changeHandler={this.iosModalChangeHandler}
                        closeHandler={this.iosModalCloseHandler}
                        icon={this.props.modalIcon}
                    />
                )}


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
                        fontSize: this.props.pickerTextStyle.fontSize,
                        transform: [{ scale: this.state.labelScale }, { translateX: this.state.labeltranslateX }, { translateY: this.state.labeltranslateY }],
                        fontWeight: this.state.labelFontWeight,
                        color: this.state.labelColor
                    }}
                >
                    {this.props.labelText}
                </Animated.Text>


                <TouchableWithoutFeedback onPress={this.openHandler} >
                    <View style={{ ...this.props.pickerContainerStyle, ...pickerContainerStyle }}>

                        {renderText}

                        <View
                            style={{ width: 30, height: 30, position: 'absolute', right: 0, marginRight: 0, justifyContent: 'center', alignItems: 'center' }}
                        >
                            {this.props.icon}
                        </View>
                    </View>
                </TouchableWithoutFeedback>


                <View style={{ position: 'absolute', left: 0, bottom: -23 }}>
                    <Text style={{ color: '#be4343', fontSize: 12 }}>{this.props.error}</Text>
                </View>
            </View>
        );
    }

    async openHandler() {

        if (Platform.OS == 'ios') {
            this.setState({ showIosModal: true });
            return;
        }

        let dayPicker, monthPicker, yearPicker;

        if (!this.props.value) {
            let currentDate = new Date();

            dayPicker = currentDate.getDate();
            monthPicker = currentDate.getMonth();
            yearPicker = currentDate.getFullYear();

        } else {
            let value = this.props.value;

            dayPicker = value.day;
            monthPicker = value.month;
            yearPicker = value.year;
        }


        try {
            const { action, day, month, year } = await DatePickerAndroid.open({
                date: new Date(yearPicker, monthPicker, dayPicker)
            });

            if (action !== DatePickerAndroid.dismissedAction) {

                this.onChangeHandler({ day, month, year })
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    iosModalChangeHandler(newDate) {

        let date = {
            day: newDate.getDate(),
            month: newDate.getMonth(),
            year: newDate.getFullYear()
        };

        this.onChangeHandler(date);
    }

    iosModalCloseHandler() {
        this.setState({ showIosModal: false });
    }


    onChangeHandler(value) {
        this.floatLabel();
        this.props.onChange(value);
    }

    floatLabel() {
        let scale = this.props.labelStyle.fontSize / this.props.pickerTextStyle.fontSize;

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
            labelFontWeight: this.props.pickerTextStyle.fontWeight,
            labelColor: this.props.placeholderTextColor
        });
    }
}

export default LabelDatePicker;


