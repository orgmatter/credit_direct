
import React from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Constants } from 'expo';

import AuthStack from './screens/auth/index.js';
import AppStack from './screens/app/index.js';

import NotificationBox from './components/NotificationBox/index.js';

import LoadingOverlay from './components/LoadingOverlay/index.js';


class RootScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            isReady: false,
        }
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#263e66' }}>
                <StatusBar barStyle="light-content" />
                {/* <NotificationBox show={true} notificationType={'success'} message={'Hey there. Stuff went haywire. We might need'} /> */}
                <View style={{ height: Constants.statusBarHeight, backgroundColor: '#263e66' }}></View>
                {/* <LoadingOverlay show={this.props.showLoadingOverlay} /> */}

                {!this.props.loggedIn && (
                    <AuthStack />
                )}

                {this.props.loggedIn && (
                    <AppStack />
                )}

            </View>
        );


    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        showLoadingOverlay: state.loadingOverlay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);


