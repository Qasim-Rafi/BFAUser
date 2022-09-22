import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ResponsiveText from '../../../components/RnText';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {wp} from '../../../helpers/Responsiveness';
import {colors} from '../../../constants/colorsPallet';
import CheckBox from '../../../components/Static/CheckBox';
import {globalPath} from '../../../constants/globalPath';
import Icon from '../../../components/Icon';

export default function AddToCartDetails(props) {
  const [CheeseCount, setCheeseCount] = useState(1);
  const [drinkCount, setDrinkCount] = useState(1);
  React.useEffect(() => {
    // addDish(route.params.dish);
    // var sumoflinedItems = linkedItem.reduce((a, c) => {
    //   return a + c.price;
    // }, 0);
  }, [CheeseCount]);
  const onselect = (index, value) => {
    let drink = value.id;
    props.SelectedDrinks(value);
    console.log('drink:', drink);
  };

  return (
    <View style={{marginHorizontal: 20}}>
      {props.data.restaurantSoftDrinksList?.length > 0 ? (
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
      ) : undefined}

      {Object.keys(props.data).length != 0 &&
      props.data.restaurantSoftDrinksList
        ? props.data.restaurantSoftDrinksList?.map((item1, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <CheckBox
                  text={item1.softDrinkName}
                  additem={props.AddDrinks}
                  value={item1}
                  index={index}
                />
                <View style={{flexDirection: 'row'}}>
                  {props.Combo?null:
                  <ResponsiveText color={colors.white} margin={[0, 10]}>
                    ${item1.quantity ? item1.price * item1.quantity : item1.price}
                  </ResponsiveText>
                  }
                  {item1.quantity && !props.Combo  ? (
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() => {
                          props.UpdateDrinksQ(index, 'dec');
                          setCheeseCount(CheeseCount > 1 ? CheeseCount - 1 : 1);
                        }}>
                        <Icon size={28} source={globalPath.MINUS_ICON} />
                      </TouchableOpacity>
                      <ResponsiveText
                        size={5}
                        margin={[0, 10]}
                        color={colors.white}>
                        {item1.quantity}
                      </ResponsiveText>
                      <TouchableOpacity
                        onPress={() => {
                          props.UpdateDrinksQ(index, 'inc');
                          setCheeseCount(CheeseCount + 1);
                        }}>
                        <Icon size={28} source={globalPath.PLUS_ICON} />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>
            );
          })
        : null}
      {props.data.restaurantDishExtraItemList?.length > 0 && !props.Combo ? (
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
      ) : undefined}

      {Object.keys(props.data).length != 0 && !props.Combo && 
      props.data.restaurantDishExtraItemList
        ? props.data.restaurantDishExtraItemList?.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <CheckBox
                  text={item.dishExtraItemName}
                  additem={props.ExtraChees}
                  value={item}
                  index={index}
                />

                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText color={colors.white} margin={[0, 10]}>
                    ${item.quantity ? item.price * item.quantity : item.price}
                  </ResponsiveText>
                  {item.quantity ? (
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() => {
                          props.UpdateExtra(index, 'dec');
                          setCheeseCount(CheeseCount > 1 ? CheeseCount - 1 : 1);
                        }}>
                        <Icon size={28} source={globalPath.MINUS_ICON} />
                      </TouchableOpacity>
                      <ResponsiveText
                        size={5}
                        margin={[0, 10]}
                        color={colors.white}>
                        {item.quantity}
                      </ResponsiveText>
                      <TouchableOpacity
                        onPress={() => {
                          props.UpdateExtra(index, 'inc');
                          setCheeseCount(CheeseCount + 1);
                        }}>
                        <Icon size={28} source={globalPath.PLUS_ICON} />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
}
