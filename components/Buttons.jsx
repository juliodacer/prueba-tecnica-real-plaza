import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../assets/constants/Colors'
import { useFonts } from 'expo-font'
import { Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter'

const Buttons = ({ onPress, text, disabled, style }) => {

    const [fontsLoaded ]= useFonts({
        Inter_700Bold,
        Inter_300Light
    });

    if(!fontsLoaded){
        return <></>
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.button, style]}
                disabled={disabled}
            >
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    textButton: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        fontSize: 15,
        fontFamily: "Inter_700Bold",
        color: Colors.white
    },
})