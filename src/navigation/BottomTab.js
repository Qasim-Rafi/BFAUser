import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//navigationfile
//stack Screens
import Login from '../screens/Auth/Login/Login';
import Splash from '../screens/Auth/splash/Splash';
import {routeName} from '../constants/routeName';
import SignUp from '../screens/Auth/SignUp/SignUp';
import Add from '../screens/Home/Add/Add';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={routeName.SPLASH} headerMode={'none'}>
      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      <Stack.Screen name={routeName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={routeName.ADD} component={Add} />
      {/* <Stack.Screen
        barColor="red"
        name={routeName.HOME_TABS}
        component={CustomTabBar}
      /> */}
      
    </Stack.Navigator>
  );
};
