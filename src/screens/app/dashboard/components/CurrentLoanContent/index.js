import React, { Component } from 'react';

import { Text, View, Image, ScrollView, TouchableWithoutFeedback, Dimensions, Animated, PanResponder } from 'react-native';

import { Constants } from 'expo';

import { AntDesign, Entypo } from '@expo/vector-icons';

import OverviewContainer from './components/OverviewContainer/index.js';

import ActiveMandates from './components/ActiveMandates/index.js';

import RepaymentActivity from '../../../../../components/RepaymentActivity/index.js';

const MIN_VERTICAL_TRANSLATE = 0;
const MAX_VERTICAL_TRANSLATE = -360;

class CurrentLoanContent extends Component {

    constructor() {
        super();

        this.state = {
            translateY: new Animated.Value(0),
            overlayOpen: false
        }

        this.toggleOverlayOpen = this.toggleOverlayOpen.bind(this);
    }

    componentDidMount() {

    }

    render() {

        var { width, height } = Dimensions.get('window');


        return (

            <View style={{ flex: 1, backgroundColor: '#f3f7fa' }}>

                <OverviewContainer navigation={this.props.navigation}/>


                <Animated.View
                    style={{ height: height - 60 - Constants.statusBarHeight, flex: this.state.overlayOpen ? 0 : 1, transform: [{ translateY: this.state.translateY }], backgroundColor: '#f3f7fa' }}
                >

                    <ScrollView style={{ }}>



                        <View style={{ marginBottom: 30, paddingTop: 15,  paddingLeft: 20, paddingRight: 20 }}>
                            <Text style={{ fontSize: 14, color: '#203659', marginBottom: 10, fontWeight: 'bold' }}>Active Mandates  </Text>
                            <ActiveMandates
                                name={'RRR Mandate'}
                                value={'2238349218934'}
                            />


                            <TouchableWithoutFeedback onPress={this.toggleOverlayOpen}>
                                <View style={{ position: 'absolute', zIndex: 10, top: 0, right: 0, width: 60, height: 60, alignItems: 'center', justifyContent: 'center'}}>

                                    {this.state.overlayOpen && (
                                        <Image source={require('../../../../../../assets/screens/dashboard/down_arrow.png')} style={{ height: 15, width: 15, marginBottom: 5 }} />
                                    )}

                                    {!this.state.overlayOpen && (
                                        <Image source={require('../../../../../../assets/screens/dashboard/up_arrow.png')} style={{ height: 15, width: 15, marginBottom: 5 }} />
                                    )}

                                </View>
                            </TouchableWithoutFeedback>

                        </View>

                        <View style={{ marginBottom: 0, paddingLeft: 20, paddingRight: 20 }}>
                            <Text style={{ fontSize: 14, color: '#203659', marginBottom: 10, fontWeight: 'bold' }}>Repayment Activity  </Text>
                            <RepaymentActivity entries={this.props.data.entries} />
                        </View>

                    </ScrollView>

                </Animated.View>



                <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('NewLoan') }}>
                    <View style={{ position: 'absolute', bottom: 10, right: 10, height: 55, width: 55, borderRadius: 30, backgroundColor: '#61DADA', elevation: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="plus" size={27} color="#203659" />
                    </View>
                </TouchableWithoutFeedback>

            </View>

        );
    }

    toggleOverlayOpen() {

        let { overlayOpen } = this.state;
        // overlayOpen = !overlayOpen;


        let translateY = MAX_VERTICAL_TRANSLATE;

        //If currently open
        if (overlayOpen) {
            translateY = MIN_VERTICAL_TRANSLATE;
            
            Animated.timing(this.state.translateY, {
                toValue: translateY,
                duration: 300,
                useNativeDriver: true
            }).start(() => {
                this.setState({ overlayOpen: false });
            });
            return;
        }

        Animated.timing(this.state.translateY, {
            toValue: translateY,
            duration: 300,
            useNativeDriver: true
        }).start();

        this.setState({ overlayOpen: true });
        
    }

}

export default CurrentLoanContent;