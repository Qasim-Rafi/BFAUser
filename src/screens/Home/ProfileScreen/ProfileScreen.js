import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
import {ScrollView, } from 'react-native-gesture-handler';

import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {Spacing} from '../../../constants/spacingScale';
import Line from '../../../components/Line';
import {routeName} from '../../../constants/routeName';
import {colors} from '../../../constants/colorsPallet';

export default function ProfileScreen({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={hp(-10)}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.screeninfo}>
            <View style={{flexDirection:'row',justifyContent:"space-between",flex:.4}}> 
                <TouchableOpacity style={{backgroundColor:colors.white,height:hp(5),padding:9,borderRadius:5}}onPress={()=>{navigation.goBack()}}><Icon source={globalPath.BACK_BLACK_ARROW}/></TouchableOpacity>
                <ResponsiveText size={4}>Profile</ResponsiveText>
                <TouchableOpacity style={{backgroundColor:colors.white,height:hp(5),padding:9,borderRadius:5}}><Icon source={globalPath.EDIT_PROFILE}/></TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',flex:.5}}>
                <Image style={{width:100,height:100,borderRadius:50,marginBottom:10}} source={globalPath.PROFILE_LOGO}/>
                <ResponsiveText size={4}>Hassanal Bolkiah</ResponsiveText>
                <ResponsiveText color={colors.lightBlack} size={3}>hassanl@gmail.com</ResponsiveText>
            </View>
        </View>
        <View style={styles.formArea}>
          <Input
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Full Name"
            leftIcon={globalPath.USER_LOGO}
          />
          <Input
            margin={[20, 0, 0, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Email"
            leftIcon={globalPath.EMAIL_LOGO}
          />
          <Input
            margin={[20, 0, 0, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Phone"
            leftIcon={globalPath.PHONE_LOGO}
          />
          <Input
            margin={[20, 0, wp(10), 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Password"
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          />

          <RnButton
            fontFamily="SemiBold"
            height={100}
            margin={[0, 0]}
            title="Update Profile"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
  },
  screeninfo: {
    flex: 0.35,
    paddingBottom: wp(10),
    padding: wp(5),
  },
  formArea: {
    flex: 0.65,
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    backgroundColor: '#202020',
    padding: wp(10),
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    paddingHorizontal: 10,
    marginBottom: wp(8),
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
