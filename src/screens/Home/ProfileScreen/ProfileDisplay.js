import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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
import Profile from './Profile';
import Optional from './Optional';
import {useSelector, useDispatch} from 'react-redux';
import {profileTabs} from '../../../constants/mock';
import {getProfileData} from '../../../redux/actions/user.actions';
import CustomInput from '../../../components/customInput';
import urls from '../../../redux/lib/urls';
import Api from '../../../redux/lib/api';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProfileDisplay({navigation}) {
  const profileData = useSelector(state => state.appReducers.profileData.data);
  console.log('Profile: ', profileData);
  const loading = useSelector(state => state.appReducers.profileData.loading);
  console.log('loading', loading);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [userName, setUsername] = useState();
  const [fullName, setFullname] = useState();
  const [editable, setEditable] = useState(false);

  React.useEffect(() => {
    dispatch(getProfileData());
    console.log('loading', loading);
  }, []);
  const [activeTab, setActiveTab] = React.useState(profileTabs[0].id);
  const edit = () => {
    setFullname(profileData.fullName);
    setEmail(profileData.email);
    setUsername(profileData.username);
    setEditable(true);
  };
  const submitData = async id => {
    var obj = {
      username: userName,
      email: email,
      fullName: fullName,
      gender: 'Male',
      dateofBirth: '2004/1/14',
      contactNumber: '0340040404040',
      updatebyId: profileData.id,
      updatedDateTime: new Date(),
    };
    console.log('obj', obj);
    try {
      const res = await Api.put(urls.EDIT_PROFILE + profileData.id, obj);
      console.log('ree', res);
      if (res && res.success == true) {
        dispatch(getProfileData());
        setEditable(false);

        // dropdownRef.current.showMessage({
        //   message: 'Alert',
        //   description: 'Order Canceled',
        //   type: 'success',
        //   icon: {icon: 'auto', position: 'left'},
        //   //backgroundColor:colors.black1
        // });
      } else {
      }
    } catch (error) {}
  };
  const userInfo = () => {
    return (
      <View
        style={{
          flex: 0.8,
          backgroundColor: '#202020',
          paddingTop: hp(3),
        }}>
        <ScrollView>
          <View style={styles.mainCard}>
            <Icon source={globalPath.USER_LOGO} />

            <View style={styles.cardView}>
              <ResponsiveText color={colors.grey}>User Name</ResponsiveText>
              <ResponsiveText color={colors.white}>
                {profileData.username}
              </ResponsiveText>
            </View>
          </View>

          <View style={styles.mainCard}>
            <Icon source={globalPath.JOBS} />
            <View style={styles.cardView}>
              <ResponsiveText color={colors.grey}>Email</ResponsiveText>
              <ResponsiveText color={colors.white}>
                {profileData.email}
              </ResponsiveText>
            </View>
          </View>
          <View style={styles.mainCard}>
            <Icon source={globalPath.PHONE_LOGO} />
            <View style={styles.cardView}>
              <ResponsiveText color={colors.grey}>Phone</ResponsiveText>
              <ResponsiveText color={colors.white}>
                {'123456789'}
              </ResponsiveText>
            </View>
          </View>
          <View style={styles.mainCard}>
            <Icon source={globalPath.PHONE_LOGO} />
            <View style={styles.cardView}>
              <ResponsiveText color={colors.grey}>Phone</ResponsiveText>
              <ResponsiveText color={colors.white}>
                {'123456789'}
              </ResponsiveText>
            </View>
          </View>
          <View style={styles.mainCard}>
            <Icon source={globalPath.GENDER_ICON} />
            <View style={styles.cardView}>
              <ResponsiveText color={colors.grey}>Gender</ResponsiveText>
              <ResponsiveText color={colors.white}>
                {profileData.gender}
              </ResponsiveText>
            </View>
          </View>
          <View style={styles.mainCard}>
            <Icon source={globalPath.BIRTHDAY_ICON} />
            <View style={styles.cardView}>
              <ResponsiveText color={colors.grey}>Date of Birth</ResponsiveText>
              <ResponsiveText color={colors.white}>
                {profileData.createdDateTime}
              </ResponsiveText>
            </View>
          </View>
          <View style={{height:hp(5)}} />

        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.screeninfo}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 0.4,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.black,
                height: hp(5),
                padding: 9,
                borderRadius: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon source={globalPath.BACK_BLACK_ARROW} />
            </TouchableOpacity>
            <ResponsiveText size={4}>Profile</ResponsiveText>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.PROFILE_SCREEN)}
              style={{
                backgroundColor: colors.black,
                height: hp(5),
                padding: 10,
                borderRadius: 20,
              }}>
              <Icon source={globalPath.EDIT_PROFILE} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.45,
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 10,
              }}
              source={
                profileData.fullpath
                  ? {uri: profileData.fullpath}
                  : globalPath.USER_PROFILE
              }
            />
            <ResponsiveText size={4}>{profileData.fullName}</ResponsiveText>
            <ResponsiveText color={colors.lightBlack} size={3}>
              {profileData.email}
            </ResponsiveText>
          </View>
        </View>
        <View style={{flex: 0.09, flexDirection: 'row'}}></View>
        {activeTab === 1 && userInfo()}

        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
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
    paddingBottom: wp(0),
    padding: wp(5),
  },
  formArea: {
    flex: 0.65,
    // borderTopRightRadius: wp(8),
    // borderTopLeftRadius: wp(8),
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
  userName: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginTop: 10,
  },
  Info: {
    // marginHorizontal: wp(13),
    borderBottomWidth: 1,
    borderColor: colors.grey1,
  },
  cardView: {
    justifyContent: 'space-around',
    marginLeft: wp(5),
  },
  mainCard: {
    flexDirection: 'row',
    padding: wp(5),
    borderBottomWidth: 1,
    borderColor: colors.grey1,
  },
});
