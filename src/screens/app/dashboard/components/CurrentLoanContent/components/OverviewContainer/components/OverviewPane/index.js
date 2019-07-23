import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { Text, View, Image, Dimensions } from 'react-native';

import PercentCircle from '../../../../../../../../../components/PercentCircle/index.js';

class OverviewPane extends Component {
    render() {
        var { width } = Dimensions.get('window');

        return (
            <View style={{ width: width, paddingLeft: 20, paddingRight: 20, paddingBottom: 0 }}>

                <View style={{ marginTop: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center', }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 22, color: '#ffffff', fontWeight: '100' }}>Overview</Text>
                    </View>

                    <View style={{ width: 80, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', padding: 3, borderRadius: 10 }}>
                        <Text style={{ fontSize: 11, color: '#61DADA' }}>CASHTOGO</Text>
                    </View>

                </View>


                <View style={{ marginTop: 0, flexDirection: 'row', alignItems: 'flex-start', height: 130, backgroundColor: '' }}>

                    {/* Left rectangle */}
                    <LinearGradient
                        colors={['#0AC4FF', '#007BBB']}
                        style={{ flex: 25, height: 100, borderRadius: 6, backgroundColor: '#077dbb', paddingLeft: 15, justifyContent: 'center' }}>

                        <Text style={{ color: '#ffffff', opacity: 0.8, fontSize: 12, fontWeight: 'bold' }}>Total Paid</Text>

                        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: '#FFFFFF', marginRight: 3 }}>{'\u20A6'}</Text>
                            <Text style={{ color: '#ffffff', fontSize: 26 }}>201,500.00</Text>
                        </View>

                        <Text style={{ color: '#ffffff', opacity: 0.8, fontSize: 12, fontWeight: 'bold' }}>Remaining: {'\u20A6'}105,500.00</Text>

                    </LinearGradient>

                    {/* Right rectangle */}
                    <View style={{ width: 80, height: 100, marginLeft: 30, borderRadius: 6, backgroundColor: '#364a6a', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <PercentCircle size={28} percent={70} fillColor={'#82FFB6'}/>
                        </View>

                        <Text style={{ color: '#ffffff', fontSize: 20 }}>70 %</Text>
                        <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: 'bold' }}>PAID</Text>
                    </View>

                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 0, backgroundColor: '', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', flex: 1 }}>

                        <View style={{ marginRight: 20 }}>
                            <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, marginBottom: 7, fontWeight: 'bold' }}>Start Date</Text>
                            <Text style={{ color: '#ffffff', fontSize: 14 }}>2 Sept, 2018</Text>
                        </View>

                        <View style={{justifyContent: 'center'}}>
                            < Image
                                source={require('../../../../../../../../../../assets/screens/dashboard/arrow_right_dashed.png')}
                                style={{ width: 12, height: 12 * 1.625 }}
                            tintColor={'#fff'} 
                            />
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, marginBottom: 7, fontWeight: 'bold' }}>End Date</Text>
                            <Text style={{ color: '#ffffff', fontSize: 14 }}>6 Dec, 2018</Text>
                        </View>

                    </View>





                    <View style={{}}>
                        <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, marginBottom: 7, fontWeight: 'bold' }}>Progress</Text>
                        <Text style={{ color: '#ffffff', fontSize: 14 }}><Text style={{color: '#82FFB6'}}>25</Text><Text style={{color: '#ffffff80'}}>/</Text>60 days</Text>
                    </View>

                </View>
            </View>
        );
    }
}


export default OverviewPane;