import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import {navigationConfiguration} from '../../../utils/NavigationTransition.js';

import ScheduleScreen from './schedule/index.js';

const PageStack = createStackNavigator(
    {
        Schedule: { screen: ScheduleScreen },
    },
    {...navigationConfiguration}
)




let PageStackNavigator = createAppContainer(PageStack);

class Demo extends Component {
    render() {
        return(
            <PageStackNavigator screenProps={{parentNavigator: this.props.navigation}}/>
        );
    }
}
export default Demo;