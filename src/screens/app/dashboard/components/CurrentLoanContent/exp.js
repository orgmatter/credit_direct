import React, { Component } from 'react';

import { Text, View, Image, ScrollView, TouchableWithoutFeedback, Dimensions, Animated, PanResponder } from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';

import OverviewContainer from './components/OverviewContainer/index.js';

import ActiveMandates from './components/ActiveMandates/index.js';

import RepaymentActivity from './components/RepaymentActivity/index.js';

const MIN_VERTICAL_TRANSLATE = 0;
const MAX_VERTICAL_TRANSLATE = -340;

class CurrentLoanContent extends Component {

    constructor() {
        super();

        this.state = {
            translateY: new Animated.Value(0),

        }

        this.state.translateY.addListener(({ value }) => {
            this._translateY = value;
        });

        this.baseTranslate = 0;

        this.scrollOffset = 0;

        this.scrollViewOnPanOffset = 0;

        this.allowPanning = this.allowPanning.bind(this);

        this.panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
                return this.allowPanning();
            },
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                return true;
                return this.allowPanning();
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true;
                return this.allowPanning();
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                return true;
                return this.allowPanning();
            },

            onPanResponderGrant: (evt, gestureState) => {
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
                this.state.translateY.stopAnimation(value => {
                    // console.log(value);
                    if (value != undefined) {
                        this.baseTranslate = value;
                    }
                });

                this.scrollViewOnPanOffset = this.scrollOffset;
            },

            onPanResponderMove: (evt, gestureState) => {
                // console.log(gestureState);
                // console.log('dx: ' + dx + ' dy ' + dy + ' vy: ' + vy);

                let { y0, dy, vy } = gestureState;

                //First decide direction

                //Upward swipe
                if(dy < 0) {
                    let translateY = this.baseTranslate + dy;

                    if(translateY < MAX_VERTICAL_TRANSLATE) {

                        let scrollPositionOffset = MAX_VERTICAL_TRANSLATE + this.baseTranslate - dy;

                        let temp = this.scrollViewOnPanOffset + scrollPositionOffset;
                        this.scrollView.scrollTo({x: 0, y: temp, animated: false});
                        return;
                    }

                }
                
                //Downward swipe
                if(dy > 0) {
                    
                }

                console.log('y0: ' + y0 + ' dy ' + dy + ' vy: ' + vy);

                let translateY = this.baseTranslate + dy;

                if(translateY < MAX_VERTICAL_TRANSLATE) {

                    let temp = -340 + this.baseTranslate - dy;
                    this.scrollView.scrollTo({x: 0, y: temp, animated: false});
                    return;
                }

                if (translateY < MAX_VERTICAL_TRANSLATE) {
                    translateY = MAX_VERTICAL_TRANSLATE;
                }

                if (translateY > MIN_VERTICAL_TRANSLATE) {
                    translateY = MIN_VERTICAL_TRANSLATE;
                }


                Animated.timing(this.state.translateY, {
                    toValue: translateY,
                    duration: 0,
                    useNativeDriver: true
                }).start();
                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {


                let { dx, dy, vy } = gestureState;

                console.log('dx: ' + dx + ' dy ' + dy + ' vy: ' + vy);

                let translateY = 0;

                if (this._translateY <= -160) {
                    translateY = MAX_VERTICAL_TRANSLATE;
                    baseTranslate = MAX_VERTICAL_TRANSLATE;
                    this.setState({ allowScroll: true });
                } else {
                    translateY = MIN_VERTICAL_TRANSLATE;
                    baseTranslate = MIN_VERTICAL_TRANSLATE;
                }


                Animated.timing(this.state.translateY, {
                    toValue: translateY,
                    duration: 300,
                    useNativeDriver: true
                }).start();
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    componentDidMount() {

    }

    render() {

        var { width, height } = Dimensions.get('window');


        return (

            <View style={{ flex: 1, backgroundColor: '#f3f7fa' }}>

                <OverviewContainer />


                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={{ height: height - 60, transform: [{ translateY: this.state.translateY }], backgroundColor: '#f3f7fa' }}
                >

                    {/* <View
                        {...this.panResponder.panHandlers}
                        style={{ position: 'absolute', zIndex: 10, top: 0, right: 0, width: 50, height: 40, paddingLeft: 10, paddingRight: 10, backgroundColor: 'red' }}
                    >
                        <View style={{ height: 3, backgroundColor: 'black', marginBottom: 10 }}></View>
                        <View style={{ height: 3, backgroundColor: 'black' }}></View>
                    </View> */}

                    <ScrollView
                        ref={ref => this.scrollView = ref}
                        onScroll={(event) => {
                            this.scrollOffset = event.nativeEvent.contentOffset.y;
                        }}
                        style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 15 }} scrollEnabled={false}
                    >



                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ fontSize: 14, color: '#203659', marginBottom: 10, fontWeight: 'bold' }}>Active Mandates  </Text>
                            <ActiveMandates
                                name={'RRR Mandate'}
                                value={'2238349218934'}
                            />
                        </View>

                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ fontSize: 14, color: '#203659', marginBottom: 10, fontWeight: 'bold' }}>Repayment Activity  </Text>
                            <RepaymentActivity entries={this.props.data.entries} />
                        </View>

                    </ScrollView>

                </Animated.View>



                <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('NewLoan') }}>
                    <View style={{ position: 'absolute', bottom: 20, right: 20, height: 55, width: 55, borderRadius: 30, backgroundColor: '#61DADA', elevation: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="plus" size={27} color="white" />
                    </View>
                </TouchableWithoutFeedback>

            </View>

        );
    }


    allowPanning() {
        if (this.state.allowScroll) {
            return false;
        }
        return true;
    }
}

export default CurrentLoanContent;