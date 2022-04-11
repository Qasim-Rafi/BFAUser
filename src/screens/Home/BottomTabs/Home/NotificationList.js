import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../../../components/Header';
import {TRANSACTION_HISTORY_FAKE_DATA} from '../../../../constants/mock';
import {hp, wp} from '../../../../helpers/Responsiveness';
import Icon from '../../../../components/Icon';
import {colors} from '../../../../constants/colorsPallet';
import moment from 'moment';

import ResponsiveText from '../../../../components/RnText';
import {globalPath} from '../../../../constants/globalPath';
import {useSelector, useDispatch} from 'react-redux';
import {
  GETPAYMENTHISTORY,
  getNotificationData,
} from '../../../../redux/actions/user.actions';
import urls from '../../../../redux/lib/urls';
import Api from '../../../../redux/lib/api';
export default function NotificationList({navigation}) {
  const dispatch = useDispatch();




  const HISTORY = useSelector(
    state => state.appReducers.getPaymentHistory.data,
  );
  const NotificationData = useSelector(
    state => state.appReducers.getNotification.data,
  );
  const NotificationLoading = useSelector(
    state => state.appReducers.getNotification.loading,
  );
  const loading = useSelector(
    state => state.appReducers.getPaymentHistory.loading,
  );
  console.log('NotificationData:  ', NotificationData);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', (e) => {
      // Prevent default action
      // e.preventDefault();
    // dispatch(getNotificationData());
    SeenNotification()
    });
   
     return subscribe

  }, [navigation]);

  const SeenNotification = async (index, item) => {
   
    try {
      const res = await Api.put(urls.SEEN_NOTIFICATIONS, {});
      console.log('res', res);
      if (res && res.success == true) {
        dispatch(getNotificationData());
      } else {
      }
    } catch (error) { }

    // var i = cartList.findIndex(obj => obj.id === id);

    // cartList[i].quantity = cartList[i].quantity + 1;
    // console.log('quantity', cartList);
    // setRandom(cartList);
    // dispatch(retriveCart(cartList));
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.black3}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow1,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon source={globalPath.BACK_BLACK_ARROW} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{flex: 0.9, margin: 20}}
        showsVerticalScrollIndicator={false}>
        <ResponsiveText margin={[0, 0, 20, 0]} color={colors.yellow} size={4.5}>
          Notifications
        </ResponsiveText>
        {NotificationData.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: colors.black2,
                borderRadius: 5,
                marginBottom: 4,
                padding: 5,
                flexDirection: 'row',
                overflow: 'hidden',
              }}>
              {/* <Icon source={item.url} borderRadius={7} size={60} /> */}
              <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                    {/* <ResponsiveText size={3} color={colors.white}>
                      Order status:{' '}
                    </ResponsiveText> */}
                  <ResponsiveText size={3} color={item.remarks=='NewOrder'?colors.white:item.remarks=='Cancled'?colors.red1:item.remarks=='Paid'?colors.blue1:item.remarks=='InProcess'?colors.green1:item.remarks=='Delivered'?colors.yellow: item.remarks=='Served'?colors.yellow:item.remarks=='Billed'?colors.green1:colors.white}>
                    {item.remarks}
                  </ResponsiveText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <ResponsiveText size={3.5} color={colors.yellow}>
                    {item.restaurantName}
                  </ResponsiveText>
                </View>
                <ResponsiveText color={colors.grey} size={2.7}>
                  Serial No: {item.id}
                </ResponsiveText>
              </View>
              <View
                style={{
                  width: '20%',
                  justifyContent: 'flex-start',
                  overflow: 'hidden',
                }}>
                <ResponsiveText
                  size={2.5}
                  margin={[0, 0, 0, 0]}
                  color={colors.white}>
                  {/* {moment(item.datetime).fromNow('mm')} ago */}
                </ResponsiveText>
                {/* <ResponsiveText
                margin={[0, 0, 0, 0]}
                color={colors.grey}
                size={2.4}
                
                >
                {item.wallet}
              </ResponsiveText> */}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
