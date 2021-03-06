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
import ProfileDisplay from '../screens/Home/ProfileScreen/ProfileDisplay';
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
import RandomiserResult from '../screens/Home/BottomTabs/Randomiser/RandomiserResult';

import OrderDetails from '../screens/Home/BottomTabs/More/OrderDetails';
import Settings from '../screens/Home/Settings/Settings';
import AddCard from '../screens/Home/CardManagement/AddCard';
import ViewCard from '../screens/Home/CardManagement/ViewCard';
import ManageCards from '../screens/Home/CardManagement/ManageCards';
import CartDetails from '../screens/Home/BottomTabs/CartDetails/CartDetails';
import Checkout from '../screens/Home/BottomTabs/Checkout/Checkout';
import JobListing from '../screens/Home/JobListing/JobListing';
import Preferences from '../screens/Home/BottomTabs/More/Preferences';
import ContactUs from '../screens/Home/BottomTabs/More/ContactUs';
import MoreAboutDishes from '../screens/Home/BottomTabs/More/MoreAboutDishes';
import MyReviews from '../screens/Home/BottomTabs/More/MyReviews';
import QRScan from '../screens/Home/BottomTabs/More/QRScan';
import InvoiceList from '../screens/Home/BottomTabs/More/InvoiceList';
import AllDishesList from '../screens/Home/BottomTabs/Home/AllDishesList';
import BarcodeReader from '../screens/Home/BottomTabs/Scanner/BarcodeReader';
import More from '../screens/Home/BottomTabs/More/More';
import RandomiserWheel from '../screens/Home/BottomTabs/Randomiser/RandomWheel';
import Wallet from '../screens/Home/Wallet/Wallet'
import TopUp from '../screens/Home/Wallet/topUp'
import Transfer from '../screens/Home/Wallet/transfer';
import Home from '../screens/Home/BottomTabs/Home/Home';
import SkeletonComponent from '../screens/Home/BottomTabs/Home/SkeletonComponent';
import Notifications from '../components/Static/Notifications';
import Bali_Center from '.././screens/Home/ProfileScreen/Bali_Center';
import NotificationList from '../screens/Home/BottomTabs/Home/NotificationList';
import NewsFeed from '../screens/Home/BottomTabs/Promos/NewsFeed';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        keyboardHidesTabBar: true
     }} 
    // initialRouteName="SPLASH"
    >
      <Stack.Screen name={routeName.LANDING_SCREEN} component={Home} />
      <Stack.Screen
        name={routeName.RANDOMISER_RESULT}
        component={RandomiserResult}
      />
      <Stack.Screen name={routeName.ADD_TO_CART} component={AddToCart} />
      <Stack.Screen
        name={routeName.TRANSACTION_HISTORY}
        component={TransactionHistory}
      />
      <Stack.Screen name={routeName.APPLY_JOBS} component={Apply_Jobs} />

      <Stack.Screen name={routeName.WALLET} component={Wallet} />
      <Stack.Screen name={routeName.TRANSFER} component={Transfer} />
      <Stack.Screen name={routeName.TOP_UP} component={TopUp} />
      <Stack.Screen name={routeName.BALI_CENTER} component={Bali_Center} />

      <Stack.Screen name={routeName.ORDER_HISTORY} component={Order_history} />
      <Stack.Screen name={routeName.RestaurantDetail} component={RestaurantDetail} />
      <Stack.Screen name={routeName.PROFILE_SCREEN} component={ProfileScreen} />
      <Stack.Screen name={routeName.PROFILE_DISPLAY} component={ProfileDisplay} />
      <Stack.Screen name={routeName.MENU} component={Menu} />
      <Stack.Screen name={routeName.MAP_VIEW} component={MapView} />
      <Stack.Screen name={routeName.FilterSearch} component={FilterSearch} />
      <Stack.Screen name={routeName.DISH_DETAIL} component={DishDetails} />
      <Stack.Screen
        name={routeName.FeaturedSearch}
        component={FeaturedSearch}
      />
      <Stack.Screen name={routeName.SearchAll} component={SearchAll} />
      <Stack.Screen
        name={routeName.TRANSACTION_CONFIRMATION}
        component={TransactionConfirmation}
      />
      <Stack.Screen name={routeName.MORE_BOTTOM} component={More} />

      <Stack.Screen name={routeName.MYWHITLIST} component={MyWhitlist} />
      <Stack.Screen name={routeName.Categories} component={Categories} />
      <Stack.Screen name={routeName.ORDER_DETAILS} component={OrderDetails} />
      <Stack.Screen name={routeName.SETTINGS} component={Settings} />
      <Stack.Screen name={routeName.ADD_CARD} component={AddCard} />
      <Stack.Screen name={routeName.VIEW_CARD} component={ViewCard} />
      <Stack.Screen name={routeName.MANAGE_CARDS} component={ManageCards} />
      <Stack.Screen name={routeName.CART_DETAILS} component={CartDetails} />
      <Stack.Screen name={routeName.JOB_LISTING} component={JobListing} />
      <Stack.Screen name={routeName.PREFERENCES} component={Preferences} />
      <Stack.Screen name={routeName.CONTACT_US} component={ContactUs} />
      <Stack.Screen name={routeName.MORE_ABOUT_DISHES} component={MoreAboutDishes} />
      <Stack.Screen name={routeName.MY_REVIEWS} component={MyReviews} />
      <Stack.Screen name={routeName.SCAN_QR} component={QRScan} />
      <Stack.Screen name={routeName.INVOICE_LIST} component={InvoiceList} />
      <Stack.Screen name={routeName.BARCODE_READER} component={BarcodeReader} />
      <Stack.Screen name={routeName.NOTIFICATION_SCREEN} component={NotificationList} />
      <Stack.Screen name={routeName.INBOX} component={NewsFeed} />
      <Stack.Screen name={routeName.SKELETON_COMPONENT} component={SkeletonComponent} />

      <Stack.Screen
        name={routeName.ALL_DISHES_LIST}
        component={AllDishesList}
      />
      <Stack.Screen
        name={routeName.SELECT_PAYMENT_METHOD}
        component={Checkout}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
