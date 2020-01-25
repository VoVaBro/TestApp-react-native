import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios'

import PhotoList from '../components/PhotoList'

const API_ID = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

export default function HomeScreen() {

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
                item={item}
              />
            </View>
          )}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator syze='large' color='black'/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E4BFF',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
