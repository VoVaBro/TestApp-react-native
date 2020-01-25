import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen'
import PhotoScreen from '../screens/PhotoScreen'

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Photo Galary'
        },
    },
    Photo: {
        screen: PhotoScreen,
        navigationOptions: {
            title: 'Full screen'
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#F85DC6', opacity: 0.9}
    }
})


export default HomeStackNavigator;

