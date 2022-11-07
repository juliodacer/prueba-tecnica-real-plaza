import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator();

const NavigationStack = () => (
    <Stack.Navigator>
        {/* <Stack.Screen options={{headerShadow: false}} name="PracticaFlex" component={PracticaFlex} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    </Stack.Navigator>
);

export default NavigationStack;

