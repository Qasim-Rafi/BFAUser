import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../../components/Header';
import {colors} from '../../../constants/colorsPallet';
import {globalPath} from '../../../constants/globalPath';
import {hp, wp} from '../../../helpers/Responsiveness';
import ResponsiveText from '../../../components/RnText';
import Icon from '../../../components/Icon';
import CustomInput from '../../../components/customInput';
import {routeName} from '../../../constants/routeName';
import { useSelector } from 'react-redux';

export default function AddCard({navigation}) {
  const [checked, setCheck] = React.useState(false);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  return (
    <View style={{flex: 1, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}}>
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

      <ResponsiveText margin={[20, 20, 10, 20]} color={colors.yellow} size={4}>
        Add Card
      </ResponsiveText>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: checked ? isThemeDark ?  colors.black3: colors.bgWhite : undefined,
            borderRadius: 50,
            borderColor: colors.yellow,
            borderWidth: 2,
            height: 20,
            width: 20,
            marginLeft: 30,
            marginTop: 15,
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
        <Icon source={globalPath.VISA_CARD} margin={[0, 0, 0, 15]} size={50} />

        <TouchableOpacity
          style={{
            backgroundColor: checked ? isThemeDark ?  colors.black3: colors.bgWhite : undefined,
            borderRadius: 50,
            borderColor: colors.yellow,
            borderWidth: 2,
            height: 20,
            width: 20,
            marginLeft: 25,
            marginTop: 15,
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
        <Icon
          source={globalPath.MASTER_CARD}
          margin={[0, 0, 0, 15]}
          size={50}
        />
      </View>

      <View
        style={{
          flex: 0.9,
          marginTop: 5,
          backgroundColor: isThemeDark ?  colors.black2: colors.white,
          borderTopRightRadius: 30,
          paddingVertical: 5,
          borderTopLeftRadius: 30,
        }}>
        <CustomInput
          fieldName={'First Name'}
          textMargin={[0, 0, 0, 20]}
          placeHolderText={''}
        />
        <CustomInput
          fieldName={'Last Name'}
          textMargin={[0, 0, 0, 20]}
          placeHolderText={''}
        />
        <CustomInput
          fieldName={'Card Number'}
          textMargin={[0, 0, 0, 20]}
          placeHolderText={''}
        />
        <CustomInput
          fieldName={'Expiration Date (MM/YY)'}
          textMargin={[0, 0, 0, 20]}
          placeHolderText={''}
        />
        <CustomInput
          fieldName={'Security Code (CVV)'}
          textMargin={[0, 0, 0, 20]}
          placeHolderText={''}
        />
        <ResponsiveText size={3} margin={[10, 30, 0, 30]} color={colors.grey1}>
          Your payment will be proceeded internationally. Additional bank fees
          may apply.
        </ResponsiveText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(routeName.TRANSACTION_CONFIRMATION,'Card');
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp(75),
            marginTop: 10,
            height: hp(5),
            alignSelf: 'center',
            borderRadius: 7,
            backgroundColor: colors.yellow,
          }}>
          <ResponsiveText color={colors.black} size={3.5}>
            Save
          </ResponsiveText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
