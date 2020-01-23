import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

import PhotoScreen from '../screens/PhotoScreen'

const  PhotoStackNavigator = createStackNavigator({
    Photo: {
        screen: PhotoScreen,
        navigationOptions: {
            title: 'Full screen'
        }
    }
}, {
    defaultNavigationOptions:{ headerStyle: {backgroundColor: '#FEC868'}}
})


export default PhotoStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
