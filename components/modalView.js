
import React from 'react'

import Modal from 'react-native-modal'
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

const ModalView = ({ data, modalDescId, closeHandler, modalconfig }) => {

   const description = data.filter(d => d.id == modalDescId )

    return (
        <Modal
            isVisible={modalconfig}
            onBackdropPress={closeHandler}
        >
            {description.map(i => (
                <View key={i.id} style={styles.modal}>
                    <ScrollView
                    showsHorizontalScrollIndicator={false}
                    >
                    <Text style={{ fontWeight: '500', fontSize: 20, color:'#FFBA00', opacity: 0.9 }}>Author: {i.user.name} </Text>
                    <Text style={{ fontWeight: '500', fontSize: 20, color:'#FFBA00', opacity: 0.9 }}>Description: {i.description} </Text>
                    </ScrollView>
                </View>
            ))}
        </Modal>
    )
}

export default ModalView;

const styles = StyleSheet.create({
    modal: {
        width: 300,
        height: 200,
        backgroundColor: '#2E0E12',
        borderRadius: 15,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        marginHorizontal: width * 0.1,
        borderColor: '#FFBA00',
        borderWidth: 0.5
    }
})