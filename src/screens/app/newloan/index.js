import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationConfiguration } from '../../../utils/NavigationTransition.js';

import EmploymentStatusScreen from './employmentstatus/index.js';
import BvnValidateScreen from './bvnvalidate/index.js';
import CreateLoanScreen from './createloan/index.js';
import UploadDocumentsScreen from './uploaddocuments/index.js';


const PageStack = createStackNavigator(
    {
        EmploymentStatus: {screen: EmploymentStatusScreen},
        BvnValidate: {screen: BvnValidateScreen},
        CreateLoan: { screen: CreateLoanScreen },
        UploadDocuments: {screen: UploadDocumentsScreen},
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