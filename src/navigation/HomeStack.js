import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routeName} from '../constants/routeName';

// stack Screens
import Login from '../screens/Auth/Login/Login';
import Splash from '../screens/Auth/splash/Splash';
import SignUp from '../screens/Auth/SignUp/SignUp';
// import LandingScreen from '../screens/Home/LandingScreen/LandingScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      <Stack.Screen name={routeName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={routeName.LANDING_SCREEN} component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default HomeStack;
