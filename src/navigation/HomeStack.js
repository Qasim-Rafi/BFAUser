import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routeName} from '../constants/routeName';
import Recommendation from '../screens/Home/BottomTabs/Home/Recommendation';
// stack Screens
import DishDetails from '../screens/Home/DishDetails/Dishdetails';
import  Categories  from '../screens/Home/Categories/Categories';
import Login from '../screens/Auth/Login/Login';
import Splash from '../screens/Auth/splash/Splash';
import SignUp from '../screens/Auth/SignUp/SignUp';
//  import LandingScreen from '../screens/Home/LandingScreen/LandingScreen';
import BottomTabs from './BottomTabs';
import FeaturedSearch from '../screens/Home/FeaturedSearch/FeaturedSearch';
import RestaurantDetail from '../screens/Home/RestaurantBranchDetail/RestaurantBranchDetail';
import MapView from '../screens/Home/MapView/MapView';
import SearchAll from '../screens/Home/SearchAll/SearchAll';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.MAP_VIEW} component={MapView} />

      <Stack.Screen name={routeName.DISH_DETAIL} component={DishDetails} />
      <Stack.Screen name={routeName.RestaurantDetail} component={RestaurantDetail} />
      <Stack.Screen name={routeName.FeaturedSearch} component={FeaturedSearch} />
      <Stack.Screen name={routeName.SearchAll} component={SearchAll} />

      {/* <Stack.Screen name={routeName.BRANCH_DETAIL} component={ResturantDetail} /> */}
      <Stack.Screen name={ routeName.Categories} component={Categories} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      <Stack.Screen name={routeName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={routeName.LANDING_SCREEN} component={BottomTabs} />

    </Stack.Navigator>
  );
}

export default HomeStack;
