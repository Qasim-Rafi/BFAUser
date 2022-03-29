import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {ORDER_HISTORY} from '../../../constants/mock';
import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import Header from '../../../components/Header';
import RnButton from '../../../components/RnButton';
import { globalPath } from '../../../constants/globalPath';
import { routeName } from '../../../constants/routeName';
import { getOrders, getOrdersHistory } from '../../../redux/actions/user.actions';
import { useDispatch,useSelector } from 'react-redux';
export default function Order_history({navigation}) {
  const orderList = useSelector(
    state => state.appReducers.orderHistory.data,
  );
  const orderList_Loading = useSelector(
    state => state.appReducers.orderHistory.loading,
  );
  console.log("Ordersss: ",orderList)
  const dispatch=useDispatch()
  React.useEffect(() => {
    dispatch(getOrdersHistory());


  }, []);
  const submitOrder = async Item => {
    // var userId = await AsyncStorage.getItem('@userId');
    console.log('itemmmmm', Item);

    const obj = {
      id: 0,
      userId: Item.customerId,
      orderId: Item.id,
      amount: Item.amount,
      resturantBranchId: Item.restaurantBranchId,
      updatedDateTime: 'string',
      updatebyId: Item.customerId,
    };
    console.log('objjjjjjjjjjjj,obj', obj);
    //dispatch(checkoutOrder(obj,navigation));
    navigation.navigate(routeName.TRANSACTION_CONFIRMATION, {
      obj: obj,
      data: Item,
    });
    //
  };
  return (
    <View style={{flex: 1, backgroundColor: '#202020'}}>
       <View style={{ flexDirection: 'row', justifyContent: "space-between",padding:7 }}>
            <TouchableOpacity style={{ backgroundColor:colors.yellow1,paddingVertical:10,paddingHorizontal:10,borderRadius:20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
          </View>
      <ScrollView style={{flex: 0.7, margin: 20}}>
        <ResponsiveText color={colors.yellow}>My Orders</ResponsiveText>
        {orderList.map((item, index) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate(routeName.ORDER_DETAILS,{data:item})}>
            <View
              style={{
                backgroundColor: '#303030',
                height: hp(10),
                borderRadius: 5,
                alignItems:'center',
                marginTop: 10,
                paddingHorizontal:5,
                flexDirection: 'row',
              }}>
              <View>
                <Icon borderRadius={7} source={{uri:item.restaurantLogo}} size={60} />
              </View>
              <View style={{marginTop: '2%', marginLeft: '2%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <ResponsiveText color={colors.white}>
                    {item.restaurantName}
                  </ResponsiveText>
                  <ResponsiveText color={colors.yellow}>
                    ${item.amount}
                  </ResponsiveText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText size={2.1} color={colors.yellow}>
                    Order iD:
                  </ResponsiveText>
                  <ResponsiveText size={2.1} color={colors.yellow}>
                    {item.id}
                  </ResponsiveText>
                </View>
                <View style={{flexDirection: 'row', width: wp(68),alignItems:'baseline',justifyContent:'space-between'}}>
                  <View style={{flexDirection: 'row'}}>
                    <ResponsiveText size={2.5} color={colors.grey}>
                      Items : 
                    </ResponsiveText>
                    <Text style={{color:colors.white,fontSize:10,marginLeft:2} } >
                        { item.addOrderDetail.length}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 20,}}>
                    <ResponsiveText size={2.5} color={colors.grey}>
                      Status:
                    </ResponsiveText>
                    <ResponsiveText size={2.5} color={colors.white}>
                      {item.statusName}
                    </ResponsiveText>
                  </View>
                  <View>
                  <TouchableOpacity onPress={()=>submitOrder(item)}
                      style={{
                        backgroundColor: colors.yellow,
                        padding:3,
                        borderRadius:3,
                      }}>
                      <ResponsiveText size={2.5}> Repeat Order</ResponsiveText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          );
        })}
      </ScrollView>
      {
         orderList_Loading === true ?
            <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0.4)', flex: 1 }}>
              < BarIndicator color={colors.yellow} size={45} />
            </View>
            :
            undefined
        }
    </View>
  );
}
