import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {colors} from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import {routeName} from '../../../../constants/routeName';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import {hp, wp} from '../../../../helpers/Responsiveness';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {
  getProfileData,
  getUserProfile,
} from '../../../../redux/actions/user.actions';
import {BarIndicator} from 'react-native-indicators';
import {color} from 'react-native-reanimated';

const More = ({route, navigation}) => {
  const profileData = useSelector(state => state.appReducers.profileData.data);
  console.log('Profile: ', profileData);
  const loading = useSelector(state => state.appReducers.profileData.loading);
  console.log('loading', loading);
  const dispatch = useDispatch();
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data);

  React.useEffect(() => {
    dispatch(getProfileData());
    // console.log('loading', loading);
  }, []);

  const logout = () => {
    Alert.alert('Logout', 'Confirm Logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          await AsyncStorage.removeItem('@token');
          await AsyncStorage.clear();

          navigation.dispatch(StackActions.replace('Auth'));
        },
      },
    ]);
  };
  return (
    <>

      <View style={{ backgroundColor: colors.black3 , flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

        <View style={{ flex: 0.05, backgroundColor: colors.yellow, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingVertical: 10 }} >
          <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: .97 }}>
            <TouchableOpacity style={{ backgroundColor: colors.black, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} tintColor={colors.white} /></TouchableOpacity>
          </View>
          <TouchableOpacity onPress={logout}>
            <View
              style={{
                flexDirection: 'row',
                width: wp(40),
                justifyContent: 'flex-end',
                paddingHorizontal: 20,
              }}>
              <Icon
                source={globalPath.LOGOUT}
                size={20}
                tintColor={colors.black}
              />
              <ResponsiveText color={colors.black} margin={[0, 0, 0, 5]} size={3}>
                Logout
              </ResponsiveText>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: colors.yellow,
            flexDirection: 'row',
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routeName.PROFILE_SCREEN)}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                marginTop: 10,
                marginLeft: 20,
              }}
              source={
                profileData.fullPath
                  ? {uri: profileData.fullPath}
                  : globalPath.USER_PROFILE
              }
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <ResponsiveText size={4}>{profileData.fullName}</ResponsiveText>
            <ResponsiveText color={colors.lightBlack} size={3}>
              {profileData.email}
            </ResponsiveText>
          </View>
        </View>



        <ScrollView style={{ flex: 0.5 }}>
          <View style={{ margin: 20, }}>
            <ResponsiveText color={colors.white} size={4} >Profile</ResponsiveText>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.PROFILE_DISPLAY)}
              style={{ backgroundColor: colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 7 }} >

              <Icon size={20} source={globalPath.MORE_PROFILE} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Profile
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.MYWHITLIST)}
              // onPress={() => navigation.navigate(routeName.ALL_DISHES_LIST, {
              //   data: [],
              //   title: "PG's Favourites",
              // })}
              style={{
                backgroundColor: colors.black2,
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 5,
                borderRadius: 7,
              }}>
              <Icon size={20} source={globalPath.HEART} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Favourites
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.MY_REVIEWS)}

              style={{ backgroundColor: colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.MORE_REVIEWS} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                My Reviews
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.PREFERENCES)}
              style={{ backgroundColor:colors.black2 , flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.PREFERANCES} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Food Preference
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={()=>navigation.navigate(routeName.)}
              style={{ backgroundColor:colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.INTERACTIVE} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Bali Interactive
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.JOB_LISTING)}
              style={{ backgroundColor:colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.JOBS} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Jobs Listing
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.INBOX)}
              style={{
                backgroundColor: colors.black2,
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 5,
                borderRadius: 7,
              }}>
              <Icon size={20} source={globalPath.JOBS} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Inbox
              </ResponsiveText>
            </TouchableOpacity>

            <ResponsiveText margin={[10, 0, 0, 0]} color={colors.white} size={4} >
              Payment information
            </ResponsiveText>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.SCAN_QR)}
              style={{ backgroundColor:  colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.QR_SCAN} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Scan QR Code
              </ResponsiveText>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate(routeName.ORDER_HISTORY)}
              style={{ backgroundColor: isThemeDark? colors.black2: colors.white, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.ORDERS} />
              <ResponsiveText margin={[0, 0, 0, 10]} size={3.5} color={colors.grey}>
                Orders
              </ResponsiveText>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.TRANSACTION_HISTORY)}
              style={{ backgroundColor: colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.MORE_PAYMENT} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Payment History
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.MANAGE_CARDS)}
              style={{ backgroundColor:colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.CARD_MANAGEMENT} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Card Management
              </ResponsiveText>
            </TouchableOpacity>
            <ResponsiveText margin={[10, 0, 0, 0]} color={ colors.white} size={4} >
              Others
            </ResponsiveText>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.SETTINGS)}
              style={{ backgroundColor:colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.SETTINGS} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Settings
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={()=>navigation.navigate(routeName.ORDER_HISTORY)}
              style={{ backgroundColor: colors.black2 , flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.FAQ} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                FAQ
              </ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeName.BALI_CENTER)}
              style={{ backgroundColor:colors.black2, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginTop: 5, borderRadius: 7 }}>
              <Icon size={20} source={globalPath.CONTACT} />
              <ResponsiveText
                margin={[0, 0, 0, 10]}
                size={3.5}
                color={colors.grey}>
                Contact Us
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {loading === true ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(65, 65, 65, 0.5)',
            flex: 1,
          }}>
          <BarIndicator color={colors.yellow} size={50} />
        </View>
      ) : undefined}
    </>
  );
};

export default More;

const styles = StyleSheet.create({});
