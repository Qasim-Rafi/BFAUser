import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {routeName} from '../constants/routeName';
import Order_history from '../screens/Home/Order_History/Order_history';
import OrderDetails from '../screens/Home/BottomTabs/More/OrderDetails';

const Stack = createNativeStackNavigator();

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
       initialRouteName={routeName.ORDER_HISTORY}
    >
      <Stack.Screen name={routeName.ORDER_HISTORY} component={Order_history} />
      <Stack.Screen name={routeName.ORDER_DETAILS} component={OrderDetails} />


    </Stack.Navigator>
  );
}
export default OrderStack;
