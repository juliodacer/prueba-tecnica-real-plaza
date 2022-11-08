import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../assets/constants/Colors'
import { useFonts } from 'expo-font'
import { Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter'

const Footer = ({ onPress, text }) => {

    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_300Light
    });

    if (!fontsLoaded) {
        return <></>
    }

    return (
        <View style={styles.goToContainer}>
            <TouchableOpacity onPress={onPress}
            >
                <Text style={styles.textGoTo}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    goToContainer: {
        backgroundColor: Colors.backgroundAlternative,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    textGoTo: {
        color: Colors.blueLight,
        borderColor: Colors.blueLight,
        borderBottomWidth: 1,
        fontFamily: 'Inter_700Bold'
    }
})