import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationConfiguration } from '../../../utils/NavigationTransition.js';

import SupportRootScreen from './root/index.js';

import MakeComplaintScreen from './makecomplaint/index.js';


const PageStack = createStackNavigator(
    {
        SupportRoot: { screen: SupportRootScreen },
        MakeComplaint: { screen: MakeComplaintScreen },
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