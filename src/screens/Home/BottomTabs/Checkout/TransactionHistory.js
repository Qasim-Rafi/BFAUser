import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../../../components/Header';
import {TRANSACTION_HISTORY_FAKE_DATA} from '../../../../constants/mock';
import {hp, wp} from '../../../../helpers/Responsiveness';
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
          alignItems: 'center',
        }}>
        <Header navigation={navigation} iconPath={globalPath.BACK_ARROW}/>
      </View>
      <View style={{flex:0.9, margin:20}}>
          <ResponsiveText margin={[0,0,20,0]} color={colors.yellow}size={4.5}>Transactions History</ResponsiveText>
      {TRANSACTION_HISTORY_FAKE_DATA.map((item, index) => {
          return(
            <View
            style={{
              height: wp(15),
              backgroundColor: colors.black2,
              borderRadius: 5,
              marginBottom: 4,
              padding: 5,
              flexDirection: 'row',
              overflow: 'hidden',
            }}>
            <Image style={{width: '17%', height: '100%',borderRadius:5}} source={item.url} />
            <View style={{flex: 1, marginLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <ResponsiveText size={4} color={colors.white}>
                  {item.restaurant}
                </ResponsiveText>
              </View>
              <ResponsiveText color={'grey'} numberOfLines={2} size={2.7}>
                {item.wallet}
              </ResponsiveText>
            </View>
            <View style={{width: '15%', overflow: 'hidden'}}>
              <ResponsiveText
                margin={[4, 0, 0, 0]}
                color={colors.yellow}
                position="flex-end">
                {item.price}
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


