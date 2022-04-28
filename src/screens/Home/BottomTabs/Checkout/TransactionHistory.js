import React, { useEffect } from 'react';
import {View, Text, Image,TouchableOpacity,ScrollView} from 'react-native';
import Header from '../../../../components/Header';
import {TRANSACTION_HISTORY_FAKE_DATA} from '../../../../constants/mock';
import {hp, wp} from '../../../../helpers/Responsiveness';
import Icon from '../../../../components/Icon';
import {colors} from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import { globalPath } from '../../../../constants/globalPath';
import { useSelector ,useDispatch} from 'react-redux';
import { GETPAYMENTHISTORY } from '../../../../redux/actions/user.actions';
import moment from 'moment';
export default function TransactionHistory({navigation}) {
  const dispatch = useDispatch();

  const HISTORY = useSelector(state => state.appReducers.getPaymentHistory.data);
  const loading = useSelector(state => state.appReducers.getPaymentHistory.loading);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  useEffect(()=>{
    HISTORY.length <= 0 ?  dispatch(GETPAYMENTHISTORY()) : null
    
  },[HISTORY])
  console.log('HISTORY:  ',HISTORY)
  return (
    <View style={{flex: 1, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}}>
       <View style={{ flexDirection: 'row', justifyContent: "space-between",padding:7 }}>
            <TouchableOpacity style={{ backgroundColor:colors.yellow1,paddingVertical:10,paddingHorizontal:10,borderRadius:20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
          </View>
      <View style={{flex:0.9, margin:20}}>
          <ResponsiveText margin={[0,0,20,0]} color={colors.yellow}size={4.5}>Transactions History</ResponsiveText>
          <View style={{}} >
            <ScrollView>

      {HISTORY.map((item, index) => {
          return(
            <View
            style={{
              
              backgroundColor: isThemeDark ?  colors.black2: colors.white,
              borderRadius: 5,
              marginBottom: 4,
              padding: 5,
              flexDirection: 'row',
              overflow: 'hidden',
            }}>
            <Icon source={{uri:item.fullPath}} borderRadius={7} size={60} />
            <View style={{flex: 1, marginLeft: 10, justifyContent:'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <ResponsiveText size={3.5} color={item.type === 'out' ? colors.red3 : isThemeDark ?  colors.white: colors.black }>
                  {item.restaurantName}
                </ResponsiveText>
              </View>
              <ResponsiveText color={colors.grey}  size={2.7}>
                Order Id:  {item.orderId}
              </ResponsiveText>
              <ResponsiveText color={colors.grey}  size={2.5}>
                Date:  {moment(item.orderDateTimes).format("MMMM Do YYYY, h:mm a") }
              </ResponsiveText>
            </View>
            <View style={{width: '20%',justifyContent:'center', overflow: 'hidden',}}>
              <ResponsiveText
                margin={[0, 0, 0, 0]}
                // color={item.type === 'out' ? colors.red3 : colors.yellow }
                color={colors.yellow}
                >
                {/* {item.type === 'out' ? '-' : null} */}
                {item.amount}
              </ResponsiveText>
              <ResponsiveText
                margin={[0, 0, 0, 0]}
                color={colors.grey}
                size={2.4}
                
                >
                {item.paymentMode}
              </ResponsiveText>
            </View>
          </View>
          )
         
        })
        }
            </ScrollView>

          </View>
      </View>
    </View>
  );
}


