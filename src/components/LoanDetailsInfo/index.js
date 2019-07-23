import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import FlatButton from '../FlatButton/index.js';


class LoanDetailsInfo extends Component {
    render() {
        return (

            <View>

                <View style={{ alignItems: 'center', padding: 20 }}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>LOAN AMOUNT</Text>
                        <Text style={{ color: '#61DADA', fontSize: 30, fontWeight: 'bold' }}>{'\u20A6'}155,000.00</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, }}>

                        <View style={{ alignItems: 'center', marginRight: 20 }}>
                            <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>TOTAL REPAYMENT</Text>
                            <Text style={{ color: '#4f4f4f', fontSize: 17 }}>{'\u20A6'} 30,500.00</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>INTEREST</Text>
                            <Text style={{ color: '#4f4f4f', fontSize: 17 }}>{'\u20A6'} 2.5%</Text>
                        </View>

                    </View>

                </View>


                <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20, borderTopWidth: 1, borderTopColor: '#d9d9d980', borderBottomWidth: 1, borderBottomColor: '#d9d9d980' }}>

                    <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>CURRENT PRODUCT</Text>
                        <Text style={{ color: '#4f4f4f', fontSize: 11, fontWeight: 'bold' }}>CASH PACKAGE</Text>
                    </View>

                    <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>REPAYMENT FREQUENCY</Text>
                        <Text style={{ color: '#4f4f4f', fontSize: 11, fontWeight: 'bold' }}>MONTHLY</Text>
                    </View>

                    <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>LOAN TENOR</Text>
                        <Text style={{ color: '#4f4f4f', fontSize: 11, fontWeight: 'bold' }}>3 MONTHS</Text>
                    </View>

                    <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>LOAN INSTALLMENT</Text>
                        <Text style={{ color: '#4f4f4f', fontSize: 11, fontWeight: 'bold' }}>{'\u20A6'}12,500.00</Text>
                    </View>

                    <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#9c9c9c80', fontSize: 10, fontWeight: 'bold' }}>LOAN START DATE</Text>
                        <Text style={{ color: '#4f4f4f', fontSize: 11, fontWeight: 'bold' }}>11TH NOV. 2018</Text>
                    </View>


                </View>


                <View style={{ paddingTop: 10, paddingBottom: 10 }}>

                    <View style={{}}>
                        <FlatButton
                            onPress={() => { }}
                            text={'Download Loan Statement'}
                            textStyle={{ color: '#077DBB', fontSize: 14, fontWeight: 'bold' }}
                            containerStyle={{ height: 40 }}
                        />
                    </View>

                    <View style={{}}>
                        <FlatButton
                            onPress={() => { }}
                            text={'Request Letter of Indebtedness'}
                            textStyle={{ color: '#077DBB', fontSize: 14, fontWeight: 'bold' }}
                            containerStyle={{ height: 40 }}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

export default LoanDetailsInfo;