import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('window')




const PhotoList = ({openHandler, closeHandler, item, navigation, showFullScreen }) => {

    return (
        <View style={styles.list}>
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
                    <Text style={{ fontSize: 14, fontWeight: '600', alignItems: 'center', marginTop: 5, color: '#FFBA00' }}>{item.user.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


export default PhotoList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 10,
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