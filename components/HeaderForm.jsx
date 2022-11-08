import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../assets/constants/Colors'
import { useFonts } from 'expo-font'
import { Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter'

const HeaderForm = ({title}) => {

    const [fontsLoaded ]= useFonts({
        Inter_700Bold,
        Inter_300Light
    });

    if(!fontsLoaded){
        return <></>
    }

    return (
        <View style={styles.titleContainer} >
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default HeaderForm

const styles = StyleSheet.create({
    titleContainer: {
        height: 64,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: Colors.white,
        fontFamily: 'Inter_700Bold'
    },
})