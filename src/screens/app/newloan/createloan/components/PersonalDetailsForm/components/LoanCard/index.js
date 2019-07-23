import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';


class LoanCard extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 260, borderRadius: 7, backgroundColor: '#077DBB', justifyContent: 'center', alignItems: 'center', elevation: 7, overflow: 'hidden' }}>

                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'rgba(255,255,255,0.8)' }}>MONTHLY LOAN INSTALLMENT</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'rgba(255,255,255,1)' }}>{'\u20A6'} {this.props.monthlyInstallment}</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'rgba(255,255,255,0.8)' }}>TOTAL REPAYMENT</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'rgba(255,255,255,1)' }}>{'\u20A6'} {this.props.totalRepayment}</Text>
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0, height: 130, zIndex: -1 }}>
                    < Image source={require('./images/newloan_1.png')} style={{ height: 130, width: 130 * 1.66 }} />
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0, height: 130, zIndex: -1 }}>
                    < Image source={require('./images/newloan_2.png')} style={{ height: 130, width: 130 * 2 }} />
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0, height: 130, zIndex: -1 }}>
                    < Image source={require('./images/newloan_3.png')} style={{ height: 130, width: 130 * 0.73 }} />
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0, height: 130, zIndex: -1 }}>
                    < Image source={require('./images/newloan_4.png')} style={{ height: 130, width: 130 * 1.23 }} />
                </View>

            </View>
        );
    }
}

export default LoanCard;