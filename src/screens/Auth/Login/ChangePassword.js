import React, {useEffect} from 'react';
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
import Line from '../../../components/Line';
import {routeName} from '../../../constants/routeName';
import {colors} from '../../../constants/colorsPallet';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

//Redux Import
import {useDispatch, useSelector} from 'react-redux';
import {getBfaPartners, loginUser} from '../../../redux/actions/user.actions';
import {StackActions} from '@react-navigation/routers';
import urls from '../../../redux/lib/urls';
import Api from '../../../redux/lib/api';

export default function ChangePassword({navigation, route}) {
  const dropdownRef = React.useRef(null);
  // const showError
  // const [loading, setLoading] = React.useState(false);
  const [errorString, setErrorString] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  //validation form
  const Validation = item => {
    console.log('ErrorMessage: ', errorString);
    setErrorString('');
    if (password == '') {
      setErrorString('Please enter password');
    } else if (password.length < 8) {
      setErrorString('Password Length should be greater then 8');
    } else if (password != confirmPassword) {
      setErrorString('Password is not matching');
    } else {
      forgotPassword();
      setErrorString('');
    }
  };
  const forgotPassword = async () => {
    var obj = {
      password: password,
    };
    try {
      setLoading(true);
      const res = await Api.put(urls.CHANGE_PASSWORD + route.params.id, obj);
      console.log('res', res);
      if (res && res.success == true) {
        setLoading(false);
        navigation.navigate(routeName.LOGIN);
      } else {
        setLoading(false);
        setErrorString('Something went wrong!');
        navigation.navigate(routeName.LOGIN);
      }
    } catch (error) {}
  };
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1, backgroundColor: colors.black}}>
        <View
          style={{
            flex: 0.96,
            backgroundColor: colors.black,
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                margin: 10,
                backgroundColor: colors.yellow1,
                paddingVertical: 10,
                alignSelf: 'flex-start',
                paddingHorizontal: 10,
                borderRadius: 25,
              }}>
              <Icon source={globalPath.BACK_ARROW} />
            </TouchableOpacity>
            {/* <Header navigation={navigation} iconPath={globalPath.BACK_ARROW} /> */}
          </View>
          <View style={styles.screeninfo}>
            <Icon source={globalPath.BALI_ICON} size={60} />
            <ResponsiveText
              margin={[1, 0, 0, 0]}
              color={colors.yellow}
              fontFamily="Regular"
              size={5}>
              Reset your password
            </ResponsiveText>
            <ResponsiveText margin={[5, 0, 0, 0]} color={colors.white}>
              for username{' '}
              <ResponsiveText color={colors.white}>"itxALtaf"</ResponsiveText>
            </ResponsiveText>
          </View>
          <KeyboardAvoidingView
            style={styles.formArea}
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <Input
              padding={[0, 0, 0, 25]}
              onChnageText={text => setPassword(text)}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Password"
              leftIcon={globalPath.LOCK_LOGO}
              secureTextEntry={true}
              autoCapitalize={'none'}
            />
            <Input
              padding={[0, 0, 0, 25]}
              margin={[20, 0, 0, 0]}
              onChnageText={text => setConfirmPassword(text)}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Confirm Password"
              secureTextEntry={true}
              autoCapitalize={'none'}
              leftIcon={globalPath.LOCK_LOGO}
            />
            <View style={styles.forgotPasswordContainer}></View>
            <ResponsiveText
              textAlign="center"
              margin={[-15, 0, 7, 0]}
              color={colors.red}
              fontFamily="Regular"
              size={3}>
              {errorString}
            </ResponsiveText>

            <TouchableOpacity style={styles.signin} onPress={Validation}>
              {loading == true ? (
                <SkypeIndicator count={5} color={colors.black} size={30} />
              ) : (
                <ResponsiveText color={colors.black} size={4}>
                  Set New Password
                </ResponsiveText>
              )}
            </TouchableOpacity>

            {/* <RnButton
                onPress={() => Validation()}
                // onPress={()=>navigation.dispatch(StackActions.replace('Home'))}
                fontFamily="SemiBold"
                height={100}
                margin={[0, 0]}
                title="SIGN IN"
              /> */}
            <View style={styles.footer}>
              {/* <Icon size={wp(8)} margin={[0,0,wp(5),0]} source={globalPath.GOOGLE_LOGO} /> */}
              {/* <ResponsiveText margin={[0, 10]} color={colors.white}>
                New user{' '}
                <ResponsiveText
                  fontFamily="Bold"
                  color={colors.yellow}
                  onPress={() => navigation.navigate(routeName.SIGN_UP)}>
                  Sign up
                </ResponsiveText>
              </ResponsiveText> */}
              {/* <View style={styles.socialIcon}></View> */}
            </View>
          </KeyboardAvoidingView>
        </View>
        <FlashMessage ref={dropdownRef} />
      </ScrollView>
    </>
    // </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: hp(100),
    width: wp(100),
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: colors.black,
  },
  errorText: {
    fontWeight: '400',
  },
  signin: {
    backgroundColor: colors.yellow,
    width: wp(80),
    height: hp(6),
    borderRadius: 7,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  screeninfo: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formArea: {
    flex: 1,
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    backgroundColor: colors.black3,
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
    marginBottom: 20,
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
