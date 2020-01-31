import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window')



export default function PhotoScreen(props) {

  const item = props.navigation.getParam("element")

  return (
    <View style={styles.container}>
      {item.map( i =>
       <Image key={i.id} style={{width: width, height: height}} source={{uri: i.urls.regular}}/>
      )}
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

