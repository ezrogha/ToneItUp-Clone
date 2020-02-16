import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import signUpScreen from '../screens/SignUp';
import loginScreen from '../screens/Login';
import landingScreen from '../screens/Landing'
import ForgotPasswordScreen from '../screens/ForgotPassword'

const landingStackNavigator = createStackNavigator({
    Landing: {
        screen: landingScreen
    },
    SignUp: {
        screen: signUpScreen
    },
    Login: {
        screen: loginScreen
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen
    },
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(landingStackNavigator)
