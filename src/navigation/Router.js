import React from 'react';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import {NavigationContainer } from '@react-navigation/native';
import {createSwitchNavigator} from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';

const Router = () => {
  const [Token , setToken]= React.useState('');
  React.useEffect(() => {
    async function fetchAndSetUser() 
    {
    const token = await AsyncStorage.getItem('@token');
    console.log(token,'tokeen');
    setToken(token);
    }
    fetchAndSetUser();
  },[]);
  return (
    <NavigationContainer>
      {Token === '' || Token === null?<AuthStack/> :<HomeStack /> }
      
      {/* <DrawerStack/> */}
    </NavigationContainer>
  );
};

export default Router;
