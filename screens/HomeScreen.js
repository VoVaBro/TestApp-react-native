import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Dimensions} from 'react-native';


import PhotoList from '../components/PhotoList'
import {PhotoContext} from '../context/PhotoContext'

const { width, height } = Dimensions.get('screen')

export default function HomeScreen({ navigation }) {

  const [photos, setPhotos] = useContext(PhotoContext)
  const [isLoading, setLoading] = useState(false)

  // console.log(photos.length)
  

  const showFullScreen = (photoId) => {
   const element = photos.filter(i => i.id === photoId)
    navigation.navigate('Photo', {
      element: element
    })
}

if(photos.length > 1){
  setLoading(true)
}

  if (isLoading) {
    return (
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={photos}
            renderItem={({ item }) => (
              <View>
                <PhotoList
                  navigation={navigation}
                  item={item}
                  showFullScreen={showFullScreen}
              />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator syze='large' color='black' />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E4BFF',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
