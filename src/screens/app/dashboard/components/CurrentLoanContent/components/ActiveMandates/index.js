import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';


class ActiveMandates extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', borderRadius: 4, padding: 20, paddingLeft: 13, paddingRight: 13, borderLeftWidth: 1, borderLeftColor: '#ebeef1', borderRightWidth: 1, borderRightColor: '#ebeef1', borderBottomWidth: 2, borderBottomColor: '#e2e5e8' }}>

                <Text style={{ color: '#7F868A', fontSize: 12, letterSpacing: 0.5, }}>{this.props.name}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 3 }}>

                    <Text style={{ color: '#203659', fontSize: 22, fontWeight: 'bold', letterSpacing: 0.5 }}>{this.props.value}</Text>

                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(103, 168, 90, 0.3)', borderRadius: 11, width: 75, height: 22 }}>
                        <Text style={{ color: '#67A85A', fontSize: 12, fontWeight: 'bold' }}>ACTIVE</Text>
                    </View>

                </View>

            </View>
        );
    }
}

export default ActiveMandates;