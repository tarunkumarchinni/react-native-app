import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import DashboardScreen from './components/DashboardScreen';
import SplashScreen from './components/SplashScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  return (
    <>
      <TailwindProvider>
         <NavigationContainer>
         <Stack.Navigator initialRouteName='Welcome'>
           <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
           <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
           <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
           <Stack.Screen name="Dashboard" options={{headerShown: false}} component={DashboardScreen} />
           <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} />
         </Stack.Navigator>
       </NavigationContainer>
        {/* <LoginScreen/> */}
      </TailwindProvider>
      </>
  );
}
export default App;
