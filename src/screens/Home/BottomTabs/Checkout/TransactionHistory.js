import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../../../components/Header';
import {TRANSACTION_HISTORY_FAKE_DATA} from '../../../../constants/mock';
import {hp, wp} from '../../../../helpers/Responsiveness';
import Icon from '../../../../components/Icon';
import {colors} from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import { globalPath } from '../../../../constants/globalPath';
export default function TransactionHistory({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: colors.black3}}>
      <View
        style={{
          flex: 0.1,
          backgroundColor: colors.black2,
          justifyContent: 'center',
          
        }}>
        <Header navigation={navigation} iconPath={globalPath.BACK_ARROW}/>
      </View>
      <View style={{flex:0.9, margin:20}}>
          <ResponsiveText margin={[0,0,20,0]} color={colors.yellow}size={4.5}>Transactions History</ResponsiveText>
      {TRANSACTION_HISTORY_FAKE_DATA.map((item, index) => {
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
            <Icon source={item.url} borderRadius={7} size={60} />
            <View style={{flex: 1, marginLeft: 10, justifyContent:'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <ResponsiveText size={3.5} color={colors.white}>
                  {item.restaurant}
                </ResponsiveText>
              </View>
              <ResponsiveText color={colors.grey}  size={2.7}>
                Order Id:  {item.orderId}
              </ResponsiveText>
            </View>
            <View style={{width: '20%',justifyContent:'center', overflow: 'hidden',}}>
              <ResponsiveText
                margin={[0, 0, 0, 0]}
                color={colors.yellow}
                >
                {item.price}
              </ResponsiveText>
              <ResponsiveText
                margin={[0, 0, 0, 0]}
                color={colors.grey}
                size={2.4}
                
                >
                {item.wallet}
              </ResponsiveText>
            </View>
          </View>
          )
         
        })
        }
      </View>
    </View>
  );
}


