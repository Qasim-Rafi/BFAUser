import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Platform,
  Button,
  TextInput,
  TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
  Text,
  SafeAreaView,
} from 'react-native';
import DropDown from '../../../components/CustomizeDropdown';
import { useState } from 'react';
import { hp, wp } from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import { globalPath } from '../../../constants/globalPath';
import { Spacing } from '../../../constants/spacingScale';
import Line from '../../../components/Line';
import { routeName } from '../../../constants/routeName';
import { colors } from '../../../constants/colorsPallet';
import DateTimePicker from '@react-native-community/datetimepicker';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import { registerUser } from '../../../redux/actions/user.actions';
import { useDispatch } from 'react-redux';
import { color } from 'react-native-reanimated';
export default function Signup({ navigation }) {

  const dropdownRef = React.useRef(null);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('saniya@gmail.com');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();
  const Gender = [{ lable: "Male  ", icon: require('../../../assets/icons/male.png') }, { lable: "Female  ", icon: require('../../../assets/icons/female.png') }];
  // var obj = {
  //   "username": userName,
  //   "email": email,
  //   "fullName": firstName+''+lastName,
  //   "password": password,
  //   "userTypeId": 3,
  //   "restaurantId": 11,
  //   "updatebyId": 0,
  //   "updatedDateTime": new Date(),
  //   "areaId": 1,
  //   "gender": "male",
  //   //"dateofBirth": dateFormat(date),
  //   "contactNumber": phoneNum
  // }
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const dateFormat = (date) => {
    if (date != null) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  };

  const showDAtepicker = () => {
    setShow(true);
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);




  const expressions = {
    email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  };
  const validation = () => {
    if (firstName === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'First name is Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else if (lastName === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Last name is Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else if (userName === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'User name is Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    }
    else if (email === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Email is Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else if (phoneNum === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'PhoneNumber is Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else if (password === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Password is Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else if (password.length < 8) {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Password Length should be greater then 8',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    }
    // else if (confirmPassword === '') {
    //   dropdownRef.current.showMessage({
    //     message: 'Error',
    //     description: 'Confirm Password is Required',
    //     type: 'danger',
    //     icon: {icon: 'auto', position: 'left'},
    //   });
    //} 
    // else if (password !== confirmPassword) {
    //   dropdownRef.current.showMessage({
    //     message: 'Error',
    //     description: 'Password is not matched',
    //     type: 'danger',
    //     icon: {icon: 'auto', position: 'left'},
    //   });
    // } 
    else if (!expressions.email.test(email) || email.includes(' ')) {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Invalid Email',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else {
      var obj = {
        "username": userName,
        "email": email,
        "fullName": firstName + ' ' + lastName,
        "password": password,
        "userTypeId": 3,
        "restaurantId": 11,
        "updatebyId": 0,
        "updatedDateTime": `${new Date()}`,
        "areaId": 1,
        "gender": "male",
        "dateofBirth": dateFormat(date),
        "contactNumber": phoneNum
      }
      dispatch(registerUser(obj, navigation))
      // dispatch(registerUser({
      //   "username": "alii",
      //   "email": "uaa@gmail.com",
      //   "fullName": "ok",
      //   "password": "password",
      //   "userTypeId": 3,
      //   "restaurantId": 11,
      //   "updatebyId": 0,
      //   "updatedDateTime": "Fri Jan 14 2022 17:48:44 GMT+0500 (Pakistan Standard Time)",
      //   "areaId": 1,
      //   "gender": "male",
      //   "dateofBirth": "2004/1/14",
      //   "contactNumber": "00008888"
      // }));
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.black }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.screeninfo}>
            <Icon source={globalPath.BALI_ICON} size={60} />
            <ResponsiveText
              margin={[1, 0, 0, 0]}
              color={colors.yellow}
              fontFamily="Regular"
              size={8}>
              Sign Up
            </ResponsiveText>
            <ResponsiveText margin={[1, 0, 0, 0]} color={colors.white}>
              Please SignUp to Continue
            </ResponsiveText>
          </View>
          <View style={styles.formArea} >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Input
                width={wp(39)}
                margin={[0, 0, 15, 0]}
                padding={[0, 0, 0, 25]}
                onChnageText={text => setFirstName(text)}
                iconMargin={[0, 10, 0, 0]}
                placeholder="First name"
                leftIcon={globalPath.USER_LOGO}
              />
              <Input
                width={wp(39)}
                onChnageText={text => setLastName(text)}
                margin={[0, 0, 15, 0]}
                padding={[0, 0, 0, 25]}
                iconMargin={[0, 10, 0, 0]}
                placeholder="Last name"
                leftIcon={globalPath.USER_LOGO}
              />
            </View>
            <Input
              padding={[0, 0, 0, 25]}
              margin={[0, 0, 15, 0]}
              iconMargin={[0, 10, 0, 0]}
              placeholder="User Name"
              onChnageText={text => setuserName(text)}
              leftIcon={globalPath.MALE_LOGO}
            />
            <Input
              padding={[0, 0, 0, 25]}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Email"
              onChnageText={text => setEmail(text)}
              leftIcon={globalPath.EMAIL_LOGO}
            />
            <Input
              margin={[15, 0, 15, 0]}
              padding={[0, 0, 0, 25]}
              onChnageText={text => setPhoneNum(text)}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Phone"
              leftIcon={globalPath.PHONE_LOGO}
            />
            <Input
              margin={[0, 0, 15, 0]}
              padding={[0, 0, 0, 25]}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Password"
              onChnageText={text => setPassword(text)}
              secureTextEntry
              leftIcon={globalPath.LOCK_LOGO}
            />
            {/* <Input
            margin={[0, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Password"
            onChnageText={text => setPassword(text)}
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          />
          <Input
            margin={[0, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Password"
            onChnageText={text => setPassword(text)}
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          /> */}
            {/* <Input
            margin={[0, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Confirm Password"
            onChnageText={text => setConfirmPassword(text)}
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <DropDown data={Gender} height={hp(6)} width={wp(39)} />
              <View>
                <View style={{ borderWidth: 2, zIndex: 0, borderRadius: 10 }}>
                  <Text
                    style={{
                      fontSize: 7,
                      position: 'absolute',
                      zIndex: 1,
                      top: -5,
                      marginStart: 9,
                      color: colors.white,
                    }}>
                    Date of birth
                  </Text>

                  <TouchableOpacity onPress={showDAtepicker}>
                    <Text
                      style={{
                        color: colors.white,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        backgroundColor: '#3f3f3f',
                        padding: 13,
                        borderStartWidth: 10,
                        borderRadius: 10,
                        paddingHorizontal: 30,
                        paddingVertical: 16,
                        fontSize: 12,
                      }}>
                      {date == null ? 'Month/Day/Year' : dateFormat(date)}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {show && (
              <DateTimePicker
                // testID="dateTimePicker"
                value={new Date}
                mode={'date'}
                // is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <RnButton
              onPress={() => validation()}
              fontFamily="light"
              margin={[20, 0]}
              title="SIGN UP "
            />

            <View style={styles.footer}>
              {/* <Icon size={wp(8)}  margin={[0,0,wp(5),0]} source={globalPath.GOOGLE_LOGO} /> */}
              <ResponsiveText margin={[2, 10]} color={colors.white}>
                I already have account{' '}
                <ResponsiveText
                  fontFamily="Bold"
                  color={colors.yellow}
                  onPress={() => navigation.navigate(routeName.LOGIN)}>
                  Sign In
                </ResponsiveText>
              </ResponsiveText>
              {/* <View style={styles.socialIcon}></View> */}
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <FlashMessage ref={dropdownRef} />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: colors.black,
  },
  screeninfo: {
    //  flex: 0.9,
    //justifyContent: 'center',
    marginVertical: '10%',
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
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
