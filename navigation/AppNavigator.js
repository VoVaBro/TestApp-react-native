import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import PhotoScreen from '../screens/PhotoScreen'



const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'PHOTO GALARY',
            headerTitleStyle: {
                color: '#FFBA00',
                opacity: 0.9
              }
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
        headerStyle: {  backgroundColor: '#2E0E12', opacity: 1 }
    }
})



export default createAppContainer(AppNavigator)