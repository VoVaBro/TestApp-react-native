import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import HomeStackNavigator from './homeNavigation'
import PhotoStackNavigator from './photoNavigation'

const AppNavigator = createBottomTabNavigator({
    Home: HomeStackNavigator,
    Photo: PhotoStackNavigator
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        style: {
            backgroundColor: '#7E4BFF',
            opacity: 0.7
        }
    }
})



export default createAppContainer(AppNavigator)