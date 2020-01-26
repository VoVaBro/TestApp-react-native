import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import axios from 'axios'

import PhotoList from '../components/PhotoList'



const API_ID = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

const { width, height } = Dimensions.get('screen')



export default function HomeScreen({ navigation }) {

  const [isLoading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([]);
  const [count, setCount] = useState(30);

  useEffect(() => {
    getPhotos()
  }, [count])

  const getPhotos = async () => {
    const response = await axios.get(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_ID}`)

    setPhotos(response.data)
    setLoading(true)
  }

  const showFullScreen = () => {
    navigation.navigate('Photo')
}


  if (isLoading) {
    return (
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={photos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <PhotoList
                  navigation={navigation}
                  item={item}
                  showFullScreen={showFullScreen}
                />
              </View>
            )}
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
