import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase';
import { Formik } from 'formik';
import * as Yup from 'yup'
import HeaderForm from '../components/HeaderForm';
import { stylesForm } from '../assets/constants/Styles';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';

const RegisterScreen = ({ navigation }) => {

  const [errorMessage, setErrorMessage] = React.useState("");

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
          navigation.navigate("Login", { user: userCredential.user });
        })
        .catch((error) => {
          setErrorMessage(error.message);
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
      onSubmit={values => { signUp(values) }}
    >

      {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (

        <KeyboardAvoidingView
          style={stylesForm.containerForm}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={60}
        >
          <View style={stylesForm.inputContainerForm} >

            <HeaderForm title={"REGISTRARME"} />

            {errorMessage && (
                    <View style={stylesForm.containerError}>
                        <Text style={stylesForm.textValidationMessage}>{errorMessage}</Text>
                    </View>
                )}

            <View style={stylesForm.inputTextContainerGroup}>
              <View style={stylesForm.inputTextContainer} >

                <Icon name="person" style={stylesForm.iconInput} />

                <TextInput
                  autoCapitalize={false}
                  placeholder='Usuario'
                  style={stylesForm.input}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}

                />
              </View>

              {touched.email && errors.email && (
                <Text style={[stylesForm.textValidationMessage, {alignSelf: 'flex-start'}]}>{errors.email}</Text>
              )}

              <View style={stylesForm.inputTextContainer} >

                <Icon name="lock" style={stylesForm.iconInput} />

                <TextInput
                  placeholder='Contraseña'
                  autoCapitalize={false}
                  style={stylesForm.input}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  onBlur={() => setFieldTouched('password')}
                />
              </View>

              {touched.password && errors.password && (
                <Text style={[stylesForm.textValidationMessage, {alignSelf: 'flex-start'}]}>{errors.password}</Text>
              )}

              <View style={stylesForm.inputTextContainer} >

                <Icon name="lock" style={stylesForm.iconInput} />

                <TextInput
                  placeholder='Confirmar Contraseña'
                  style={stylesForm.input}
                  autoCapitalize={false}
                  secureTextEntry
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                />
              </View>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={[stylesForm.textValidationMessage, {alignSelf: 'flex-start'}]}>{errors.confirmPassword}</Text>
              )}
            </View>

            <Buttons onPress={handleSubmit} text={"REGISTRAR"} disabled={!isValid} style={{ backgroundColor: isValid ? '#5CB85C' : '#A5C9CA' }} />
            <Footer onPress={() => navigation.navigate('Login')} text={"Cancelar"} />

          </View>

        </KeyboardAvoidingView>
      )}
    </Formik>
  )
}

export default RegisterScreen;
