import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Contraseñas no coinciden");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser);
          navigation.navigate("Home", { user: userCredential.user });
        })
        .catch((error) => {
          setValidationMessage(error.message);
        });
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
          <Text style={styles.title}>REGISTRARME</Text>
        </View>

        <Text style={styles.textValidationMessage}>{validationMessage}</Text>
    
        <View style={styles.inputTextContainerGroup}>
          <View style={styles.inputTextContainer} >

            <Icon name="person" style={styles.iconInput} />

            <TextInput
              placeholder='Usuario'
              style={styles.input}
              value={email}
              onChangeText={setEmail}

            />
          </View>

          <View style={styles.inputTextContainer} >

            <Icon name="lock" style={styles.iconInput} />

            <TextInput
              placeholder='Contraseña'
              style={styles.input}
              value={password}
              onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)}
              secureTextEntry
            />
          </View>

          <View style={styles.inputTextContainer} >

            <Icon name="lock" style={styles.iconInput} />

            <TextInput
              placeholder='Confirmar Contraseña'
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={signUp}
            style={styles.button}
          >
            <Text style={styles.textButton}>REGISTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.goToContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textGoTo}>Cancelar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

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
  
  textValidationMessage: {
    color: 'red',
    alignSelf: 'center'
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