import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Colors from '../assets/constants/Colors'

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('Login')
    }, 3000)
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/logo_real_plaza.png')} style={styles.image} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.violet
    },
    image: {
        width: 80,
        height: 80
    }
})