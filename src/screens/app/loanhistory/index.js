import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationConfiguration } from '../../../utils/NavigationTransition.js';

import RootScreen from './root/index.js';
import DetailsScreen from './details/index.js';



const PageStack = createStackNavigator(
    {
        Root: {screen: RootScreen},
        Details: {screen: DetailsScreen}
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