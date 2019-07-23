import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';

import FlatButton from '../../../../../../../../../components/FlatButton/index.js';

class RepaymentPane extends Component {
    render() {
        var { width } = Dimensions.get('window');

        return (
            <View style={{ width: width, paddingLeft: 20, paddingRight: 20, paddingBottom: 0 }}>

                <View style={{ marginTop: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center', }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 22, color: '#ffffff', fontWeight: '100' }}>Repayment</Text>
                    </View>

                </View>


                <View style={{ marginTop: 0, flexDirection: 'row', alignItems: 'flex-start', height: 130, backgroundColor: '' }}>

                    <View style={{ backgroundColor: '#274067', flex: 1, borderTopWidth: 1, borderTopColor: '#43597b', borderRadius: 6 }}>

                        <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>

                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, marginBottom: 0 }}>Total</Text>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#61DADA' }}>12</Text>
                            </View>

                            <View style={{ width: 1, height: 48, backgroundColor: 'rgba(255,255,255,0.4)' }}></View>

                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, marginBottom: 0 }}>Completed</Text>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' }}>8</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, marginBottom: 0 }}>Missed</Text>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' }}>2</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, marginBottom: 0 }}>Outstanding</Text>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' }}>2</Text>
                            </View>

                        </View>

                        <View style={{ borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', height: 40 }}>
                            <FlatButton
                                text={'Go to My Wallet'}
                                textStyle={{ color: '#61DADA', fontSize: 12, fontWeight: 'bold' }}
                                containerStyle={{ height: 40 }}
                            />
                        </View>

                    </View>

                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 0, backgroundColor: '' }}>

                    <View style={{ marginRight: 20 }}>
                        <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, marginBottom: 7, fontWeight: 'bold' }}>Last Repayment</Text>
                        <Text style={{ color: '#ffffff', fontSize: 14 }}>2 Sept, 2018</Text>
                    </View>

                    <View style={{}}>
                        {/* < Image source={require('../../../../../../assets/screens/dashboard/arrow_right_dashed.png')} style={{ width: 12, height: 12 * 1.625 }} /> */}
                    </View>

                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, marginBottom: 7, fontWeight: 'bold' }}>Next Repayment</Text>
                        <Text style={{ color: '#ffffff', fontSize: 14 }}>6 Dec, 2018</Text>
                    </View>

                </View>
            </View>
        );
    }
}


export default RepaymentPane;