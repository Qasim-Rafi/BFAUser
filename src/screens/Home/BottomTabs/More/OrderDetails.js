//Node Imports
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Local Imports
import {colors} from '../../../../constants/colorsPallet';
import {hp} from '../../../../helpers/Responsiveness';
import {wp} from '../../../../helpers/Responsiveness';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import Header from '../../../../components/Header';
import ResponsiveText from '../../../../components/RnText';
import moment from 'moment';
import StaticMap from '../../../../components/StaticMap';
import Restaurant_Description from '../../RestaurantBranchDetail/ResturantDesceiption';

export default function OrderDetails({navigation, route}) {
  const [data, setdata] = React.useState(route.params.data);
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
      <View
        style={{
          backgroundColor: colors.black3,
          marginHorizontal: wp(5),
          marginVertical: hp(2),
        }}>
        <ResponsiveText size={4} color={colors.yellow}>
          Order Details
        </ResponsiveText>
      </View>

      <View style={{padding: hp(1), flexDirection: 'row'}}>
        <ResponsiveText size={3} color={colors.white} margin={[0, 0, 0, 15]}>
          Id:
        </ResponsiveText>
        <ResponsiveText size={3} color={colors.grey} margin={[0, 0, 0, 15]}>
          {data.id}
        </ResponsiveText>
      </View>
      <View style={{padding: hp(1), flexDirection: 'row'}}>
        <ResponsiveText size={3} color={colors.white} margin={[0, 0, 0, 15]}>
          Time:
        </ResponsiveText>
        <ResponsiveText size={3} color={colors.grey} margin={[0, 0, 0, 15]}>
          {moment(data.orderDateTimes).format("dddd, MMMM Do YYYY, h:mm a") }
        </ResponsiveText>
      </View>

      <View
        style={{
          backgroundColor: colors.black1,
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <View
          style={{flex: 0.6, justifyContent: 'center', marginHorizontal: 15}}>
          <ResponsiveText size={3} color={colors.white}>
            Ordered Items
          </ResponsiveText>
        </View>
        <View style={{flex: 0.2, justifyContent: 'center'}}>
          <ResponsiveText size={3} color={colors.white}>
            Qnt
          </ResponsiveText>
        </View>
        <View style={{flex: 0.2, justifyContent: 'center'}}>
          <ResponsiveText size={3} color={colors.white}>
            Amount
          </ResponsiveText>
        </View>
      </View>
      {data.dishlist.map(item => {
        return (
          <View
            style={{
              backgroundColor: colors.black2,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: colors.black1,
              paddingVertical: 10,
            }}>
            <View
              style={{
                flex: 0.6,
                justifyContent: 'center',
                marginHorizontal: 15,
              }}>
              <ResponsiveText size={3} color={colors.grey}>
                {item.dishName}
              </ResponsiveText>
            </View>
            <View style={{flex: 0.2, justifyContent: 'center'}}>
              <ResponsiveText size={3} color={colors.grey}>
                {item.quantity}
              </ResponsiveText>
            </View>
            <View style={{flex: 0.2, justifyContent: 'center'}}>
              <ResponsiveText size={3} color={colors.yellow}>
                $8.00
              </ResponsiveText>
            </View>
          </View>
        );
      })}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 25,
          marginTop: 10,
        }}>
        <View style={{flex: 0.45, alignItems: 'flex-start'}}>
          <ResponsiveText color={colors.white} size={3}>
            Total
          </ResponsiveText>
        </View>
        <View style={{flex: 0.55, alignItems: 'flex-end'}}>
          <ResponsiveText margin={[0, 10, 0, 0]} color={colors.yellow} size={3}>
            $ {data.amount}
          </ResponsiveText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 25,
          marginTop: 10,
          borderBottomColor: colors.black1,
          paddingBottom: 5,
          borderBottomWidth: 1,
        }}>
        <View style={{flex: 0.45, alignItems: 'flex-start'}}>
          <ResponsiveText color={colors.white} size={3}>
            Tips
          </ResponsiveText>
        </View>
        <View style={{flex: 0.55, alignItems: 'flex-end'}}>
          <ResponsiveText margin={[0, 10, 0, 0]} color={colors.yellow} size={3}>
            $ 6.00
          </ResponsiveText>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 25,
          marginTop: 20,
        }}>
        <View style={{flex: 0.45, alignItems: 'flex-start'}}>
          <ResponsiveText color={colors.white} size={3}>
            Final Total
          </ResponsiveText>
        </View>
        <View style={{flex: 0.55, alignItems: 'flex-end'}}>
          <ResponsiveText
            margin={[0, 10, 0, 0]}
            color={colors.yellow}
            size={4.5}>
            $ {data.amount}
          </ResponsiveText>
        </View>
      </View>
    </View>
  );
}
