import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'


const RegisterScreen = ({ navigation }) => {

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Correo inválido')
      .required('Por favor ingrese un correo'),
    password: Yup.string()
      .min(8, 'Mínimo 8 caracteres')
      .required('Por favor ingrese una contraseña')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        'Minimo 8 caracteres, una Mayúscula, una minúscula, un número'
      )
    ,
    confirmPassword: Yup.string()
      .min(8, 'Mínimo 8 caracteres')
      .oneOf([Yup.ref('password')], 'Su contraseña no coincide')
      .required('Por favor confirme su contraseña')
    
  })

  let signUp = (values) => {
    if (values.password === values.confirmPassword) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser);
          navigation.navigate("Home", { user: userCredential.user });
        })
        .catch((error) => {
          //setValidationMessage(error.message);
          console.log(error.message);
        });
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {signUp(values)}}
    >

      {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (



        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={60}
        >
          <View style={styles.inputContainer} >

            <View style={styles.titleContainer} >
              <Text style={styles.title}>REGISTRARME</Text>
            </View>

            <View style={styles.inputTextContainerGroup}>
              <View style={styles.inputTextContainer} >

                <Icon name="person" style={styles.iconInput} />

                <TextInput
                  autoCapitalize={false}
                  placeholder='Usuario'
                  style={styles.input}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}

                />
              </View>

              {touched.email && errors.email && (
                <Text style={styles.textValidationMessage}>{errors.email}</Text>
              )}

              <View style={styles.inputTextContainer} >

                <Icon name="lock" style={styles.iconInput} />

                <TextInput
                  placeholder='Contraseña'
                  autoCapitalize={false}
                  style={styles.input}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  onBlur={() => setFieldTouched('password')}
                />
              </View>

              {touched.password && errors.password && (
                <Text style={styles.textValidationMessage}>{errors.password}</Text>
              )}

              <View style={styles.inputTextContainer} >

                <Icon name="lock" style={styles.iconInput} />

                <TextInput
                  placeholder='Confirmar Contraseña'
                  style={styles.input}
                  autoCapitalize={false}
                  secureTextEntry
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                />
              </View>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.textValidationMessage}>{errors.confirmPassword}</Text>
              )}
            </View>


            <View style={[styles.buttonContainer, { backgroundColor: isValid ? '#5CB85C' : '#A5C9CA' }]}>
              <TouchableOpacity 
                onPress={handleSubmit}
                disabled={!isValid}
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
      )}
    </Formik>
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
    alignSelf: 'flex-start'
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
    //backgroundColor: '#5CB85C',
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