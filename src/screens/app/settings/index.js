import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationConfiguration } from '../../../utils/NavigationTransition.js';

import SettingsRootScreen from './root/index.js';

import ProfileScreen from './profile/index.js';

const PageStack = createStackNavigator(
    {
        SettingsRoot: { screen: SettingsRootScreen },
        Profile: {screen: ProfileScreen}
    },
    { ...navigationConfiguration }
)




let PageStackNavigator = createAppContainer(PageStack);

const Wrapper = (props) => {

    return (
        <PageStackNavigator screenProps={{ parentNavigator: props.navigation }} />
    );

}
export default Wrapper;