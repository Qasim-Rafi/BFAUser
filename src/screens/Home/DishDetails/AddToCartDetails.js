import React from 'react';
import {View, Text} from 'react-native';
import {ADD_TO_CART_FAKE_DATA} from '../../../constants/mock';
import ResponsiveText from '../../../components/RnText';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {wp} from '../../../helpers/Responsiveness';
import {colors} from '../../../constants/colorsPallet';
import CheckBox from '../../../components/Static/CheckBox';

export default function AddToCartDetails(props) {

  // const ExtraChees=(active,index)=>{
  //   props.data.restaurantDishExtraItemList[index].active=!active
  //   console.log('okokoko',props.data.restaurantDishExtraItemList[index].active)
  // }
  return (
    <View style={{margin: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: colors.black2,
          padding: 5,
          marginTop: 20,
        }}>
        <ResponsiveText color={colors.white}>
          {'Choose Soft Drink'}
        </ResponsiveText>
        <ResponsiveText color={colors.white}>{'Required'}</ResponsiveText>
      </View>
      <RadioGroup
        size={16}
        style={{marginTop: 10}}
        color={colors.yellow}
        onSelect={null}>
        {Object.keys(props.data).length != 0
          ? props.data.restaurantSoftDrinksList.map((item1, index) => {
              return (
                <RadioButton
                  style={{padding: 10}}
                  value={item1}
                  color={colors.yellow}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: wp(80),
                      justifyContent: 'space-between',
                    }}>
                    <ResponsiveText
                      margin={[0, 0, 0, 10]}
                      size={3}
                      color={colors.white}>
                      {item1.softDrinkName}
                    </ResponsiveText>
                    {/* <ResponsiveText color={colors.white}>
                      ${item1.price}
                    </ResponsiveText> */}
                  </View>
                </RadioButton>
              );
            })
          : null}
      </RadioGroup>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: colors.black2,
          padding: 5,
          marginTop: 20,
        }}>
        <ResponsiveText color={colors.white}>{'Extra cheese'}</ResponsiveText>
        <ResponsiveText color={colors.white}>{'Optional'}</ResponsiveText>
      </View>
      {Object.keys(props.data).length != 0
        ? props.data.restaurantDishExtraItemList.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <CheckBox text={item.dishExtraItemName} checked={item.active} onPress={()=>props.ExtraChees(item.active,index)}/>
                <ResponsiveText color={colors.white}>
                  ${item.price}
                </ResponsiveText>
              </View>
            );
          })
        : null}
    </View>
  );
}
