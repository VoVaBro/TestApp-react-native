
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
                    <ScrollView>
                    <Text style={{ fontWeight: '500', fontSize: 20 }}>Author: {i.user.name} </Text>
                    <Text style={{ fontWeight: '500', fontSize: 20 }}>Description: {i.description} </Text>
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
        backgroundColor: '#F85DC6',
        borderRadius: 15,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
        marginHorizontal: width / 11
    }
})