import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Login from '../screens/Auth/Login/Login';
import SignUp from '../screens/Auth/SignUp/SignUp';
import Splash from '../screens/Auth/splash/Splash';
import Categories from '../screens/Home/Categories/Categories';
// stack Screens
import MyWhitlist from '../screens/Home/BottomTabs/More/MyWhitlist';
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
import AddToCart from '../screens/Home/DishDetails/AddToCart';
import TransactionHistory from '../screens/Home/BottomTabs/Checkout/TransactionHistory';
import TransactionConfirmation from '../screens/Home/DishDetails/TransactionConfirmation';
import RandomiserResult from '../screens/Home/BottomTabs/Randomiser/RandomiserResult'
import NumberVerification from '../screens/Auth/SignUp/VerificationNumber';
import VerificationCode from '../screens/Auth/SignUp/VerificationCode';
import OrderDetails from '../screens/Home/BottomTabs/More/OrderDetails';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      //  initialRouteName={routeName.LANDING_SCREEN}
      >

     
      <Stack.Screen name={routeName.LANDING_SCREEN} component={BottomTabs} />
      <Stack.Screen name={routeName.RANDOMISER_RESULT} component={RandomiserResult}/>
      <Stack.Screen name={routeName.ADD_TO_CART} component={AddToCart}/>
      <Stack.Screen name={routeName.TRANSACTION_HISTORY} component ={TransactionHistory}/>
      <Stack.Screen name={routeName.APPLY_JOBS} component={Apply_Jobs} />
      <Stack.Screen name={routeName.SELECT_COISINES} component={SelectCoisines} />
      <Stack.Screen name={routeName.ORDER_HISTORY} component={Order_history}/>
      <Stack.Screen name={routeName.RestaurantDetail} component={RestaurantDetail} />
      <Stack.Screen name={routeName.PROFILE_SCREEN} component={ProfileScreen}/>
      <Stack.Screen name={routeName.MENU} component={Menu} />
      <Stack.Screen name={routeName.MAP_VIEW} component={MapView} />
      <Stack.Screen name={routeName.FilterSearch} component={FilterSearch} />
      <Stack.Screen name={routeName.DISH_DETAIL} component={DishDetails} />
      <Stack.Screen name={routeName.FeaturedSearch} component={FeaturedSearch} />
      <Stack.Screen name={routeName.SearchAll} component={SearchAll} />
       <Stack.Screen name={routeName.TRANSACTION_CONFIRMATION} component={TransactionConfirmation} />
       <Stack.Screen name={routeName.NUMBER_VERIFICATION} component={NumberVerification} />
       <Stack.Screen name={routeName.VERIFICATION_CODE} component={VerificationCode} />

      <Stack.Screen name={routeName.MYWHITLIST} component={MyWhitlist} />
      <Stack.Screen name={ routeName.Categories} component={Categories} />
      <Stack.Screen name={routeName.ORDER_DETAILS} component={OrderDetails} />
      
        
    </Stack.Navigator>
  );
}

export default HomeStack;
