import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import Navbar from '../../../../components/Navbar/index.js';
import Calendar from './components/Calendar/index.js';

import { months } from '../../../../utils/CalendarUtil.js';


class ScheduleScreen extends Component {

    constructor() {
        super();

        this.state = {
            currentMonth: 0,
            currentYear: 2019,
            installmentDays: [
                {
                    day: 3,
                    time: '11:40AM',
                    description: 'Payment of your 1st installment',
                    amount: 'N12,500.00'
                },
                {
                    day: 14,
                    time: '09:10AM',
                    description: 'Payment of your 2nd installment',
                    amount: 'N12,500.00'
                },
                {
                    day: 22,
                    time: '05:10PM',
                    description: 'Payment of your 3rd installment',
                    amount: 'N7,300.00'
                },
                {
                    day: 3,
                    time: '11:40AM',
                    description: 'Payment of your 1st installment',
                    amount: 'N12,500.00'
                },
                {
                    day: 14,
                    time: '09:10AM',
                    description: 'Payment of your 2nd installment',
                    amount: 'N12,500.00'
                },
                {
                    day: 22,
                    time: '05:10PM',
                    description: 'Payment of your 3rd installment',
                    amount: 'N7,300.00'
                }
            ]
        }

        this.renderInstallmentEntries = this.renderInstallmentEntries.bind(this);

    }




    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                <Navbar title={'Schedule'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.screenProps.parentNavigator.goBack() }}
                    containerStyle={{}}
                />

                <View style={{ backgroundColor: '#203659', paddingTop: 20, paddingBottom: 40, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ fontSize: 10, color: '#ffffff', fontWeight: 'bold' }}>{months[this.state.currentMonth]} {this.state.currentYear}</Text>
                    </View>


                    <View style={{ backgroundColor: '#203659', flexDirection: 'row' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 50 }}>
                            <Image source={require('../../../../../assets/common/chevron_left.png')} style={{ height: 12, width: 12 * 0.58 }} tintColor={'#fff'} />
                        </View>

                        <Calendar month={this.state.currentMonth} year={this.state.currentYear} installmentDays={this.state.installmentDays} />

                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 50 }}>
                            <Image source={require('../../../../../assets/common/chevron_right.png')} style={{ height: 12, width: 12 * 0.58 }} tintColor={'#fff'} />
                        </View>
                    </View>

                </View>

                <View style={{ paddingLeft: 20, marginTop: 15, marginBottom: 20 }}>
                    <Text style={{ color: '#203659', fontSize: 18 }}>Repayment Days</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <ScrollView>
                        {this.renderInstallmentEntries()}
                    </ScrollView>
                </View>


            </View>
        );
    }

    renderInstallmentEntries() {
        let installmentEntries = this.state.installmentDays.map(item => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>

                    <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#9C9C9C', fontSize: 11 }}>{item.time}</Text>
                    </View>

                    <View style={{ borderLeftWidth: 1, borderLeftColor: 'rgba(156, 156, 156, 0.23)', paddingLeft: 20 }}>
                        <Text style={{ color: '#4F4F4F', fontSize: 13, fontWeight: 'bold', fontFamily: 'Nunito', marginBottom: 3 }}>{item.description}</Text>
                        <Text style={{ color: '#9C9C9C', fontSize: 16, fontWeight: '100', fontFamily: 'Nunito' }}>{item.amount}</Text>
                    </View>

                    <View style={{}}></View>

                </View>
            );
        });

        return installmentEntries;
    }
}

export default ScheduleScreen;



