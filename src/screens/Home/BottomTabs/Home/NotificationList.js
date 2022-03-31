import React, { useEffect } from 'react';
import {View, Text, Image,TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../../../components/Header';
import {TRANSACTION_HISTORY_FAKE_DATA} from '../../../../constants/mock';
import {hp, wp} from '../../../../helpers/Responsiveness';
import Icon from '../../../../components/Icon';
import {colors} from '../../../../constants/colorsPallet';
import moment from 'moment';

import ResponsiveText from '../../../../components/RnText';
import { globalPath } from '../../../../constants/globalPath';
import { useSelector ,useDispatch} from 'react-redux';
import { GETPAYMENTHISTORY,getNotificationData } from '../../../../redux/actions/user.actions';
export default function NotificationList({navigation}) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(GETPAYMENTHISTORY(1, 4));
    dispatch(getNotificationData())
    
  },[])
  const HISTORY = useSelector(state => state.appReducers.getPaymentHistory.data);
  const NotificationData = useSelector(state => state.appReducers.getNotification.data);
  const NotificationLoading = useSelector(state => state.appReducers.getNotification.loading);
  const loading = useSelector(state => state.appReducers.getPaymentHistory.loading);
  console.log('NotificationData:  ',NotificationData)
  return (
    <View style={{flex: 1, backgroundColor: colors.black3}}>
       <View style={{ flexDirection: 'row', justifyContent: "space-between",padding:7 }}>
            <TouchableOpacity style={{ backgroundColor:colors.yellow1,paddingVertical:10,paddingHorizontal:10,borderRadius:20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
          </View>
      <ScrollView style={{flex:0.9, margin:20}} showsVerticalScrollIndicator={false} >
          <ResponsiveText margin={[0,0,20,0]} color={colors.yellow}size={4.5}>Notifications</ResponsiveText>
      {NotificationData.map((item, index) => {
          return(
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
            <View style={{flex: 1, marginLeft: 10, justifyContent:'center'}}>
            <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <ResponsiveText size={2.5} color={colors.white  }>
                  {item.remarks}
                </ResponsiveText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <ResponsiveText size={3.5} color={colors.yellow  }>
                  {item.restaurant}
                </ResponsiveText>
              </View>
              <ResponsiveText color={colors.grey}  size={2.7}>
                Order Id:  {item.id}
              </ResponsiveText>
            </View>
            <View style={{width: '20%',justifyContent:'flex-start', overflow: 'hidden',}}>
              <ResponsiveText size={2.5}
                margin={[0, 0, 0, 0]}
                color={ colors.white }
                >
                 {moment(item.datetime).fromNow('mm') } ago
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
          )
         
        })
        }
      </ScrollView>
    </View>
  );
}


