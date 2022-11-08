import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'
import SplashScreen from '../screens/SplashScreen'

const Stack = createNativeStackNavigator();

const NavigationStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen options={{headerShadow: false}} name="PracticaFlex" component={PracticaFlex} /> */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
);

export default NavigationStack;

