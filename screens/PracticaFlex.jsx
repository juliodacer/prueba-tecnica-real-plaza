import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PracticaFlex = () => {
    return (
        <View style={styles.container} >
            <View style={[styles.box, {backgroundColor: '#f69e0b'}]} />
        </View>
    )
}

export default PracticaFlex

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    box: {
        width: 100,
        height: 100
    }
})