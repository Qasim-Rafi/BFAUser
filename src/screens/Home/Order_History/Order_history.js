import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList
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
import {globalPath} from '../../../constants/globalPath';
import {routeName} from '../../../constants/routeName';
import {getOrders, getOrdersHistory} from '../../../redux/actions/user.actions';
import {useDispatch, useSelector} from 'react-redux';

const Order_history = ({navigation}) => {
  const [loader, setloader] = React.useState(true);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setloader(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
  const orderList = useSelector(state => state.appReducers.orderHistory.data);
  const Refreshing = useSelector(
    state => state.appReducers.orderHistory.loading,
  );
  console.log('Ordersss: ', orderList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let interval = null;
    dispatch(getOrdersHistory());

    // const subscribe = navigation.addListener('focus', e => {
    //   interval = setInterval(() => {
    //     dispatch(getOrdersHistory());
    //     console.log('focusss');
    //   }, 5000);
    // });

    // const unsubscribe = navigation.addListener('blur', e => {
    //   clearInterval(interval);
    //   console.log('blurrrrrr');
    // });
  }, [navigation]);
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
    <SafeAreaView
      style={{backgroundColor: colors.primary, flex: 1}}
      edges={['top', 'left', 'right']}>
      <View
        style={{
          flex: 1,
          backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite,
        }}>
          <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          backgroundColor: isThemeDark ? colors.black1 : colors.white,
        }}>
        <Header navigation={navigation} />
      </View>
      <View  style={{ flex: 1, marginHorizontal: 10}}>
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <ResponsiveText color={isThemeDark ? colors.white : colors.black}>
            My Order{' '}
          </ResponsiveText>
          <ResponsiveText size={wp(0.9)} color={colors.grey}>
            orders({orderList.length}){' '}
          </ResponsiveText>
        </View>
        {orderList.length > 0 ? (
          <FlatList
            // contentContainerStyle={{ alignItems: "center" }}
            // ListHeaderComponent={listHeader}
            //  stickyHeaderIndices={[0]}
            // onEndReached={() => onLoad(index, 10)}
            onEndReachedThreshold={0.2}
             refreshing={Refreshing}
            // onRefresh={() => update()}
            data={orderList}
            // numColumns={1}
            // keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routeName.ORDER_DETAILS, {data: item})
                }>
                <View
                  style={{
                    backgroundColor: isThemeDark ? colors.black1 : colors.white,
                    height: hp(10),
                    borderRadius: 5,
                    alignItems: 'center',
                    marginTop: 10,
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Icon
                      borderRadius={7}
                      source={{uri: item.restaurantLogo}}
                      size={60}
                    />
                  </View>
                  <View style={{marginTop: '2%', marginLeft: '2%'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <ResponsiveText
                        color={isThemeDark ? colors.white : colors.black}>
                        {item.restaurantName}
                      </ResponsiveText>
                      <ResponsiveText color={colors.yellow}>
                        ${parseFloat(item.amount).toFixed(2)}
                        {/* ${item.amount} */}
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
                    <View
                      style={{
                        flexDirection: 'row',
                        width: wp(68),
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <ResponsiveText size={2.5} color={colors.grey}>
                          Items :
                        </ResponsiveText>
                        <Text
                          style={{
                            color: isThemeDark ? colors.white : colors.black,
                            fontSize: 10,
                            marginLeft: 2,
                          }}>
                          {item.addOrderDetail.length}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginLeft: 20}}>
                        <ResponsiveText size={2.5} color={colors.grey}>
                          Status:{' '}
                        </ResponsiveText>
                        <ResponsiveText
                          size={2.5}
                          color={
                            item.statusName == 'Cancled'
                              ? colors.red1
                              : item.statusName == 'Paid'
                              ? colors.blue1
                              : item.statusName == 'InProcess'
                              ? colors.green1
                              : item.statusName == 'Delivered'
                              ? colors.yellow
                              : item.statusName == 'Served'
                              ? colors.yellow
                              : item.statusName == 'Billed'
                              ? colors.green1
                              : colors.bgWhite
                          }>
                          {item.statusName}
                        </ResponsiveText>
                      </View>
                      <View>
                        {item.statusName == 'Paid' ? (
                          <TouchableOpacity
                            onPress={() => submitOrder(item)}
                            style={{
                              backgroundColor: colors.yellow,
                              padding: 3,
                              borderRadius: 3,
                            }}>
                            <ResponsiveText size={2.5}>
                              {' '}
                              Repeat Order
                            </ResponsiveText>
                          </TouchableOpacity>
                        ) : null}
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View
          style={{
            width: wp(100),
            marginTop: 100,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Icon
            borderColor={colors.yellow}
            borderWidth={0}
            borderRadius={0}
            size={250}
            source={globalPath.NORECORD_ICON}
          />
        </View>
        )}
      </View>
      {Refreshing ?  <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(65, 65, 65, 0.4)',
            flex: 1,
          }}>
          <BarIndicator color={colors.yellow} size={45} />
        </View> : undefined}
        </View>
    </SafeAreaView>
  );
};

export default Order_history;

const styles = StyleSheet.create({
  advertisementBanner: {
    // height: 130,
    // marginHorizontal: 10,
    alignItems: 'center',
    // paddingTop:20
  },
  btn: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 15,
    height: 20,
  },
});
