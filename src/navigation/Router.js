import React from 'react';
import HomeStack from './HomeStack';
import {NavigationContainer} from '@react-navigation/native';

const Router = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Router;
