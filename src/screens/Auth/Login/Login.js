import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  useColorScheme,
  ViewPagerAndroidBase,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';

import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {Spacing} from '../../../constants/spacingScale';
import Line from '../../../components/Line';
import { routeName } from '../../../constants/routeName';
import { colors } from '../../../constants/colorsPallet';

export default function Login({navigation}) {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={hp(-10)}
    //   style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <ImageBackground style={styles.container} source={globalPath.BG_IMAGE} >
        <View style={styles.screeninfo}>
          <ResponsiveText  color={colors.yellow} fontFamily="Regular" size={8} >
            Sign In
          </ResponsiveText>
          <ResponsiveText color={colors.white}>
            Please Login to Continue
          </ResponsiveText>
        </View>
        <View style={styles.formArea}>
          <Input
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Email"
            leftIcon={globalPath.EMAIL_LOGO}
            
          />
          <Input
            margin={[20, 0, wp(10), 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Password"
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          />
          <View style={styles.forgotPasswordContainer}>
            <Line color={colors.grey5} width={wp(20)} />
            <ResponsiveText margin={[0, 10]} color={colors.white}>
              Forgot Password?
            </ResponsiveText>
            <Line color={colors.grey5} width={wp(20)} />
          </View>
          <RnButton onPress={()=>navigation.navigate(routeName.SELECT_COISINES)} fontFamily='SemiBold' height={100} margin={[0, 0]} title="SIGN IN" />
          <View style={styles.footer}>
           
            {/* <Icon size={wp(8)} margin={[0,0,wp(5),0]} source={globalPath.GOOGLE_LOGO} /> */}
            <ResponsiveText margin={[0, 10]} color={colors.white}>
              New user{' '}
              <ResponsiveText  fontFamily='Bold' color={colors.yellow}  onPress={()=>navigation.navigate(routeName.SIGN_UP)}>Sign up</ResponsiveText>
            </ResponsiveText>
            {/* <View style={styles.socialIcon}></View> */}
          </View>
        </View>
      </ImageBackground>
      </ScrollView>
    // </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    height:hp(100),
    width:wp(100),
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: colors.black,
  },
  screeninfo: {
    flex: 0.25,
    justifyContent: 'flex-end',
    paddingBottom: wp(10),
    padding: wp(5),
  },
  formArea: {
    flex: 0.77,
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    backgroundColor: '#2f2f2f',
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
