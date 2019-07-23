import React, { Component } from 'react';

import { View, Text, TextInput, Slider, Image, TouchableHighlight, Linking } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Navbar from '../../../../components/Navbar/index.js';

import SharedStyles from '../../../../styles/SharedStyles.js';

const routes = [
    {
        name: 'Make Complaint',
        routeName: 'MakeComplaint',
        icon: require('../../../../../assets/screens/support/complaint.png'),
        iconHeight: 30,
        iconAR: 1
    },
    {
        name: 'Send Email to Support',
        description: 'Send Email to support@nimblex.com',
        routeName: 'SendEmail',
        icon: require('../../../../../assets/screens/support/email.png'),
        iconHeight: 23,
        iconAR: 1.25
    },
    {
        name: 'Call Support',
        description: 'Call 08036860626',
        routeName: 'CallSupport',
        icon: require('../../../../../assets/screens/support/call.png'),
        iconHeight: 25,
        iconAR: 1
    }
]

class SettingsRootScreen extends Component {

    constructor() {
        super();

        this.handleEntryPress = this.handleEntryPress.bind(this);
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                <Navbar
                    title={'Support'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.screenProps.parentNavigator.goBack() }}
                    containerStyle={SharedStyles.subRouteScreen.navbarStyle}
                />

                <View style={SharedStyles.subRouteScreen.containerStyle}>

                    {routes.map(item => {
                        return (
                            <TouchableHighlight key={item.routeName} underlayColor="#a4b6c826" activeOpacity={1} onPress={() => { this.handleEntryPress(item.routeName) }} style={SharedStyles.subRouteScreen.routeEntryStyle.touchableContainer}>
                                <View style={SharedStyles.subRouteScreen.routeEntryStyle.containerStyle}>

                                    <View style={SharedStyles.subRouteScreen.routeEntryStyle.iconTitleContainer}>
                                        <View style={SharedStyles.subRouteScreen.routeEntryStyle.iconContainer}>
                                            < Image source={item.icon} style={{ height: item.iconHeight, width: item.iconHeight * item.iconAR }} />
                                        </View>

                                        <View style={SharedStyles.subRouteScreen.routeEntryStyle.titleContainer}>
                                            <Text style={SharedStyles.subRouteScreen.routeEntryStyle.title}>{item.name}</Text>
                                            <Text style={SharedStyles.subRouteScreen.routeEntryStyle.subTitle}>{item.description}</Text>
                                        </View>

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

    handleEntryPress(routeName) {

        if (routeName == 'SendEmail') {
            this.handleRoute_sendEmail();
            return;
        }

        if (routeName == 'CallSupport') {
            this.handleRoute_callSupport();
            return;
        }

        this.props.navigation.navigate('MakeComplaint');
    }


    handleRoute_sendEmail() {
        let email = 'support@nimblex.com';
        Linking.openURL(`mailto:${email}`)


    }

    handleRoute_callSupport() {
        let phoneNumber = '08036860626';
        Linking.openURL(`tel:${phoneNumber}`)
    }
}

export default SettingsRootScreen;