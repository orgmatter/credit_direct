

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationConfiguration } from '../../utils/NavigationTransition.js';

import RootScreen from './root/index.js';
import LoginScreen from './login/index.js';
import SignupScreen from './signup/index.js';

const PageStack = createStackNavigator(
    {
        Root: { screen: RootScreen },
        Login: { screen: LoginScreen },
        Signup: { screen: SignupScreen }
    },
    { ...navigationConfiguration }
)


export default createAppContainer(PageStack);