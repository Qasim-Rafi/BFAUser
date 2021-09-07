import React from 'react';
import HomeStack from './HomeStack';
import {View ,Text }from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../components/Header';
const Drawer= createDrawerNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <Text>Go to Notifications</Text>
    </View>
  );
}
function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false,
      }}
      // initialRouteName="Home"
      >

      </Drawer.Navigator>
  )}
const DrawerStack = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default DrawerStack;
