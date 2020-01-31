import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import PhotoScreen from '../screens/PhotoScreen'



const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'PHOTO GALARY',
        }
    },
    Photo: {
        screen: PhotoScreen,
        navigationOptions: {
            headerShown: false,
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#F85DC6', opacity: 0.9 }
    }
})



export default createAppContainer(AppNavigator)