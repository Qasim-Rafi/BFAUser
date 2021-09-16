import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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
import { showMessage } from 'react-native-flash-message';
export default function Signup({ navigation }) {
 const [firstName,setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
 const [phoneNum, setPhoneNum] = useState('')
 const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState();
 const expressions = {
  email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};
 const validation = () => {
  if(firstName===''){
    showMessage({
      message: "Error",
      description: "First name is Required",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else if(lastName===''){
    showMessage({
      message: "Error",
      description: "Last name is Required",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else if(email==='')
  {
    showMessage({
      message: "Error",
      description: "Email is Required",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else if (phoneNum==='' ){
    showMessage({
      message: "Error",
      description: "PhoneNumber is Required",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else if (password===''){
    showMessage({
      message: "Error",
      description: "Password is Required",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else if(password.length < 8)
  {
    showMessage({
      message: "Error",
      description: "Password Length should be greater then 8",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });
  }
  else if (confirmPassword===''){
    showMessage({
      message: "Error",
      description: "Confirm Password is Required",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else if (password!==confirmPassword){
    showMessage({
      message: "Error",
      description: "Password is not matched",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else if (!expressions.email.test(email) || email.includes(' ')){
    showMessage({
      message: "Error",
      description: "Invalid Email",
      type: "danger",
      icon: { icon: "auto", position: "left" },
    });

  }
  else{
    navigation.navigate(routeName.LOGIN);
  }

 }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={hp(-2)}
      style={styles.container}>
      <ImageBackground style={styles.container} source={globalPath.BG_IMAGE}>
        <View style={styles.screeninfo}>
          <View style={{marginBottom:10}}><Icon source={globalPath.BALI_ICON} size={70} /></View>
          <ResponsiveText color={colors.yellow} fontFamily="Regular"  size={7.5} >
            Welcome to Bali!
          </ResponsiveText>
          <ResponsiveText color={colors.white}>
            Create a new account
          </ResponsiveText>
        </View>
        <View style={styles.formArea}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Input
            width={wp(39)}
            margin={[0, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            onChnageText={text=>setFirstName(text)}
            iconMargin={[0, 10, 0, 0]}
            placeholder="First name"
            leftIcon={globalPath.USER_LOGO}
          />
           <Input
            width={wp(39)}
            onChnageText={text=>setLastName(text)}
            margin={[0, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Last name"
            leftIcon={globalPath.USER_LOGO}
          />
          </View>
          
          <Input
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Email"
            onChnageText={text=>setEmail(text)}
            leftIcon={globalPath.EMAIL_LOGO}
          />
          <Input
            margin={[15, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            onChnageText={text=>setPhoneNum(text)}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Phone"
            leftIcon={globalPath.PHONE_LOGO}
          />
          <Input
            margin={[0, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Password"
            onChnageText={text=>setPassword(text)}
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          />
          <Input
            margin={[0, 0, 15, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Confirm Password"
            onChnageText={text=>setConfirmPassword(text)}
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          />

          <RnButton onPress={()=>validation()} fontFamily='light' margin={[20, 0]} title="SIGN UP " />
          <View style={styles.footer}>
           
            {/* <Icon size={wp(8)}  margin={[0,0,wp(5),0]} source={globalPath.GOOGLE_LOGO} /> */}
            <ResponsiveText margin={[2, 10]} color={colors.white}>
              I already have account {' '}
              <ResponsiveText fontFamily='Bold' color={colors.yellow}  onPress={()=>navigation.navigate(routeName.LOGIN)}>Sign In</ResponsiveText>
            </ResponsiveText>
            {/* <View style={styles.socialIcon}></View> */}
          </View>
        </View>
      </ImageBackground>
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
    flex: 0.35,
    justifyContent: 'flex-end',
    paddingBottom: wp(5),
    alignItems:'center',
    padding: wp(5),
  },
  formArea: {
    flex: 0.8,
    borderTopRightRadius: wp(7),
    borderTopLeftRadius: wp(7),
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
