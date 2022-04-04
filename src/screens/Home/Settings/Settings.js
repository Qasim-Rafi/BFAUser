import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../../../components/Icon';
import CustomRadioButton from '../../../components/RadioButton';
import ResponsiveText from '../../../components/RnText';
import { colors } from '../../../constants/colorsPallet';
import { globalPath } from '../../../constants/globalPath';
import { hp, wp } from '../../../helpers/Responsiveness';
import Header from '../../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../redux/actions/user.actions';

export default function Settings({ navigation }) {
  const dispatch = useDispatch()
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  console.log('isThemeDark', isThemeDark);

  const [checked, setCheck] = React.useState(isThemeDark);


  const selectTheme = (data) => {
    setCheck(data)
    dispatch(setTheme(data))
  }

  return (
    <View style={{ flex: 1, backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite }}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 7 }}>
        <TouchableOpacity style={{ backgroundColor: colors.yellow1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.9,
          marginHorizontal: 20,
          backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite
        }}>
        <ResponsiveText color={colors.yellow} margin={[20, 0, 15, 0]} size={4}>
          Settings
        </ResponsiveText>

        <ResponsiveText color={isThemeDark ? colors.white : colors.black} size={4}>
          Choose your Theme
        </ResponsiveText>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              backgroundColor: isThemeDark ? colors.black1 : colors.white,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              selectTheme(true);
            }}
          >
            <View
              style={{
                height: 22,
                width: 22,
                backgroundColor: colors.black,
                marginEnd: 10,
                borderColor: colors.grey,
                borderWidth: 1,
              }}></View>
            <ResponsiveText margin={[0, 30, 0, 0]} color={isThemeDark ? colors.grey : colors.black}>
              Dark Mode
            </ResponsiveText>

            <View
              style={{
                backgroundColor: isThemeDark ? colors.black3 : undefined,
                borderRadius: 50,
                borderColor: isThemeDark ? colors.yellow : colors.black,
                borderWidth: 2,
                height: 20,
                width: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isThemeDark ? (
                <Icon
                  source={globalPath.RADIO_DOT}
                  size={6}
                  tintColor={isThemeDark ? colors.yellow : colors.black}
                />
              ) : (
                <View />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: isThemeDark ? colors.black1 : colors.white,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              selectTheme(false);
            }}
          >
            <View
              style={{
                height: 22,
                width: 22,
                backgroundColor: colors.white,
                marginEnd: 10,
                borderColor: colors.grey,
                borderWidth: 1,
              }}></View>
            <ResponsiveText margin={[0, 30, 0, 0]} color={isThemeDark ? colors.grey : colors.black}>
              Light Mode
            </ResponsiveText>
            <View
              style={{
                backgroundColor: isThemeDark ? undefined : colors.white,
                borderRadius: 50,
                borderColor: colors.yellow,
                borderWidth: 2,
                height: 20,
                width: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isThemeDark ? (
                <View />
              ) : (
                <Icon
                  source={globalPath.RADIO_DOT}
                  size={6}
                  tintColor={colors.yellow}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
