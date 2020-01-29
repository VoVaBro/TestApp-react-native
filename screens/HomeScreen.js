import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from '../actions/modal'

import PhotoList from '../components/PhotoList'
import useFetch from '../hooks/useFetch'

const { width, height } = Dimensions.get('screen')

const API_ID = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

import Modal from '../components/modalView'

export default function HomeScreen({ navigation }) {

  const [count, setCount] = useState(3)
  const [modalDescId, setModalDescId] = useState()


  const [data, loading] = useFetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_ID}`)


  const dispatch = useDispatch()
  const modalconfig = useSelector(state => state)

  const openHandler = (itemId) => {
    setModalDescId(itemId)
    dispatch(openModal())
  }

  const closeHandler = () => {
    dispatch(closeModal())
  }

  const showFullScreen = (photoId) => {
    const element = data.filter(i => i.id === photoId)
    navigation.navigate('Photo', {
      element: element
    })
  }


  if (!loading) {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <View>
              <PhotoList
                photos={data}
                navigation={navigation}
                item={item}
                showFullScreen={showFullScreen}
                openHandler={openHandler}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <Modal
          data={data}
          modalconfig={modalconfig}
          closeHandler={closeHandler}
          modalDescId={modalDescId}
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
