import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/colorsPallet';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import ResponsiveText from '../../../components/RnText';
import {hp, wp} from '../../../helpers/Responsiveness';
import AddToCartDetails from './AddToCartDetails';
import RnButton from '../../../components/RnButton';
import CheckBox from '../../../components/Static/CheckBox';
import Icon from '../../../components/Icon';
import {globalPath} from '../../../constants/globalPath';
import { routeName } from '../../../constants/routeName';

export default function AddToCart({navigation}) {
  return (
      <View style={{flex:1}}>
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.headerImage}>
          <ImageHeader navigation={navigation} />
        </View>
        <View style={{padding:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <ResponsiveText color={colors.white}>Nasi Ayam Bakar Madura</ResponsiveText>
                <ResponsiveText color={colors.yellow}> $10</ResponsiveText>
            </View>
            <ResponsiveText color={colors.grey1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</ResponsiveText>
        </View>
        <AddToCartDetails />
        
        <View
          style={{
            flexDirection: 'row',
            flex: 0.15,
            backgroundColor: colors.black2,
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <ResponsiveText color={colors.yellow} margin={[7, 0, 0, 7]}>
            UpSize
          </ResponsiveText>
          <TouchableOpacity
            style={{
              height: hp(3.5),
              width: wp(20),
              backgroundColor: colors.yellow,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 8,
              borderRadius: 6,
            }}>
            <ResponsiveText>Optional</ResponsiveText>
          </TouchableOpacity>
        </View>
        <View style={{padding: 20}}>
            <View>
          <CheckBox text={'French Fries'} />
            </View>
            <View style={{marginTop: 10}}>
          <CheckBox text={'Hot Wings'} />
            </View>
            <View style={{marginTop: 10}}>
          <CheckBox text={'Nuggets'} />
            </View>

        </View>
        <View style={{flexDirection: 'row', margin: 20}}>
          <TouchableOpacity>
            <Icon source={globalPath.PLUS_ICON} />
          </TouchableOpacity>
          <ResponsiveText color={colors.white} margin={[0, 0, 0, 10]}>
            Add Special Instruction
          </ResponsiveText>
        </View>
      </View>
      <View style={{flexDirection: 'row',height:hp(9)}}>
        <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:colors.black1,width:wp(62),padding:16}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Icon size={28} source={globalPath.MINUS_ICON} />
            </TouchableOpacity>
            <ResponsiveText size={5} margin={[0,10]} color={colors.white}>1</ResponsiveText>
            <TouchableOpacity>
              <Icon size={28} source={globalPath.PLUS_ICON} />
            </TouchableOpacity>
          </View>
          <ResponsiveText size={5} color={colors.white}>$10.00</ResponsiveText>
        </View>
        <View style={{padding:16,backgroundColor:colors.black2}}>
          <TouchableOpacity  style={{
              height: hp(4),
              width: wp(30),
              backgroundColor: colors.yellow,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
            }} onPress={()=>navigation.navigate(routeName.TRANSACTION_CONFIRMATION)}>
            <ResponsiveText > Add to cart</ResponsiveText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black3,
  },
  headerImage: {
    height: 200,
  },
});
