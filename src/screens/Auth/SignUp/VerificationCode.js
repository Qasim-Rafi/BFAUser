import React, {useRef} from 'react';
import {StyleSheet, View, ImageBackground, Platform, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {hp, wp} from '../../../helpers/Responsiveness';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {Spacing} from '../../../constants/spacingScale';
import {routeName} from '../../../constants/routeName';
import {StackActions} from '@react-navigation/routers';

import {colors} from '../../../constants/colorsPallet';
import {TextInput} from 'react-native-gesture-handler';
import Preferences from '../../Home/BottomTabs/More/Preferences';
import {useDispatch, useSelector} from 'react-redux';
import {verifyUser} from '../../../redux/actions/user.actions';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import Icon from '../../../components/Icon';
const CELL_COUNT = 6;

export default function VerificationCode({navigation,route}) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dropdownRef = React.useRef(null);

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const checkCode = () => {
    if (value != '000000') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Unable to verify',
        duration: 3000,
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else {
      if(route.params){
        navigation.replace(routeName.CHANGE_PASSWORD,{data:route.params.data})
      }else{

        dispatch(verifyUser(0, navigation));
      }
    }
  };
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={hp(-10)}
    //   style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground style={styles.container} source={isThemeDark? globalPath.BG_IMAGE : globalPath.BG_IMAGE_LIGHT}>
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
      </View>
        <View style={styles.screeninfo}>
          <ResponsiveText color={colors.yellow} fontFamily="Regular" size={8}>
            Verification
          </ResponsiveText>
          <ResponsiveText color={colors.white}>
            Mobile Verification
          </ResponsiveText>
        </View>
        <View style={[styles.formArea,{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <ResponsiveText size={4} color={colors.yellow}>
              {' '}
              Verify your mobile number
            </ResponsiveText>
            <ResponsiveText textAlign={'center'} color={isThemeDark ?  colors.white: colors.black}>
              {' '}
              A text message with 6 digit code send to Your Mobile number
            </ResponsiveText>
          </View>
          <View>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFiledRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell,{backgroundColor: isThemeDark ?  colors.black3: colors.white}]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

          <RnButton
            onPress={() => checkCode()}
            fontFamily="SemiBold"
            margin={[20, 0]}
            title="Continue"
          />
        </View>
      </ImageBackground>
      <FlashMessage ref={dropdownRef} />
    </ScrollView>
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
    backgroundColor: colors.grey3,
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
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 40},
  codeFiledRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 26,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    justifyContent: 'center',
    color: colors.yellow,
    backgroundColor: colors.black2,
  },
  focusCell: {
    borderColor: colors.grey1,
    color: colors.yellow,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
