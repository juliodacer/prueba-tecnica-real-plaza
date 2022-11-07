import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const LoginScreen = ({ navigation }) => {

    if (auth.currentUser) {
        navigation.navigate("Home");
    } else {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate("Home");
            }
        });
    }

    const [errorMessage, setErrorMessage] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const login = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigation.navigate("Home", { user: userCredential.user });
                    setErrorMessage("");
                    setEmail("");
                    setPassword("");
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                });
        } else {
            setErrorMessage("Por favor, ingrese un correo y una constraseña");
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={60}
        >
            <View style={styles.inputContainer} >

                <View style={styles.titleContainer} >
                    <Text style={styles.title}>INICIAR SESIÓN</Text>
                </View>

                { errorMessage && (
                    <Text style={styles.textValidationMessage}>{errorMessage}</Text>
                )}


                <View style={styles.inputTextContainerGroup}>
                    <View style={styles.inputTextContainer} >

                        <Icon name="person" style={styles.iconInput} />

                        <TextInput
                            placeholder='Usuario'
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    <View style={styles.inputTextContainer} >

                        <Icon name="lock" style={styles.iconInput} />

                        <TextInput
                            placeholder='Contraseña'
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => login() }
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>INGRESAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.goToContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.textGoTo}>Registrarme</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

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
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
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
    textValidationMessage: {
        color: 'red',
        alignSelf: 'center'
    },
    input: {
        marginLeft: 10
    },
    iconInput: {
        color: 'rgba(0, 0, 0, 0.5)',
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