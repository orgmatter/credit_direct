import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationConfiguration } from '../../../utils/NavigationTransition.js';

import EmploymentStatusScreen from '../../app/newloan/employmentstatus/index.js';
import BvnValidateScreen from '../../app/newloan/bvnvalidate/index.js';
import CreateLoanScreen from '../../app/newloan/createloan/index.js';
import UploadDocumentsScreen from '../../app/newloan/uploaddocuments/index.js';


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