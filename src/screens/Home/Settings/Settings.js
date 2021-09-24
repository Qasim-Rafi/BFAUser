import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '../../../components/Icon';
import CustomRadioButton from '../../../components/RadioButton';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import {globalPath} from '../../../constants/globalPath';
import {hp, wp} from '../../../helpers/Responsiveness';
import Header from '../../../components/Header';

export default function Settings({navigation}) {
  const [checked, setCheck] = React.useState(true);

  return (
    <View style={{flex: 1, backgroundColor: colors.black3}}>
      {/* <Header iconPath={globalPath.BACK_ARROW} /> */}
      <Header iconPath={globalPath.BACK_ARROW} navigation={navigation} />
      <View
        style={{
          flex: 0.9,
          marginHorizontal: 20,
          backgroundColor: colors.black3,
        }}>
        <ResponsiveText color={colors.yellow} margin={[20, 0, 15, 0]} size={4}>
          Settings
        </ResponsiveText>

        <ResponsiveText color={colors.white} size={4}>
          Choose your Theme
        </ResponsiveText>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.black1,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 22,
                width: 22,
                backgroundColor: colors.black,
                marginEnd: 10,
                borderColor: colors.grey,
                borderWidth: 1,
              }}></View>
            <ResponsiveText margin={[0, 30, 0, 0]} color={colors.grey}>
              Dark Mode
            </ResponsiveText>

            <TouchableOpacity
              style={{
                backgroundColor: checked ? colors.black3 : undefined,
                borderRadius: 50,
                borderColor: colors.yellow,
                borderWidth: 2,
                height: 20,
                width: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setCheck(true);
              }}>
              {checked ? (
                <Icon
                  source={globalPath.RADIO_DOT}
                  size={6}
                  tintColor={colors.yellow}
                />
              ) : (
                <View />
              )}
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.black1,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 22,
                width: 22,
                backgroundColor: colors.white,
                marginEnd: 10,
                borderColor: colors.grey,
                borderWidth: 1,
              }}></View>
            <ResponsiveText margin={[0, 30, 0, 0]} color={colors.grey}>
              Light Mode
            </ResponsiveText>
            <TouchableOpacity
              style={{
                backgroundColor: checked ? undefined : colors.black3,
                borderRadius: 50,
                borderColor: colors.yellow,
                borderWidth: 2,
                height: 20,
                width: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setCheck(false);
              }}>
              {checked ? (
                <View />
              ) : (
                <Icon
                  source={globalPath.RADIO_DOT}
                  size={6}
                  tintColor={colors.yellow}
                />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}
