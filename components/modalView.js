
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../actions/modal'
import Modal from 'react-native-modal'
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

const ModalView = ({}) => {

    const modalconfig = useSelector(state => state)
    const dispatch = useDispatch()

   

    console.log(12123123, )
    return (
        <Modal
            isVisible={modalconfig}
            onBackdropPress={() => dispatch(closeModal())}
        >
            <View style={styles.modal}>

                <Text style={{ fontWeight: '500', fontSize: 20 }}>Athor: {}</Text>
                <Text>
                    <Text style={{ fontWeight: '400', fontSize: 16 }}>Description: </Text>
                    <Text style={{ fontWeight: '400', fontSize: 16 }}>  </Text>
                </Text>
            </View>
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