import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import Navbar from '../../../../components/Navbar/index.js';
import LoanDetailsInfo from '../../../../components/LoanDetailsInfo/index.js';


class RootScreen extends Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                <Navbar title={'My Loan'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.screenProps.parentNavigator.goBack() }}
                />

                <View style={{ flex: 1 }}>

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
                    }}
                    >
                        <ScrollView style={{}}>
                            <LoanDetailsInfo />
                        </ScrollView>

                    </View>

                </View>


            </View>
        );
    }
}


export default RootScreen;
