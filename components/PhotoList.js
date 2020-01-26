import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { closeModal, openModal } from '../actions/modal'


import Modal from 'react-native-modal'


const { height, width } = Dimensions.get('window')

const PhotoList = ({ item, navigation, showFullScreen }) => {

    const modalconfig = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <View style={styles.list}>

            <Modal
                isVisible={modalconfig}
                onBackdropPress={() => dispatch(closeModal())}

            >
                <View style={styles.modal}>

                    <Text style={{ fontWeight: '500', fontSize: 20 }}>Athor: {item.user.name}</Text>
                    <Text>
                        <Text style={{ fontWeight: '400', fontSize: 16 }}>Description: {item.description}. </Text>
                        <Text style={{ fontWeight: '400', fontSize: 16 }}> {item.alt_description} </Text>
                    </Text>


                </View>

            </Modal>
            <TouchableOpacity style={styles.photo} onPress={showFullScreen}>
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
                    onPress={() => dispatch(openModal())}
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

    },
    modal: {
        width: 300,
        height: 200,
        backgroundColor: 'green',
        borderRadius: 15,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        marginHorizontal: width / 11
    }
})