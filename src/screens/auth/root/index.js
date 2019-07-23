import React, { Component } from 'react';

import { View, Text, Image, ScrollView } from 'react-native';

import CardDropdown from '../../../components/CardDropdown/index.js';


import Features from './components/FeaturesCarousel/index.js';


class RootScreen extends Component {

    constructor() {
        super();

        this.state = {
            showFeatures: true,
        }

        this.selectRequestLoan = this.selectRequestLoan.bind(this);
        this.selectMakeInvestmentn = this.selectMakeInvestmentn.bind(this);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#203659' }}>

                <Features show={this.state.showFeatures} onDone={() => { this.setState({ showFeatures: false }) }} />

                <View style={{ justifyContent: 'center', alignItems: 'center', height: 80 }}>
                    <Image source={require('../../../../assets/logo.png')} style={{ width: 150, height: 150 * 0.24 }} />
                </View>

                <View style={{ marginTop: 50, flex: 1 }}>

                    <Text style={{ fontSize: 20, lineHeight: 28, color: '#FFFFFF', fontWeight: '100', paddingLeft: 20, paddingRight: 20 }}>
                        What would you like to do?
                    </Text>

                    <ScrollView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>

                        <CardDropdown
                            title={'Request Loan'}
                            icon={
                                <Image source={require('../../../../assets/screens/auth_root/request_loan.png')} style={{ height: 30, width: 30 * 1.09 }} />
                            }
                            onToggleHandler={this.selectRequestLoan}
                            showOptions={false}
                            options={[]}
                        />

                        <View style={{ height: 15 }}></View>

                        <CardDropdown
                            title={'Make an Investment'}
                            icon={
                                <Image source={require('../../../../assets/screens/auth_root/investment.png')} style={{ height: 30, width: 30 * 1 }} />
                            }
                            onToggleHandler={this.selectMakeInvestmentn}
                            showOptions={false}
                            options={[]}
                        />

                    </ScrollView>

                </View>

            </View>
        );
    }

    selectRequestLoan() {
        this.props.navigation.navigate('Login');
    }

    selectMakeInvestmentn() {
        this.props.navigation.navigate('Login');
    }


}

export default RootScreen;

