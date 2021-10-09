import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Input from '../../../components/Input';
import {globalPath} from '../../../constants/globalPath';
import {colors} from '../../../constants/colorsPallet';
import {wp} from '../../../helpers/Responsiveness';
import {hp} from '../../../helpers/Responsiveness';
import RnButton from '../../../components/RnButton';
import {TextInput} from 'react-native-paper';
import ResponsiveText from '../../../components/RnText';
import CustomInput from '../../../components/customInput';

export default function Profile() {
  return (
    <View style={styles.formArea}>
      <View style={{flex:0.68}}>
        <CustomInput
          placeHolderText={'Umar Gani'}
          fieldName={'User Name'}
        />
        <CustomInput
          placeHolderText={'umargani@gmail.com'}
          fieldName={'Email'}
        />
        <CustomInput placeHolderText={'000-000-0000'} fieldName={'Phone'} />
      </View>
      <View  style={{flex:0.32}}>
        <TouchableOpacity style={{alignSelf:'center' ,backgroundColor:colors.yellow,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7, height:hp(5), width:wp(80)}}>
          <ResponsiveText color={colors.black}>Save</ResponsiveText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  formArea: {
    flex: 0.7,
    // borderTopRightRadius: wp(8),
    // borderTopLeftRadius: wp(8),
    backgroundColor: '#202020',
    paddingTop: 10,
  },
});
