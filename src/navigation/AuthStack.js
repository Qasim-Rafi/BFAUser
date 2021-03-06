import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {routeName} from '../constants/routeName';
import Login from '../screens/Auth/Login/Login';
import ForgotPassword from '../screens/Auth/Login/ForgotPassword';

import SignUp from '../screens/Auth/SignUp/SignUp';
import Splash from '../screens/Auth/splash/Splash';
import NumberVerification from '../screens/Auth/SignUp/VerificationNumber';
import VerificationCode from '../screens/Auth/SignUp/VerificationCode';
import SelectCoisines from '../screens/Auth/SelectCoisines/SelectCoisines';
import FilterSearch from '../screens/Home/SearchAll/FilterSearch';
import Preferences from '../screens/Home/BottomTabs/More/Preferences';
import ChangePassword from '../screens/Auth/Login/ChangePassword';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      //  initialRouteName={routeName.SPLASH}
    >
      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      <Stack.Screen name={routeName.SIGN_UP} component={SignUp} />
      <Stack.Screen
        name={routeName.NUMBER_VERIFICATION}
        component={NumberVerification}
      />
      <Stack.Screen
        name={routeName.VERIFICATION_CODE}
        component={VerificationCode}
      />
      <Stack.Screen
        name={routeName.SELECT_COISINES}
        component={SelectCoisines}
      />
      <Stack.Screen name={routeName.PREFERENCES} component={Preferences} />
      <Stack.Screen name={routeName.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={routeName.CHANGE_PASSWORD} component={ChangePassword} />


    </Stack.Navigator>
  );
}
export default AuthStack;
