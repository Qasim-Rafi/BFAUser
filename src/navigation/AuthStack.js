import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Login from '../screens/Auth/Login/Login';
import SignUp from '../screens/Auth/SignUp/SignUp';
import Splash from '../screens/Auth/splash/Splash';
import Categories from '../screens/Home/Categories/Categories';
// stack Screens
import DishDetails from '../screens/Home/DishDetails/Dishdetails';
import FeaturedSearch from '../screens/Home/FeaturedSearch/FeaturedSearch';
import MapView from '../screens/Home/MapView/MapView';
import Menu from '../screens/Home/Menu/Menu';
import Order_history from '../screens/Home/Order_History/Order_history';
import ProfileScreen from '../screens/Home/ProfileScreen/ProfileScreen';
import RestaurantDetail from '../screens/Home/RestaurantBranchDetail/RestaurantBranchDetail';
import FilterSearch from '../screens/Home/SearchAll/FilterSearch';
import SearchAll from '../screens/Home/SearchAll/SearchAll';
import SelectCoisines from '../screens/Auth/SelectCoisines/SelectCoisines';
//  import LandingScreen from '../screens/Home/LandingScreen/LandingScreen';
import BottomTabs from './BottomTabs';
import Apply_Jobs from '../screens/Home/BottomTabs/Promos/Apply_Jobs';
import DrawerStack from './DrawerStack';
import AddToCart from '../screens/Home/DishDetails/AddToCart';
import TransactionHistory from '../screens/Home/BottomTabs/Checkout/TransactionHistory';

const Stack = createNativeStackNavigator();

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