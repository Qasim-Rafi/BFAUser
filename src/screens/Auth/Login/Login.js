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
import Line from '../../../components/Line';
import {routeName} from '../../../constants/routeName';
import {colors} from '../../../constants/colorsPallet';
import FlashMessage ,{ showMessage, hideMessage } from "react-native-flash-message";
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
import { StackActions } from '@react-navigation/routers';

export default function Login({navigation}) {
  const dropdownRef = React.useRef(null)
  const [loading, setLoading] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  //Redux Dispatch
  const dispatch = useDispatch();
const loginSuccess = useSelector(state=>state.login_User.loginScreen.data);
console.log('login: ', loginSuccess);

  //Redux Use Selector
  const {login_User} = useSelector(state => state);
  console.log( 'login user: ',login_User);
  

  //Redux Action Called
  const userLogin = () => {
    dispatch(
      loginUser({
        params: {
          username: userName,
          password: password,
        },
        navigation:navigation,
      })
    );
  };

  React.useEffect(()=>{
    if(loginSuccess!=null){
      dispatch(getBfaPartners({navigation:navigation}));
    }
  })



  //validation form
  const Validation=(item)=>{
    if (userName === '' || userName === null ) {
      dropdownRef.current.showMessage({
        message: "Error",
        description: "Username is Required",
        type: "danger",
        icon: { icon: "auto", position: "left" },
      });

    }
    else if (password ==='')
    {
      dropdownRef.current.showMessage({
        message: "Error",
        description: "Password is Required",
        type: "danger",
        icon: { icon: "auto", position: "left" },
      });
    }
    else{
      setLoading(true);
      userLogin();
    }
  }



  // React.useEffect(()=>{
  //   setLoading(false);
  // })

  return (
    <>

    {/* {
      loading ? 
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:colors.black}} >
      <BarIndicator count={5} color={colors.yellow} size={50} />
      </View>
      : */}

   
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor:colors.black}}>
      <View style={{flex:1, backgroundColor:colors.black}}>
        <View style={styles.screeninfo}>
          <Icon source={globalPath.BALI_ICON} size={60} />
          <ResponsiveText margin={[5,0,0,0]} color={colors.yellow} fontFamily="Regular" size={8}>
            Sign In
          </ResponsiveText>
          <ResponsiveText margin={[-5,0,0,0]} color={colors.white}>
            Please Login to Continue
          </ResponsiveText>
        </View>
        <View style={styles.formArea}>
          <Input
            padding={[0, 0, 0, 25]}
            onChnageText={text => setUserName(text)}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Email"
            leftIcon={globalPath.EMAIL_LOGO}
          />
          <Input
            margin={[20, 0, wp(10), 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Password"
            onChnageText={text => setPassword(text)}
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          />
          <View style={styles.forgotPasswordContainer}>
            {/* <Line color={colors.grey5} width={wp(20)} />
            <ResponsiveText margin={[0, 10]} color={colors.white}>
              Forgot Password?
            </ResponsiveText>
            <Line color={colors.grey5} width={wp(20)} /> */}
          </View>
          <RnButton
            onPress={() => Validation()}
            // onPress={()=>navigation.dispatch(StackActions.replace('Home'))}
            fontFamily="SemiBold"
            height={100}
            margin={[0, 0]}
            title="SIGN IN"
          />
          <View style={styles.footer}>
            {/* <Icon size={wp(8)} margin={[0,0,wp(5),0]} source={globalPath.GOOGLE_LOGO} /> */}
            <ResponsiveText margin={[0, 10]} color={colors.white}>
              New user{' '}
              <ResponsiveText
                fontFamily="Bold"
                color={colors.yellow}
                onPress={() => navigation.navigate(routeName.SIGN_UP)}>
                Sign up
              </ResponsiveText>
            </ResponsiveText>
            {/* <View style={styles.socialIcon}></View> */}
          </View>
        </View>
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
  screeninfo: {
    flex: 0.32,
    justifyContent: 'center',
    alignItems:'center',
  },
  formArea: {
    flex: 0.70,
    borderTopRightRadius: wp(8),
    borderTopLeftRadius: wp(8),
    backgroundColor:colors.black3,
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
