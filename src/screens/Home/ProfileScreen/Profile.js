import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Input from '../../../components/Input';
import { globalPath } from '../../../constants/globalPath';
import { colors } from '../../../constants/colorsPallet';
import { wp } from '../../../helpers/Responsiveness';
import { hp } from '../../../helpers/Responsiveness';
import RnButton from '../../../components/RnButton';
import { TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import ResponsiveText from '../../../components/RnText';
import CustomInput from '../../../components/customInput';
import { getProfileData } from '../../../redux/actions/user.actions';

export default function Profile() {
  const profileData = useSelector(state => state.appReducers.profileData.data);
  console.log('Profile: ', profileData);
  const loading = useSelector(state => state.appReducers.profileData.loading);
  console.log('loading', loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProfileData());
    console.log('loading', loading);

  }, []);

  return (
    <View style={styles.formArea}>
      <ScrollView>
        <View style={{ flex: 0.68 }}>

          <CustomInput
            placeHolderText={profileData.fullName}
            fieldName={'First Name'}
          />
          <CustomInput
            placeHolderText={profileData.fullName}
            fieldName={'Last Name'}
          />
          <CustomInput
            placeHolderText={profileData.username}
            fieldName={'User Name'}
          />
          <CustomInput
            placeHolderText={profileData.email}
            fieldName={'Email'}
          />
          <CustomInput placeHolderText={'000-000-0000'} fieldName={'Phone'} />
        </View>
        <View style={{ flex: 0.32, marginTop: 40, marginBottom: 20 }}>
          <TouchableOpacity style={{
            alignSelf: 'center', backgroundColor: colors.yellow,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7, height: hp(5), width: wp(80)
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
