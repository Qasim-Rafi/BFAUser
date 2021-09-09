import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ORDER_HISTORY} from '../../../constants/mock';
import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import Header from '../../../components/Header';
import RnButton from '../../../components/RnButton';
import { globalPath } from '../../../constants/globalPath';
export default function Order_history({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#202020'}}>
      <Header navigation={navigation} iconPath={globalPath.BACK_ARROW}/>
      <View style={{flex: 0.7, margin: 20}}>
        <ResponsiveText color={colors.white}>My Orders</ResponsiveText>
        {ORDER_HISTORY.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: '#303030',
                height: hp(10),
                borderRadius: 5,
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <View>
                <Icon source={item.url} size={60} />
              </View>
              <View style={{marginTop: '2%', marginLeft: '2%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <ResponsiveText color={colors.white}>
                    {item.Title}
                  </ResponsiveText>
                  <ResponsiveText color={colors.yellow}>
                    ${item.Order_Price}
                  </ResponsiveText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText size={2.1} color={colors.yellow}>
                    Order iD:
                  </ResponsiveText>
                  <ResponsiveText size={2.1} color={colors.yellow}>
                    {item.Order_id}
                  </ResponsiveText>
                </View>
                <View style={{flexDirection: 'row', width: wp(68),alignItems:'baseline',justifyContent:'space-between'}}>
                  <View style={{flexDirection: 'row'}}>
                    <ResponsiveText size={2.5} color={colors.grey}>
                      Items:
                    </ResponsiveText>
                    <ResponsiveText padding={[0,0,0,0]} size={2.5} color={colors.white}>
                      {item.Items}Items
                    </ResponsiveText>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 20,}}>
                    <ResponsiveText size={2.5} color={colors.grey}>
                      Status:
                    </ResponsiveText>
                    <ResponsiveText size={2.5} color={colors.white}>
                      {item.Status}
                    </ResponsiveText>
                  </View>
                  <View>
                  <TouchableOpacity
                      style={{
                        backgroundColor: colors.yellow,
                        padding:3,
                        borderRadius:3,
                      }}>
                      <ResponsiveText size={2}> Details</ResponsiveText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
