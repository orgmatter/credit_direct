import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import Navbar from '../../../../components/Navbar/index.js';


class RootScreen extends Component {

    constructor() {
        super();

        this.state = {
            loanData: loanData
        }

        this.selectEntry = this.selectEntry.bind(this);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                <Navbar title={'Loan History'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.screenProps.parentNavigator.goBack() }}

                    rightButton={<Image source={require('../../../../../assets/screens/loanhistory/search.png')} style={{ height: 18, width: 18 }} />}
                    rightButtonHandler={() => { }}

                    containerStyle={{}}
                />

                <ScrollView style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>

                    {this.state.loanData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.70} onPress={this.selectEntry} style={{}}>
                                <View style={{ marginTop: index == 0 ? 20 : 0, marginBottom: 20 }}>

                                    <Text style={{ color: '#828282', fontSize: 12, marginBottom: 7 }}>{item.date}</Text>

                                    <View style={{
                                        padding: 15,
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        backgroundColor: '#FFFFFF',
                                        borderLeftWidth: 1, borderLeftColor: '#edf0f3',
                                        borderRightWidth: 1, borderRightColor: '#edf0f3',
                                        borderBottomWidth: 2, borderBottomColor: '#dce0e3',
                                        borderRadius: 4,

                                    }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                            <Text style={{ width: 85, marginRight: 30, color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>LOAN AMOUNT</Text>
                                            <Text style={{ width: 50, color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>INTEREST</Text>
                                            <Text style={{ marginLeft: 20, color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>CURRENT PRODUCT</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ width: 85, color: '#4F4F4F', fontSize: 14, fontWeight: 'bold', }}>{item.loanAmount}</Text>
                                            <Text style={{ width: 20, marginLeft: 5, marginRight: 5, textAlign: 'center', color: '#9C9C9C', fontSize: 10, fontWeight: 'bold' }}>+</Text>
                                            <Text style={{ width: 50, color: '#4F4F4F', fontSize: 14, fontWeight: 'bold', }}>{item.interest}%</Text>
                                            <Text style={{ marginLeft: 20, color: '#4F4F4F', fontSize: 11, fontWeight: 'bold', }}>{item.currentProduct}</Text>
                                        </View>



                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }

    selectEntry() {
        this.props.navigation.navigate('Details');
    }
}


export default RootScreen;

var loanData = [
    {
        loanAmount: '10000000.00',
        interest: 3.5,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 1050,
        interest: 23.5,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 17350,
        interest: 10,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 7400,
        interest: 5,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 20000,
        interest: 3.5,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 250000,
        interest: 12.5,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 76560,
        interest: 7.5,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 12250.77,
        interest: 10,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 34500,
        interest: 7,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 2300,
        interest: 12,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 11000,
        interest: 11,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    },
    {
        loanAmount: 9090,
        interest: 17,
        currentProduct: 'CASH PACKAGE',
        date: '11th Nov, 2018'
    }
];