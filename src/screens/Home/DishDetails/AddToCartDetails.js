import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ResponsiveText from '../../../components/RnText';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { wp } from '../../../helpers/Responsiveness';
import { colors } from '../../../constants/colorsPallet';
import CheckBox from '../../../components/Static/CheckBox';

export default function AddToCartDetails(props) {
  const onselect = (index, value) => {
    let drink = value.id
    props.SelectedDrinks(value)
    console.log("drink:", drink)
  }

  return (
    <View style={{ margin: 20 }}>
      {props.data.restaurantSoftDrinksList.length > 0 ?
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
        </View> :
        undefined
      }

      <RadioGroup
        size={16}
        style={{ marginTop: 10 }}
        color={colors.yellow}
        onSelect={(index, value) => onselect(index, value)} selectedIndex={0}
      >
        {Object.keys(props.data).length != 0 && props.data.restaurantSoftDrinksList
          ? props.data.restaurantSoftDrinksList.map((item1, index) => {
            return (
              <RadioButton
                style={{ padding: 10 }}
                value={item1}
                color={colors.yellow}

              >
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
      {props.data.restaurantDishExtraItemList.length > 0 ?
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
        </View> : undefined

      }

      {Object.keys(props.data).length != 0 && props.data.restaurantDishExtraItemList
        ? props.data.restaurantDishExtraItemList.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <CheckBox text={item.dishExtraItemName} additem={props.ExtraChees} value={item} />
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
