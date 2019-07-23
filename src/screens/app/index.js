

import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import {navigationConfiguration} from '../../utils/NavigationTransition.js';

import DashboardScreen from './dashboard/index.js';
import LoanDetailsScreen from './loandetails/index.js';
import NewLoanScreen from './newloan/index.js';
import RepaymentScheduleScreen from './repaymentschedule/index.js';
import LoanHistoryScreen from './loanhistory/index.js';
import SettingsScreen from './settings/index.js';
import SupportScreen from './support/index.js';

const PageStack = createStackNavigator(
    {
        Dashboard: { screen: DashboardScreen },
        LoanDetails: { screen: LoanDetailsScreen },
        NewLoan: { screen: NewLoanScreen },
        RepaymentSchedule: { screen: RepaymentScheduleScreen },
        LoanHistory: { screen: LoanHistoryScreen },
        Settings: {screen: SettingsScreen},
        Support: {screen: SupportScreen}
    },
    {...navigationConfiguration}
)


export default createAppContainer(PageStack);