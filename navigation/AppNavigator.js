import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

import HomeStackNavigator from './homeNavigation'
import PhotoStackNavigator from './photoNavigation'

const AppNavigator = createBottomTabNavigator({
    Home: HomeStackNavigator,
    Photo: PhotoStackNavigator
})



export default createAppContainer(AppNavigator)