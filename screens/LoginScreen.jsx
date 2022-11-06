import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer} >

                <View style={styles.titleContainer} >
                    <Text style={styles.title}>INICIAR SESIÓN</Text>
                </View>

                <View style={styles.inputTextContainerGroup}>
                    <View style={styles.inputTextContainer} >

                        <Icon name="user" style={styles.iconInput} />

                        <TextInput
                            placeholder='Usuario'
                            style={styles.input}

                        />
                    </View>

                    <View style={styles.inputTextContainer} >

                        <Icon name="lock" style={styles.iconInput} />

                        <TextInput
                            placeholder='Contraseña'
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { }}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>INGRESAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.goToContainer}>
                    <TouchableOpacity onPress={() => { }}
                    >
                        <Text style={styles.textGoTo}>Registrarme</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        justifyContent: 'center',
        marginHorizontal: 25,
        backgroundColor: '#F5F5F5'
    },
    inputContainer: {
        marginHorizontal: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    },
    titleContainer: {
        height: 64,
        backgroundColor: '#29367C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: '700'
    },
    inputTextContainerGroup: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    inputTextContainer: {
        borderColor: '#00000',
        borderBottomWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        marginLeft: 10
    },
    iconInput: {
        color: "#000",
        fontSize: 25,
        marginLeft: 5
    },

    buttonContainer: {
        backgroundColor: '#5CB85C',
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
        fontWeight: '700',
        color: '#ffffff'
    },
    goToContainer: {
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    textGoTo: {
        color: '#1469BE',
        borderColor: '#1469BE',
        borderBottomWidth: 1,
        fontWeight: '700',
    }
})