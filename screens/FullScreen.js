import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function FullScreen(props) {


  const item = props.navigation.getParam("element")

 
  return (
    <View style={styles.container}>
      <Text>FullScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});