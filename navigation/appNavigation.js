import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { LogBox } from 'react-native';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/Loginscreen';
import Screen from '../screens/Screen';
import RegistroScreen from '../screens/Registrarse';
RegistroScreen

const Stack = createNativeStackNavigator();


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen'>
      <Stack.Screen name="Screen" options={{headerShown: false}} component={Screen} />
      <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="Regis" options={{headerShown: false}} component={RegistroScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
        <Stack.Screen name="Cart" options={{headerShown: false}} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
