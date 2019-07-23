import React, { Component } from 'react';

import { View, Text, TextInput, Slider, Image, TouchableHighlight } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Navbar from '../../../../components/Navbar/index.js';

import SharedStyles from '../../../../styles/SharedStyles.js';

const routes = [
    {
        name: 'Profile',
        routeName: 'Profile',
        icon: require('../../../../../assets/screens/settings/profile.png')
    },
    {
        name: 'Edit Bank Details',
        routeName: 'EditBankDetails',
        icon: require('../../../../../assets/screens/settings/bank.png')
    }
]

class SettingsRootScreen extends Component {

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                <Navbar
                    title={'Settings'}
                    leftButton={<AntDesign name="arrowleft" size={22} color="#ffffff" />} leftButtonHandler={() => { this.props.screenProps.parentNavigator.goBack() }}
                    containerStyle={SharedStyles.subRouteScreen.navbarStyle}
                />

                <View style={SharedStyles.subRouteScreen.containerStyle}>

                    {routes.map(item => {
                        return (
                            <TouchableHighlight key={item.routeName} underlayColor="#a4b6c826" activeOpacity={1} onPress={() => { this.props.navigation.navigate(item.routeName)}} style={SharedStyles.subRouteScreen.routeEntryStyle.touchableContainer}>
                                <View style={SharedStyles.subRouteScreen.routeEntryStyle.containerStyle}>

                                    <View style={SharedStyles.subRouteScreen.routeEntryStyle.iconTitleContainer}>
                                        <View style={SharedStyles.subRouteScreen.routeEntryStyle.iconContainer}>
                                            < Image source={item.icon} style={{ width: 25, height: 25 }} />
                                        </View>
                                        <Text style={SharedStyles.subRouteScreen.routeEntryStyle.title}>{item.name}</Text>
                                    </View>

                                    <View style={{}}>
                                        < Image source={require('../../../../../assets/arrow_right.png')} style={{ height: 12, width: 12 * 0.6 }} />
                                    </View>
                                </View>
                            </TouchableHighlight>

                        )
                    })}
                </View>

            </View>
        );
    }
}

export default SettingsRootScreen;