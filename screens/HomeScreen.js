import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';


const API_ID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export default function HomeScreen() {

  const [isLoading, setLoading] = useState(true)
  const [photos, setPhotos] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPhotos()
  }, [count])

     const getPhotos = async () => {
    const response = await fetch (`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_ID}`)
    const json = await response.json();
    console.log(json)
  }

if (isLoading){
  return (
    <View style={styles.container}>
      <FlatList/>
    </View>
  );
}
return (
  <View style={styles.container}>
    <ActivityIndicator syze='large' color='gray'/>
  </View>
)
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
