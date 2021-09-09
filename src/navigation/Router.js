import React from 'react';
import HomeStack from './HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerStack from './DrawerStack';

const Router = () => {
  return (
    <NavigationContainer>
      <HomeStack />
      {/* <DrawerStack/> */}
    </NavigationContainer>
  );
};

export default Router;
