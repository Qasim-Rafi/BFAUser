import { createStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Login from '../screens/Auth/Login/Login';
import SignUp from '../screens/Auth/SignUp/SignUp';
import Splash from '../screens/Auth/splash/Splash';


const Stack = createStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
      // initialRouteName="Home"
    >
      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      <Stack.Screen name={routeName.SIGN_UP} component={SignUp} />

        </Stack.Navigator>
  )}
  export default AuthStack