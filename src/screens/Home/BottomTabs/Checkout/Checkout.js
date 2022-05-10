import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../../../components/Header';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import {colors} from '../../../../constants/colorsPallet';
import {globalPath} from '../../../../constants/globalPath';
import {routeName} from '../../../../constants/routeName';
import {hp, wp} from '../../../../helpers/Responsiveness';

const Checkout = ({navigation, route}) => {
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  return (
    <View style={{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite, flex: 1}}>
      <Header navigation={navigation} iconPath={globalPath.BACK_ARROW} />
      <View style={{flex: 0.9}}>
        <View
          style={{
            marginVertical: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ResponsiveText
            margin={[0, 0, -5, 0]}
            color={isThemeDark ?  colors.white: colors.black}
            size={4.5}>
            Your Bcoin Balance
          </ResponsiveText>
          <ResponsiveText fontFamily={'Bold'} color={isThemeDark ?  colors.white: colors.black} size={12}>
            114
          </ResponsiveText>
          <ResponsiveText
            margin={[-5, 0, 0, 0]}
            color={isThemeDark ?  colors.white: colors.black}
            size={4.5}>
            Choose Payment Method:
          </ResponsiveText>
        </View>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TRANSACTION_CONFIRMATION', {paymentMethod:'Bcoin'})
            }>
            <View
              style={{
                backgroundColor: isThemeDark ? colors.black2 : colors.white,
                paddingHorizontal: 20,
                paddingVertical: 15,
                marginHorizontal: 20,
                borderRadius: 10,

                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon size={50} source={globalPath.COWRIES} />

              <ResponsiveText
                margin={[0, 0, 5, 20]}
                size={4.5}
                color={isThemeDark ?  colors.white: colors.black}>
                Bcoin
              </ResponsiveText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate(routeName.MANAGE_CARDS, {paymentMethod:'Card'})}>
            onPress={() => navigation.navigate(routeName.TRANSACTION_CONFIRMATION, {paymentMethod:'Card'})}>
            <View
              style={{
                backgroundColor: isThemeDark ? colors.black2 : colors.white,
                paddingHorizontal: 20,
                paddingVertical: 15,
                marginHorizontal: 20,
                borderRadius: 10,
                marginTop: 10,
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.imageView}
                source={require('../../../../assets/icons/bank_cards.png')}
              />
              <ResponsiveText
                margin={[0, 0, 5, 20]}
                size={4.5}
                color={isThemeDark ?  colors.white: colors.black}>
                Cards
              </ResponsiveText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TRANSACTION_CONFIRMATION', {paymentMethod:'Cash'})
            }>
            <View
              style={{
                backgroundColor: isThemeDark ? colors.black2 : colors.white,
                paddingHorizontal: 20,
                paddingVertical: 15,
                marginHorizontal: 20,
                borderRadius: 10,
                marginTop: 10,
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Icon
              size={50}
              source={globalPath.CASH}
            /> */}
              <Image
                style={styles.cashImage}
                source={require('../../../../assets/fake_Images/Notes.png')}
              />
              <ResponsiveText
                margin={[0, 0, 5, 20]}
                size={4.5}
                color={isThemeDark ?  colors.white: colors.black}>
                Cash
              </ResponsiveText>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View
            style={{
              backgroundColor: colors.black2,
              height: hp(28),
              width: wp(45),
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Icon
              margin={[15, 0, 0, 0]}
              size={(wp(10), hp(10))}
              source={require('../../../../assets/icons/cash.png')}
            />
            <ResponsiveText color={colors.white}>Pay With Cash</ResponsiveText>
          </View>
          <View
            style={{
              backgroundColor: colors.black2,
              height: hp(28),
              width: wp(45),
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Icon
              margin={[15, 0, 0, 0]}
              size={(wp(10), hp(10))}
              source={require('../../../../assets/icons/card.png')}
            />
            <ResponsiveText color={colors.white}>Pay With Card</ResponsiveText>
          </View>
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity style={styles.btn_Style} onPress={()=>{navigation.navigate(routeName.TRANSACTION_HISTORY)}}>
            <Icon
              size={(wp(3), hp(3))}
              source={require('../../../../assets/icons/transactions.png')}
            />
            <ResponsiveText margin={[0, 0, 0, 10]} color={colors.white}>
              View Previous Transaction
            </ResponsiveText>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: colors.black2,
              height: hp(9),
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              size={(wp(3), hp(3))}
              source={require('../../../../assets/icons/manage-card.png')}
            />
            <TouchableOpacity onPress={()=>navigation.navigate(routeName.MANAGE_CARDS)}>
            <ResponsiveText margin={[0, 0, 0, 10]} color={colors.white}>
              Manage Cards
            </ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
       */}
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  btn_Style: {
    backgroundColor: colors.black2,
    height: hp(9),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    borderRadius: 5,
    width: 60,
    resizeMode: 'cover',
    height: 40,
    paddingTop: 50,
  },
  cashImage: {
    borderRadius: 2,
    width: 60,
    resizeMode: 'cover',
    height: 30,
    paddingTop: 50,
  },
});
