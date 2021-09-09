import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '../../../components/Input';
import {globalPath} from '../../../constants/globalPath';
import {colors} from '../../../constants/colorsPallet';
import {wp} from '../../../helpers/Responsiveness';
import {hp} from '../../../helpers/Responsiveness';
import RnButton from '../../../components/RnButton';
import CustomInput from '../../../components/customInput';
import ResponsiveText from '../../../components/RnText';
import {RadioButton, RadioGroup} from 'react-native-flexi-radio-button';
import Icon from '../../../components/Icon';
import DropDown from '../../../components/DropDown';


export default function Optional() {
 const industry = ["Education", "Social Media", "Employer", "Business"];
 const employmentSec = ['Private', 'Government', 'Semi-Government', ];

  return (
    <View style={styles.formArea}>
      <ScrollView style={{flexGrow: 1}}>
        <CustomInput placeHolderText={'20/8/1980'} fieldName={'Birthday'} />
        <CustomInput
          placeHolderText={'Graduate'}
          fieldName={'Educational Background'}
        />
        <CustomInput placeHolderText={'Married'} fieldName={'Marital STatus'} />
        <CustomInput placeHolderText={'3'} fieldName={'No of Children'} />
        <View style={{marginTop:15}}>
          <ResponsiveText size={3} color={colors.grey1} margin={[0,0,5,30]}>Empoyment Sector</ResponsiveText>
          <DropDown data={employmentSec}/>
          </View>
        <View style={{marginTop:15}}>
          <ResponsiveText size={3} color={colors.grey1} margin={[0,0,5,30]}>Industry</ResponsiveText>
          <DropDown data={industry}/>
          </View>

        {/* <CustomInput
          placeHolderText={'Private'}
          dropdownList={true}
          fieldName={'Employment sector'}
        /> */}
        {/* <CustomInput placeHolderText={'Education'} fieldName={'Industry'} /> */}
        <View
          style={{
            justifyContent: 'center',
            marginTop: 25,
            marginBottom: 50,
            width: wp(90),
            alignSelf: 'center',
          }}>
          <ResponsiveText color={colors.grey1} size={3} margin={[0, 0, 0, 10]}>
            Are you interested in receiving potential job offers?
          </ResponsiveText>
          <RadioGroup
            color={colors.yellow}
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: -5,
              marginBottom: 30,
            }}>
            <RadioButton value={'item1'} style={{marginStart: 0}}>
              <ResponsiveText color={colors.grey1} margin={[0, 7, 0, 7]}>
                Yes
              </ResponsiveText>
            </RadioButton>

            <RadioButton value={'item2'} style={{marginStart: 10}}>
              <ResponsiveText color={colors.grey1} margin={[0, 7, 0, 7]}>
                No
              </ResponsiveText>
            </RadioButton>
          </RadioGroup>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: colors.yellow,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              height: hp(5),
              width: wp(80),
            }}>
            <ResponsiveText color={colors.black}>Save</ResponsiveText>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
