import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Login from '../screens/Auth/Login/Login';
import SignUp from '../screens/Auth/SignUp/SignUp';
import Splash from '../screens/Auth/splash/Splash';
import NumberVerification from '../screens/Auth/SignUp/VerificationNumber';
import VerificationCode from '../screens/Auth/SignUp/VerificationCode';
import SelectCoisines from '../screens/Auth/SelectCoisines/SelectCoisines';


const Stack = createNativeStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
       initialRouteName={routeName.SPLASH}
    >




      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      <Stack.Screen name={routeName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={routeName.NUMBER_VERIFICATION} component={NumberVerification} />
       <Stack.Screen name={routeName.VERIFICATION_CODE} component={VerificationCode} />
       <Stack.Screen name={routeName.SELECT_COISINES} component={SelectCoisines} />
        </Stack.Navigator>
  )}
  export default AuthStack