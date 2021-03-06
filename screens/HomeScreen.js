import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Dimensions, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from '../actions/modal'

import PhotoList from '../components/PhotoList'
import Modal from '../components/modalView'


import useFetch from '../hooks/useFetch'

const { width, height } = Dimensions.get('screen')

const API_ID = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'


export default function HomeScreen({ navigation }) {

  const [count, setCount] = useState(20)
  const [modalDescId, setModalDescId] = useState()
  const [refresh, setRefreshing] = useState(false)

  const [data, loading, fetchUrl] = useFetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_ID}`)


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


  const hendleRefresh = () => {
    fetchUrl()
    setRefreshing(loading)
  }

  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          data={data}
          refreshing={refresh}
          onRefresh={hendleRefresh}
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
      </SafeAreaView>
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
    backgroundColor: '#CA1F3D',
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
