import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import Navbar from '../../../../components/Navbar/index.js';
import LoanDetailsInfo from '../../../../components/LoanDetailsInfo/index.js';
import RepaymentActivity from '../../../../components/RepaymentActivity/index.js';



const entries = [
    {
        id: 48732719843,
        amount: '155,000.00',
        title: 'October Salary',
        date: '28th Oct, 2018',
        time: '10:10am',
        type: 'debit'
    },
    {
        id: 787398127983,
        amount: '155,000.00',
        title: 'October Salary',
        date: '28th Oct, 2018',
        time: '10:10am',
        type: 'credit'
    },
    {
        id: 4234324231423,
        amount: '155,000.00',
        title: 'October Salary',
        date: '28th Oct, 2018',
        time: '10:10am',
        type: 'credit'
    },
    {
        id: 42312313131423,
        amount: '155,000.00',
        title: 'October Salary',
        date: '28th Oct, 2018',
        time: '10:10am',
        type: 'debit'
    }
]


class DetailsScreen extends Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                <Navbar title={'Loan Details'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.screenProps.parentNavigator.goBack() }}
                />

                <View style={{ flex: 1 }}>



                    <ScrollView style={{}} contentContainerStyle={{}}>
                        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, height: 70, backgroundColor: '#203659' }}></View>
                        <View style={{
                            marginTop: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            backgroundColor: '#FFFFFF',
                            borderLeftWidth: 1, borderLeftColor: '#edf0f3',
                            borderRightWidth: 1, borderRightColor: '#edf0f3',
                            borderBottomWidth: 2, borderBottomColor: '#dce0e3',
                            borderRadius: 4
                        }}>

                            <LoanDetailsInfo />

                        </View>

                        <View style={{ paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
                            <Text style={{ fontSize: 14, color: '#203659', marginBottom: 10, fontWeight: 'bold' }}>Repayment Activity  </Text>
                            <RepaymentActivity entries={entries} />
                        </View>
                    </ScrollView>

                </View>


            </View>
        );
    }
}


export default DetailsScreen;
