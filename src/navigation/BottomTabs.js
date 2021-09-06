import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';
import {globalPath} from '../constants/globalPath';
import {colors} from '../constants/colorsPallet';
import {routeName} from '../constants/routeName';
import Home from '../screens/Home/BottomTabs/Home/Home';
import Randomiser from '../screens/Home/BottomTabs/Randomiser/Randomiser';
import Promos from '../screens/Home/BottomTabs/Promos/Promos';
import Checkout from '../screens/Home/BottomTabs/Checkout/Checkout';
import More from '../screens/Home/BottomTabs/More/More';


const Tab = createBottomTabNavigator();

export default function BottomTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        indicatorStyle: {
          width: 0,
          height: 0,
          elevation: 0,
        },
        // activeTintColor: 'red',
        // inactiveTintColor: 'lightgray',

        // activeBackgroundColor: colors.white,
        // inactiveBackgroundColor: 'red',
        indicatorStyle: {backgroundColor: 'transparent'},
        // tabBarStyle: {borderTopWidth:0},
        tabStyle: {
          backgroundColor:colors.black2,
          padding:0,
          margin:0,
          borderTopWidth:0,
          elevation:0
        },
        style: {
          //   height: 60,
          borderTopWidth: 0,

          //   shadowColor: colors.skyblue1,
          padding: 5,
          //   marginBottom: -2,
          borderTopColor: 'transparent',

          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
          borderTopColor: 'red', //Change Like This
          backgroundColor: colors.black2,
          // borderTopWidth: 220,
          borderTopWidth: 0,
          //   borderColor: colors.black2,
          //   elevation: 0,
          elevation: 0, // for Android

          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          paddingBottom: 3,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === routeName.HOME_BOTTOM) {
            iconName = focused ? globalPath.HOME_LOGO : globalPath.HOME_LOGO;
          } else if (route.name === routeName.RANDOMISER_BOTTOM) {
            iconName = focused
              ? globalPath.RANDOMISER_LOGO
              : globalPath.RANDOMISER_LOGO;
          } else if (route.name === routeName.PROMOS_BOTTOM) {
            iconName = focused
              ? globalPath.PROMOS_LOGO
              : globalPath.PROMOS_LOGO;
          } else if (route.name === routeName.CHECK_OUT_BOTTOM) {
            iconName = focused
              ? globalPath.CHECKOUT_LOGO
              : globalPath.CHECKOUT_LOGO;
          } else if (route.name === routeName.MORE_BOTTOM) {
            iconName = focused ? globalPath.MFORE_LOGO : globalPath.MORE_LOGO;
          }

          // You can return any component that you like here!
          return <Icon source={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.yellow,
      })}>
      <Tab.Screen
        name={routeName.HOME_BOTTOM}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={routeName.RANDOMISER_BOTTOM}
        component={Randomiser}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={routeName.PROMOS_BOTTOM}
        component={Promos}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={routeName.CHECK_OUT_BOTTOM}
        component={Checkout}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={routeName.MORE_BOTTOM}
        component={More}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
