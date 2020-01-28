import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from '../actions/modal'

import ModalView from '../components/modalView'
import { PhotoContext } from '../context/PhotoContext'

const { height, width } = Dimensions.get('window')

const PhotoList = ({ item, navigation, showFullScreen }) => {

    const dispatch = useDispatch()
    const modalconfig = useSelector(state => state)

    const [photos, setPhotos] = useContext(PhotoContext)
    const [photoData, setPhotoData] = useState()
    const [photoId, setPhotoId] = useState()


    // useEffect(() => {
    //     setPhotoId('')
    //     setPhotoData('')
    // }, [modalconfig])

    // // useEffect(() => {
    // //     setPhotoId('')
    // // }, [isClose])


    const openHandler = (itemId) => { 
       
        let data = photos.filter(i => i.id === itemId)
        let id = data.map(i => i.id).toString()

        setPhotoId(id)
        setPhotoData(data)

        dispatch(openModal())
    }

    const closeHandler = () => {
        return dispatch(closeModal())
    }




    return (
        <View style={styles.list}>
            <ModalView
                photoData={photoData}
                photoId={photoId}
                closeHandler={closeHandler}
                modalconfig={modalconfig}
            />
            <TouchableOpacity style={styles.photo} onPress={() => showFullScreen(item.id)} >
                <Image style={{
                    width: 180,
                    height: 200,
                    borderRadius: 5
                }}
                    source={{ uri: item.urls.regular }} />
                <TouchableOpacity style={{
                    width: 180,
                    height: 27,
                    marginTop: -27,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'gray',
                    opacity: 0.7
                }}
                    onPress={() => openHandler(item.id)}
                >
                    <Text style={{ fontWeight: '600', color: 'white' }}>Description</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', alignItems: 'center', marginTop: 5 }}>{item.user.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


export default PhotoList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: width / 2,
        height: height * 0.3,
        alignItems: 'center',
        flexDirection: 'column',

    },
    photo: {
        width: 180,
        height: 230,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

    }
})