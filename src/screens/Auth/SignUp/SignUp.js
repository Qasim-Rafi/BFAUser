import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Platform,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  SafeAreaView,
} from 'react-native';
import DropDown from '../../../components/CustomizeDropdown';
import {useState} from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import {registerUser} from '../../../redux/actions/user.actions';
import {useDispatch, useSelector} from 'react-redux';
import {color} from 'react-native-reanimated';
import Api from '../../../redux/lib/api';
import urls from '../../../redux/lib/urls';
import {SkypeIndicator} from 'react-native-indicators';
export default function Signup({navigation}) {
  const dropdownRef = React.useRef(null);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [CellphoneNum, setCellphoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [Address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [PostCode, setPostCode] = useState('');

  const [gender, setgender] = useState('');
  const [number, onChangeNumber] = React.useState('+973');
  const [confirmPassword, setConfirmPassword] = useState();
  const Gender = [
    {lable: 'Gender', icon: require('../../../assets/icons/signupgender.png')},
    {lable: 'Male', icon: require('../../../assets/icons/male.png')},
    {lable: 'Female', icon: require('../../../assets/icons/female.png')},
  ];

  // const signUpResponse = useSelector(state => state.)
  const signupResponse = useSelector(
    state => state.login_User.signupScreen.message,
  );
  const loading = useSelector(
    state => state.login_User.signupScreen.refreshing,
  );
  // var dateMinus13 = new Date();
  // dateMinus13.setDate( dateMinus13.getDate() - 6 );
  // dateMinus13.setFullYear( dateMinus13.getFullYear() - 1 );
  // $("#searchDateFrom").val((dateMinus13.getMonth() ) + '/' + (dateMinus13.getDate()) + '/' + (dateMinus13.getFullYear()))

  const [errorString, setErrorString] = useState('');

  React.useEffect(() => {
    console.log('responseeeeeee', errorString);

    if (signupResponse === 'Email already exist') {
      setErrorString(
        signupResponse +
          ".\nHave you forgotten your password? Don't worry, You can reset your password here.",
      );
      console.log('reset password');
    } else {
      signupResponse ? setErrorString(signupResponse) : null;

    }
    // signupResponse?
    // dropdownRef.current.showMessage({
    //   message: 'Error',
    //   description: signupResponse,
    //   type: 'danger',
    //   icon: {icon: 'auto', position: 'left'},
    // })
    // :null
    // loginNetworkErr ? setErrorString(loginNetworkErr.message) : null
  }, [signupResponse]);
  React.useEffect(() => {
    setErrorString('');
    // console.log('return');
  }, [navigation]);

  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [correctUserIcon, setCorrectUserIcon] = useState(false);
  const [correctemailIcon, setCorrectemailIcon] = useState(false);
  const [correctPhoneIcon, setCorrectPhoneIcon] = useState(false);
  const [showCorrectUserIcon, setShowCorrectUserIcon] = useState(false);
  const [showCorrectemailIcon, setShowCorrectemailIcon] = useState(false);
  const [showCorrectPhoneIcon, setShowCorrectPhoneIcon] = useState(false);

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
    // checkExisting();
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const dateFormat = date => {
    if (date != null) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  };

  const showDAtepicker = () => {
    setShow(true);
    console.log('onChange Called');
  };

  const expressions = {
    email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    postCode: /^[a-zA-Z]{2}[0-9]{4}$/
  };
  const validation = () => {
    setErrorString('');
    if (firstName === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'First name is Required',
        duration: 3000,
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else if (lastName === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Last name is Required',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else if (userName === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'User name is Required',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else if (email === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Email is Required',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    }
    // else if (phoneNum === '') {
    //   dropdownRef.current.showMessage({
    //     message: 'Error',
    //     description: 'TelePhone Number is Required',
    //     type: 'danger',
    //     icon: {icon: 'auto', position: 'left'},
    //   });
    // }
    else if (CellphoneNum === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'CellPhone is Required',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    }
    // else if (CellphoneNum.length == 7) {
    //   dropdownRef.current.showMessage({
    //     message: 'Error',
    //     description: 'Enter a valid cell phone number',
    //     type: 'danger',
    //     icon: {icon: 'auto', position: 'left'},
    //   });
    // }
    // if (Address === '') {
    //   dropdownRef.current.showMessage({
    //     message: 'Error',
    //     description: 'Address is Required',
    //     type: 'danger',
    //     icon: {icon: 'auto', position: 'left'},
    //   });
    // }
    //  else
    else if (password === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Password is Required',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else if (password.length < 8) {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Password Length should be greater than 8',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else if (state === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'State is Required',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else if (PostCode === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Post code is Required',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
      });
    } else if (!expressions.email.test(email) || email.includes(' ')) {
      // dropdownRef.current.showMessage({
      //   message: 'Error',
      //   description: 'Invalid Email',
      //   type: 'danger',
      //   icon: {icon: 'auto', position: 'left'},
      // });
      setErrorString('Invalid Email');
    } else {
      var obj = {
        UserName: userName,
        Email: email,
        FullName: firstName + ' ' + lastName,
        Password: password,
        UserTypeId: 3,
        // restaurantId: 11,
        // updatebyId: 0,
        // updatedDateTime: `${new Date()}`,
        // areaId: 1,
        //  gender: gender=='Gender'?'':gender,
        // dateofBirth: date,
        //contactNumber: phoneNum,
        ContactNumber: '+673' + CellphoneNum,
        Address: Address,
        State: state,
        PostalCode: PostCode,
      };
      console.log(obj);
      dispatch(registerUser(obj, navigation));
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

  const checkExisting = async type => {
    console.log('checkExisting called');
    setErrorString('');
    // const expressions = {
    //   email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    // };
    if (type==2&& !expressions.email.test(email) || email.includes(' ')) {
      // dropdownRef.current.showMessage({
      //   message: 'Error',
      //   description: 'Invalid Email',
      //   type: 'danger',
      //   icon: {icon: 'auto', position: 'left'},
      // });
      setErrorString('Invalid Email')
      setShowCorrectemailIcon(true);
          setCorrectemailIcon(false);
    return false
    }
    if (type==4&& !expressions.postCode.test(PostCode) || PostCode.includes(' ')) {
    // dropdownRef.current.showMessage({
      //   message: 'Error',
      //   description: 'Invalid Email',
      //   type: 'danger',
      //   icon: {icon: 'auto', position: 'left'},
      // });
      setErrorString('Invalid PostCode')
      // setShowCorrectemailIcon(true);
      //     setCorrectemailIcon(false);
    return false
    }
    var obj = {
      userName: type == 1 ? userName : '',
      email: type == 2 ? email : '',
      phone: type == 3 ? '+673' + CellphoneNum : '',
    };
    try {
      const res = await Api.post(urls.REGISTER_URL_CHECKS, obj);
      console.log('res', res);
      if (res && res.message == null) {
        // setCorrectemailIcon(true)
        console.log('success = true');
        //  showMessage({
        //    message: 'Success',
        //    description: type == 1 ? 'User Name is valid' : type == 2 ? 'Email is valid' : type == 3 ? 'Contact number is valid' : '',
        //    duration: 3000,
        //    type: 'success',
        //    icon: { icon: 'auto', position: 'left' },
        //  });
        if (type == 1) {
          setShowCorrectUserIcon(true);
          setCorrectUserIcon(true);
        } else if (type == 2) {
          setShowCorrectemailIcon(true);
          setCorrectemailIcon(true);
        } else if (type == 3) {
          setShowCorrectPhoneIcon(true);
          setCorrectPhoneIcon(true);
        }
      } else {
        if (type == 1) {
          setShowCorrectUserIcon(true);
          setCorrectUserIcon(false);
          console.log('iconnn');
        } else if (type == 2) {
          setShowCorrectemailIcon(true);
          setCorrectemailIcon(false);
        } else if (type == 3) {
          setShowCorrectPhoneIcon(true);
          setCorrectPhoneIcon(false);
        }
        // alert(res.message)
        // showMessage({
        //   message: 'Error',
        //   description: res.message ? res.message : 'Something went wrong',
        //   duration: 3000,
        //   type: 'danger',
        //   icon: { icon: 'auto', position: 'left' },
        // });
        if (res.message === 'Email already exist') {
          setErrorString(
            res.message +
              ".\nHave you forgotten your password? Don't worry, You can reset your password here.",
          );
          console.log('reset password');
        } else {
          setErrorString(res.message);
          console.log('no reset');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: isThemeDark ?  colors.black: colors.white}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.screeninfo}>
            <Icon source={globalPath.BALI_ICON} size={60} />
            <ResponsiveText
              margin={[1, 0, 0, 0]}
              color={colors.yellow}
              fontFamily="Regular"
              size={8}>
              SignUp
            </ResponsiveText>
            <ResponsiveText margin={[1, 0, 0, 0]} color={isThemeDark ?  colors.white: colors.black}>
              Please SignUp to Continue
            </ResponsiveText>
          </View>
          <View style={[styles.formArea,{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Input
                style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
                backgroundColor={isThemeDark ?  colors.black1: colors.grey}
                placeholderTextColor={isThemeDark ? undefined : colors.secondary}
                width={wp(39)}
                margin={[0, 0, 15, 0]}
                padding={[0, 0, 0, 25]}
                onChnageText={text => setFirstName(text)}
                iconMargin={[0, 10, 0, 0]}
                placeholder="First name"
                leftIcon={globalPath.USER_LOGO}
              />
              <Input
                style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
                backgroundColor={isThemeDark ?  colors.black1: colors.grey}
                placeholderTextColor={isThemeDark ? undefined : colors.secondary}
                width={wp(39)}
                onChnageText={text => setLastName(text)}
                margin={[0, 0, 15, 0]}
                padding={[0, 0, 0, 15]}
                iconMargin={[0, 10, 0, 0]}
                placeholder="Last name"
                leftIcon={globalPath.USER_LOGO}
              />
            </View>

            <Input
              style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
              backgroundColor={isThemeDark ?  colors.black1: colors.grey}
              placeholderTextColor={isThemeDark ? undefined : colors.secondary}
              padding={[0, 0, 0, 25]}
              margin={[0, 0, 15, 0]}
              iconMargin={[0, 10, 0, 0]}
              placeholder="User Name"
              showValidationIcon={
                userName == '' || userName.length < 3
                  ? false
                  : showCorrectUserIcon
              }
              userValidation={correctUserIcon}
              rightIcon={globalPath.FEED_GREY}
              autoCapitalize={'none'}
              onChnageText={text => setuserName(text)}
              onBlur={() => checkExisting(1)}
              leftIcon={globalPath.MALE_LOGO}
            />
            <Input
              style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
              backgroundColor={isThemeDark ?  colors.black1: colors.grey}
              placeholderTextColor={isThemeDark ? undefined : colors.secondary}
              margin={[0, 0, 15, 0]}
              padding={[0, 0, 0, 25]}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Password"
              onChnageText={text => setPassword(text.trim())}
              secureTextEntry
              leftIcon={globalPath.LOCK_LOGO}
              autoCapitalize={'none'}
              maxlength={19}

            />
            <Input
              style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
              backgroundColor={isThemeDark ?  colors.black1: colors.grey}
              placeholderTextColor={isThemeDark ? undefined : colors.secondary}
              padding={[0, 0, 0, 25]}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Email"
              showValidationIcon={
                email == '' || email.length < 3 ? false : showCorrectemailIcon
              }
              userValidation={correctemailIcon}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              onChnageText={text => setEmail(text.trim())}
              onBlur={() => checkExisting(2)}
              leftIcon={globalPath.EMAIL_LOGO}
            />
            {/* <Input
              margin={[15, 0, 0, 0]}
              padding={[0, 0, 0, 25]}
              onChnageText={text => setPhoneNum(text)}
              iconMargin={[0, 10, 0, 0]}
              keyboardType={"numeric"}
              maxlength={7}
              placeholder="Telephone(Optional)"
              leftIcon={globalPath.PHONE_LOGO}
             // onPressOut={() => checkExisting()}
            /> */}
            <Input
              style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
              backgroundColor={isThemeDark ?  colors.black1: colors.grey}
              placeholderTextColor={isThemeDark ? undefined : colors.secondary}
              margin={[15, 0, 0, 0]}
              padding={[0, 0, 0, 20]}
              maxlength={7}
              onChnageText={text => setCellphoneNum(text)}
              iconMargin={[0, 10, 0, 0]}
              showValidationIcon={
                CellphoneNum == '' || CellphoneNum.length < 3
                  ? false
                  : showCorrectPhoneIcon
              }
              userValidation={correctPhoneIcon}
              placeholder="000-0000(Required)"
              countryCode="+673 "
              keyboardType={'numeric'}
              leftIcon={globalPath.SignUp_Phone_ICON}
              iconSize={hp(2.5)}
              onBlur={() => checkExisting(3)}
            />
            <Input
              style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
              backgroundColor={isThemeDark ?  colors.black1: colors.grey}
              placeholderTextColor={isThemeDark ? undefined : colors.secondary}
              margin={[15, 0, 15, 0]}
              padding={[0, 0, 0, 20]}
              onChnageText={text => setAddress(text)}
              iconMargin={[0, 10, 0, 0]}
              placeholder="Address(optional)"
              // countryCode="+92"
              leftIcon={globalPath.ADDRESS_LOGO}
              iconSize={hp(3)}
              // onPressOut={() => checkExisting()}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Input
                style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
                backgroundColor={isThemeDark ?  colors.black1: colors.grey}
                placeholderTextColor={isThemeDark ? undefined : colors.secondary}
                width={wp(39)}
                margin={[0, 0, 15, 0]}
                padding={[0, 0, 0, 25]}
                onChnageText={text => setState(text)}
                iconMargin={[0, 10, 0, 0]}
                placeholder="District"
                leftIcon={globalPath.State_ICON}
              />
              <Input
                style={{backgroundColor:isThemeDark ?  colors.black1: colors.grey}}
                backgroundColor={isThemeDark ?  colors.black1: colors.grey}
                placeholderTextColor={isThemeDark ? undefined : colors.secondary}
                width={wp(39)}
                onChnageText={text => setPostCode(text)}
                maxlength={6}
                keyboardType={'name-phone-pad'}
                margin={[0, 0, 15, 0]}
                padding={[0, 0, 0, 15]}
                iconMargin={[0, 10, 0, 0]}
                placeholder="Postcode"
                onBlur={() => checkExisting(4)}
                leftIcon={globalPath.ZIP_ICON}
              />
            </View>
            {/* <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' ,top:-15 }}>
              <DropDown
                data={Gender}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  setgender(selectedItem.lable);
                }}
                height={hp(6)}
                width={wp(39)}
              />
              <TouchableOpacity onPress={showDAtepicker}>
                <Input
                 width={wp(39)}
                 onChnageText={text => setLastName(text)}
                 keyboardType={"numeric"}
                 editable={false}
                 margin={[15, 0, 15, 0]}
                 padding={[0, 0, 0, 15]}
                 iconMargin={[0, 10, 0, 0]}
                leftIcon={globalPath.Calender_ICON}
                 placeholder={date == null ? 'Date of birth' : dateFormat(date)}
                />
              </TouchableOpacity>
            </View> */}
            {show && (
              <DateTimePicker
                // testID="dateTimePicker"
                value={new Date('Jan 1, 2009')}
                minimumDate={new Date(2009, 0, 1)}
                mode={'date'}
                // is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

            <TouchableOpacity style={styles.signin} onPress={validation}>
              {loading == true ? (
                <SkypeIndicator count={5} color={colors.black} size={30} />
              ) : (
                <ResponsiveText color={colors.black} size={4}>
                  SIGN UP
                </ResponsiveText>
              )}
            </TouchableOpacity>
            {/* <RnButton
              onPress={() => validation()}
              fontFamily="bold"
              margin={[9, 0]}
              textColor={colors.black}
              title="SIGN UP "
            /> */}
            <View style={{marginVertical: 20}}>
              <ResponsiveText color={errorString=='Record(s) added successfully'?colors.green1:  colors.red}>{errorString}</ResponsiveText>

              {errorString ===
              "Email already exist.\nHave you forgotten your password? Don't worry, You can reset your password here." ? (
                <View style={styles.footer}>
                  {/* <Icon size={wp(8)}  margin={[0,0,wp(5),0]} source={globalPath.GOOGLE_LOGO} /> */}
                  <ResponsiveText
                    fontFamily="Bold"
                    color={colors.yellow}
                    onPress={() =>
                      navigation.navigate(routeName.FORGOT_PASSWORD)
                    }>
                    Reset Password
                  </ResponsiveText>
                  {/* <View style={styles.socialIcon}></View> */}
                </View>
              ) : undefined}
            </View>
            <View style={styles.footer}>
              {/* <Icon size={wp(8)}  margin={[0,0,wp(5),0]} source={globalPath.GOOGLE_LOGO} /> */}
              <ResponsiveText margin={[2, 10]} color={isThemeDark ?  colors.white: colors.black}>
                Already have an account?{' '}
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
  signin: {
    backgroundColor: colors.yellow,
    width: wp(80),
    height: hp(6),
    borderRadius: 7,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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
  input: {
    backgroundColor: colors.black1,
    height: hp(6),
    width: wp(80),
    borderColor: colors.black1,
    borderRadius: 10,
    margin: 15,
    borderWidth: 1,
    padding: 17,
    alignSelf: 'center',
  },
});
