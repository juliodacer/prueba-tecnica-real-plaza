import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter'

const OptionHome = ({ source, text, style }) => {

    const [fontsLoaded ]= useFonts({
        Inter_700Bold,
        Inter_300Light
    });

    if(!fontsLoaded){
        return <></>
    }

    return (
        <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.circleView} activeOpacity={0.7} >
                <Image source={source} style={[styles.image, style]} />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default OptionHome

const styles = StyleSheet.create({
    optionContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleView: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: "center",
    },
    text: {
        marginTop: 5,
        fontSize: 12,
        fontFamily: 'Inter_300Light'
    }
})