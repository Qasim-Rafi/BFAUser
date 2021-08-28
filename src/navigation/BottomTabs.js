import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';
import { globalPath } from '../constants/globalPath';
import { colors } from '../constants/colorsPallet';
import { routeName } from '../constants/routeName';
import Home from '../screens/Home/BottomTabs/Home/Home';
import Randomiser from '../screens/Home/BottomTabs/Randomiser/Randomiser';
import Promos from '../screens/Home/BottomTabs/Promos/Promos';
import Checkout from '../screens/Home/BottomTabs/Checkout/Checkout';
import More from '../screens/Home/BottomTabs/More/More';



const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: 'lightgray',
                activeBackgroundColor: '#303030',
                inactiveBackgroundColor: '#303030',
                style: {
                    backgroundColor: '#303030',
                    paddingBottom: 3
                }
            }}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === routeName.HOME_BOTTOM) {
                        iconName = focused
                            ? globalPath.HOME_LOGO
                            : globalPath.HOME_LOGO;
                    }
                    else if (route.name === routeName.RANDOMISER_BOTTOM) {
                        iconName = focused ? globalPath.RANDOMISER_LOGO : globalPath.RANDOMISER_LOGO;
                    }
                    else if (route.name === routeName.PROMOS_BOTTOM) {
                        iconName = focused ? globalPath.PROMOS_LOGO : globalPath.PROMOS_LOGO;
                    }
                    else if (route.name === routeName.CHECK_OUT_BOTTOM) {
                        iconName = focused ? globalPath.CHECKOUT_LOGO : globalPath.CHECKOUT_LOGO;
                    }
                    else if (route.name === routeName.MORE_BOTTOM) {
                        iconName = focused ? globalPath.MFORE_LOGO : globalPath.MORE_LOGO;
                    }

                    // You can return any component that you like here!
                    return <Icon source={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.yellow,
                tabBarInactiveTintColor: colors.yellow,
            })}
        >
            <Tab.Screen name={routeName.HOME_BOTTOM} component={Home} options={{ headerShown: false }} />
            <Tab.Screen name={routeName.RANDOMISER_BOTTOM} component={Randomiser} options={{ headerShown: false }} />
            <Tab.Screen name={routeName.PROMOS_BOTTOM} component={Promos} options={{ headerShown: false }} />
            <Tab.Screen name={routeName.CHECK_OUT_BOTTOM} component={Checkout} options={{ headerShown: false }} />
            <Tab.Screen name={routeName.MORE_BOTTOM} component={More} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
