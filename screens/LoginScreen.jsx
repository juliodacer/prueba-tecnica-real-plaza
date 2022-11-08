import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import HeaderForm from '../components/HeaderForm';
import { stylesForm } from '../assets/constants/Styles';

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
            style={stylesForm.containerForm}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={60}
        >
            <View style={stylesForm.inputContainerForm} >
                <HeaderForm title={"INICIAR SESIÓN"} />
                {errorMessage && (
                    <View style={stylesForm.containerError}>
                        <Text style={stylesForm.textValidationMessage}>{errorMessage}</Text>
                    </View>
                )}

                <View style={stylesForm.inputTextContainerGroup}>
                    <View style={stylesForm.inputTextContainer} >
                        <Icon name="person" style={stylesForm.iconInput} />
                        <TextInput
                            placeholder='Usuario'
                            style={stylesForm.input}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    <View style={stylesForm.inputTextContainer} >
                        <Icon name="lock" style={stylesForm.iconInput} />
                        <TextInput
                            placeholder='Contraseña'
                            style={stylesForm.input}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />
                    </View>
                </View>
                <Buttons onPress={() => login()} text={'INGRESAR'} />
                <Footer onPress={() => navigation.navigate('Register')} text={"Registrame"} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;