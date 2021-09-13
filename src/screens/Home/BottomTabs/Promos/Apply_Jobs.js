import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Header from '../../../../components/Header';
import RnButton from '../../../../components/RnButton';
import ResponsiveText from '../../../../components/RnText';
import {colors} from '../../../../constants/colorsPallet';
import { globalPath } from '../../../../constants/globalPath';
import {hp, wp} from '../../../../helpers/Responsiveness';

export default function Apply_Jobs({navigation}) {
  return (
    <View style={styles.main_container}>
      <Header navigation={navigation} iconPath={globalPath.BACK_ARROW} />
      <View style={{margin: 20, flex: 0.9}}>
        <ResponsiveText size={4} color={colors.yellow}>
          {' '}
          Job Details
        </ResponsiveText>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
            {' '}
            Job Title
          </ResponsiveText>
          <View
            style={{
              backgroundColor: colors.black2,
              width: wp(90),
              height: hp(7),
              borderRadius: 6,
            }}></View>
        </View>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
            Description
          </ResponsiveText>
          <View
            style={{
              backgroundColor: colors.black2,
              width: wp(90),
              borderRadius: 6,
            }}>
            <TextInput
              multiline={true}
              placeholderTextColor={colors.grey}
              numberOfLines={3}
              style={{margin: 10}}
              placeholder="Example"
            />
          </View>
        </View>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
            {' '}
            Image Url
          </ResponsiveText>
          <View style={{flexDirection:'row'}}>
            <View
              style={{
                backgroundColor: colors.black2,
                width: wp(65),
                height: hp(7),
                borderRadius: 6,
              }}>
              </View>
              <TouchableOpacity style={{backgroundColor:colors.grey,width:wp(25),alignItems:'center',justifyContent:'center', borderTopRightRadius:7, borderBottomRightRadius:7}}><ResponsiveText>Browse</ResponsiveText></TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <RnButton style={styles.btn_style}>
            <ResponsiveText size={4}>Submit</ResponsiveText>
          </RnButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors.black3,
    flex: 1,
  },
  marginTop: {
    marginTop: 20,
  },
  btn_style: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    width: wp(80),
  },
});
