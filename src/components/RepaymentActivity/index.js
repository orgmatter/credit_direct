import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';

class RepaymentActivity extends Component {

    render() {
        return (
            <View style={{}}>

                <View style={{
                    backgroundColor: 'white',
                    borderLeftWidth: 1, borderLeftColor: '#ebeef1',
                    borderRightWidth: 1, borderRightColor: '#ebeef1',
                    borderBottomWidth: 2, borderBottomColor: '#e2e5e8',
                    borderRadius: 4
                }}>

                    {this.props.entries.map((item, index) => {
                        return (
                            <View key={index} style={{}}>

                                <View style={{ height: 30, backgroundColor: 'rgba(1, 72, 134, 0.02)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingRight: 15 }}>
                                    <Text style={{ color: '#828282', fontSize: 12 }}>11th Nov, 2018</Text>
                                    <Text style={{ color: '#828282', fontSize: 12 }}>Status: <Text style={{ color: '#67a85a' }}>Paid</Text></Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingLeft: 15, paddingRight: 15 }}>

                                    <View style={{}}>
                                        <Text style={{ color: '#828282', fontSize: 12, marginBottom: 3 }}>Amount Paid</Text>
                                        <Text style={{ color: '#6FCF97', fontSize: 17, fontWeight: 'bold' }}>{'\u20A6'}155,000.00</Text>
                                    </View>

                                    <View style={{}}>
                                        <Text style={{ color: '#828282', fontSize: 12, marginBottom: 3 }}>Amount Paid</Text>
                                        <Text style={{ color: '#828282', fontSize: 17, fontWeight: 'bold' }}>{'\u20A6'}155,000.00</Text>
                                    </View>

                                </View>

                            </View>
                        );
                    })}

                </View>

                <View style={{ height: 70, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 20 }}>
                    <Text style={{ marginRight: 10, color: '#61DADA', fontSize: 14, fontWeight: 'bold' }}>View More</Text>
                    <AntDesign name="right" size={16} color="#61DADA" />
                </View>
            </View>
        );
    }
}

export default RepaymentActivity;