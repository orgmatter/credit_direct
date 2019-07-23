import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image,
    ScrollView
} from 'react-native';


class DrawerView extends Component {
    constructor() {
        super();

        this.state = {
            routes: [
                {
                    name: 'Dashboard',
                    routeName: 'Dashboard',
                    icon: require('../../../../../../assets/screens/dashboard/dashboard.png'),
                    aspectRatio: 0.9
                },
                {
                    name: 'New Loan',
                    routeName: 'NewLoan',
                    icon: require('../../../../../../assets/screens/dashboard/new_loan.png'),
                    aspectRatio: 1
                },
                {
                    name: 'Repayment Schedule',
                    routeName: 'RepaymentSchedule',
                    icon: require('../../../../../../assets/screens/dashboard/calendar.png'),
                    aspectRatio: 1
                },
                {
                    name: 'Loan History',
                    routeName: 'LoanHistory',
                    icon: require('../../../../../../assets/screens/dashboard/extras.png'),
                    aspectRatio: 0.95
                },
                {
                    name: 'Settings',
                    routeName: 'Settings',
                    icon: require('../../../../../../assets/screens/dashboard/settings.png'),
                    aspectRatio: 1
                },
                {
                    name: 'Support',
                    routeName: 'Support',
                    icon: require('../../../../../../assets/screens/dashboard/support.png'),
                    aspectRatio: 1
                }
            ]
        }

        this.handleItemPress = this.handleItemPress.bind(this);
    }


    render() {
        return (
            <View style={{ flex: 1, marginTop: 0, marginBottom: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, backgroundColor: 'white' }}>

                <View style={{ position: 'absolute', left: 0, top: -40, right: 0, height: 240 }}>
                    <Image source={require('../../../../../../assets/screens/dashboard/curves.png')} style={{ width: 290, height: 290 }} />
                </View>

                <View style={{ height: 240, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, marginLeft: 20 }}>
                        <View style={{ height: 60, width: 60, backgroundColor: '#ffffff', borderRadius: 40 }}>

                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 18, color: '#ffffff', marginBottom: 5 }}>Jane Foster</Text>
                            <Text style={{ fontSize: 14, color: '#61DADA' }}>hi@jfoster.me</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 30 }}>

                        <View style={{}}>
                            <Text style={{ fontSize: 12, color: '#ffffff4d', fontWeight: 'bold', marginBottom: 5 }}>Customer ID</Text>
                            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>1235490800</Text>
                        </View>

                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <Image source={require('../../../../../../assets/screens/dashboard/box_dashed.png')} style={{ width: 12, height: 11 }} />
                        </View>

                        <View style={{}}>
                            <Text style={{ fontSize: 12, color: '#ffffff4d', fontWeight: 'bold', marginBottom: 5 }}>Mandate RRR</Text>
                            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>17900</Text>
                        </View>

                    </View>

                </View>

                <ScrollView contentContainerStyle={{}}>
                    {this.state.routes.map(item => {
                        return (
                            <View key={item.routeName} style={{ marginLeft: 20, marginRight: 20, marginBottom: 5 }}>
                                <TouchableWithoutFeedback onPress={() => {this.handleItemPress(item.routeName) }}>
                                    <View style={{ flexDirection: 'row', height: 55, backgroundColor: this.props.navigation.state.routeName == item.routeName ? '#ffffff' : '#ffffff', borderRadius: 10, alignItems: 'center', paddingLeft: 20 }}>
                                        <View style={{ marginRight: 30 }}>
                                            <Image source={item.icon} style={{ width: 23, height: 23 * item.aspectRatio }} />
                                        </View>

                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4F4F4F' }}>{item.name}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })}

                    <View style={{}}>
                        <TouchableWithoutFeedback onPress={this.props.logoutButtonHandler}>
                            <View style={{ flexDirection: 'row', height: 55, backgroundColor: '#00000008', alignItems: 'center', paddingLeft: 40 }}>
                                <View style={{ marginRight: 30 }}>
                                    <Image source={require('../../../../../../assets/screens/dashboard/logout.png')} style={{ width: 23, height: 23 }} />
                                </View>

                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4F4F4F' }}>Logout</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </ScrollView>

            </View>
        );
    }

    handleItemPress(value) {
        
        this.props.closeDrawerHandler();
        // setTimeout(() => {this.props.closeDrawerHandler()}, 0);
        // setTimeout(() => {this.props.navigation.navigate(value)}, 10000);
        this.props.navigation.navigate(value);
    }
}



export default DrawerView;