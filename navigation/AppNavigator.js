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
        labelStyle: {
        fontSize: 15,
        },
        activeTintColor: 'white',
        inactiveTintColor: '#F85DC6',
        style: {
            backgroundColor: '#2C1843',
        }
    }
})



export default createAppContainer(AppNavigator)