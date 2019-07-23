import React, { Component } from 'react';
import { Animated, Text, View, Image, Easing } from 'react-native';
import { connect } from 'react-redux';
import DrawerLayout from 'react-native-drawer-layout';


////components
import DrawerView from './components/DrawerView/index.js';
import Navbar from '../../../components/Navbar/index.js';
import NoCurrentLoanContent from './components/NoCurrentLoanContent/index.js';
import CurrentLoanContent from './components/CurrentLoanContent/index.js';

//redux actions
import { setLoadingOverlayShowing } from '../../../store/actions/LoadingOverlayActions.js';
import { setLoggedInState } from '../../../store/actions/AuthActions.js';

class DashboardScreen extends Component {

    constructor() {
        super();

        this.state = {
            viewScale: new Animated.Value(1.1)
        }

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);

        this.animateDashboardLoad = this.animateDashboardLoad.bind(this);
    }

    componentDidMount() {
        this.animateDashboardLoad();
    }

    render() {
        let currentLoan = this.props.currentLoan;

        let content = null;

         if (currentLoan.loading || currentLoan.loadingError || currentLoan.data == null) {
            content = <NoCurrentLoanContent loading={currentLoan.loading} error={currentLoan.loadingError} navigation={this.props.navigation} />

        } else {
            content = <CurrentLoanContent data={this.props.currentLoan.data} navigation={this.props.navigation}/>
        }

        return (
            <DrawerLayout ref='drawer' drawerWidth={290} renderNavigationView={() => {
                return <DrawerView
                    closeDrawerHandler={this.closeDrawer}
                    navigation={this.props.navigation}
                    logoutButtonHandler={() => { this.props.setLoggedInState(false) }}
                />
            }}>

                <Animated.View style={{ flex: 1, transform: [{ scale: this.state.viewScale }] }}>
                    <Navbar title={'Dashboard'}
                        leftButton={< Image source={require('../../../../assets/menu.png')} style={{ width: 20, height: 20 / 1.34 }} />} leftButtonHandler={this.openDrawer}
                        rightButton={< Image source={require('../../../../assets/bell.png')} style={{ width: 16, height: 16 / 0.86 }} />} rightButtonHandler={() => { }}
                    />
                    {content}
                </Animated.View>

            </DrawerLayout>
        );
    }

    openDrawer() {
        this.refs['drawer'].openDrawer();
    };
    closeDrawer() {
        this.refs['drawer'].closeDrawer();
    };


    animateDashboardLoad() {

        Animated.timing(this.state.viewScale, {
            toValue: 1,
            duration: 300,
            easing: Easing.quad,
            useNativeDriver: true
        }).start();

    }

}


const mapStateToProps = (state) => {
    return {
        currentLoan: state.currentLoan
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingOverlayShowing: (value) => dispatch(setLoadingOverlayShowing(value)),
        setLoggedInState: (value) => dispatch(setLoggedInState(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);








