import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Dimensions, Button } from 'react-native';
import Modal from 'react-native-modal'
import axios from 'axios'

import PhotoList from '../components/PhotoList'

const API_ID = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

const { width, height } = Dimensions.get('screen')


export default function HomeScreen({ navigation }) {

  const [modalView, setModalView] = useState(true)
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

  const closeModal = () => {
    setModalView(!modalView)
  }

  if (isLoading) {
    return (
      <View style={styles.container}>

        <Modal visible={modalView}>
          <View style={styles.modal}>

            <Button title='Close' onPress={closeModal}/>
          </View>

        </Modal>

        <FlatList
          numColumns={2}
          data={photos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <PhotoList
                navigation={navigation}
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
      <ActivityIndicator syze='large' color='black' />
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
  modal: {
    width: 200,
    height: 500,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width / 5
  }
});
