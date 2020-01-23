import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

import PhotoScreen from '../screens/PhotoScreen'

const  PhotoStackNavigator = createStackNavigator({
    Photo: {
        screen: PhotoScreen,
        navigationOptions: {
            title: 'Categorys'
        }
    }
}, {
    defaultNavigationOptions:{ headerStyle: {backgroundColor: '#F85DC6', opacity: 0.8}}
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
