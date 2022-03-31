import React, {useEffect} from 'react';

import {View, TouchableOpacity, Image, TextInput, Text} from 'react-native';

import RText from './Basics/RText';
import {hp, wp} from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import {iconPath} from '../constants/icon';
import Icon from './Icon';
import Input from './Input';
import {globalPath} from '../constants/globalPath';
import ResponsiveText from './RnText';
import {routeName} from '../constants/routeName';
import {colors} from '../constants/colorsPallet';
import {useSelector, useDispatch} from 'react-redux';
import {color} from 'react-native-reanimated';
import {
  getUserProfile,
  getNotificationData,
} from '../redux/actions/user.actions';
import {notifications} from '../redux/reducers/notification.reducres';
const Header = ({
  navigation,
  showRightMenu = true,
  inputWidth = wp(58),
  title,

  ...props
}) => {
  const [searchBar, toggleSearchBar] = React.useState('false');
  const NotificationData = useSelector(
    state => state.appReducers.getNotification.data,
  );

  return (
    <View
      style={[
        styles.header,
        {
          paddingVertical: 1,
          justifyContent: props.iconPath ? undefined : 'center',
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          props.iconPath
            ? navigation.goBack()
            : navigation.navigate(routeName.WALLET);
        }}
        style={{
          height: hp(6.4),
          width: wp(10.4),
          // backgroundColor:props.iconPath ? colors.black1: undefined,
          // justifyContent: 'center',
          alignItems: 'center',
          bottom: 7.5,
          borderRadius: 10,
          marginEnd: 5,
        }}>
        <View
          style={
            props.iconPath
              ? {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.yellow1,
                  height: wp(13),
                  width: wp(13),
                  borderRadius: wp(6.5),
                }
              : {flexDirection: 'row', alignItems: 'center'}
          }>
          <Icon
            margin={[10, 0, 0, 20]}
            size={props.iconPath ? 25 : 44}
            source={props.iconPath ? props.iconPath : globalPath.BALI_ICON}
          />
        </View>
      </TouchableOpacity>
      {props.iconPath ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: hp(6),
            width: wp(50),
            paddingLeft: wp(17),
          }}>
          <Text
            style={{color: colors.white, fontSize: wp(6), fontWeight: 'bold'}}>
            {title}
          </Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row', marginLeft: wp(10)}}>
          <View style={{width: wp(58), alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                // searchBar === 'true'
                //   ?
                navigation.navigate(routeName.SearchAll);
                // : toggleSearchBar('true');
              }}
              style={{borderRadius: 10, marginRight: 10}}>
              <Icon source={globalPath.SEARCH_LOGO} size={22} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {showRightMenu &&
        (props.iconPath ? (
          <View />
        ) : (
          <TouchableOpacity
            style={{marginHorizontal: wp(2)}}
            onPress={() => {
              navigation.navigate(routeName.NOTIFICATION_SCREEN);
            }}>
            {NotificationData.filter(A => A.seen == true).length ===
            0 ? null : (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: colors.red,
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  zIndex: 1,
                  top: -5,
                  left: 14,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    color: colors.white,
                  }}>
                  {NotificationData.filter(A => A.seen == false).length}
                </Text>
              </View>
            )}
            <Icon
              borderRadius={30}
              size={props.iconPath ? (wp(10), hp(6)) : 22}
              resizeMode={'cover'}
              source={globalPath.NOTIFICATION}
            />
          </TouchableOpacity>
        ))}
      {showRightMenu &&
        (props.iconPath ? (
          <View />
        ) : (
          <TouchableOpacity
            style={{marginRight: wp(0)}}
            onPress={() => {
              navigation.navigate(routeName.MORE_BOTTOM);
            }}>
            <Icon
              borderRadius={30}
              size={props.iconPath ? (wp(10), hp(6)) : 38}
              resizeMode={'cover'}
              source={globalPath.USER_PROFILE}
            />
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = {
  header: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 30,
  },
  mainView: {
    width: '100%',
    height: wp(14),
    flexDirection: 'row',
    // marginTop: wp(10),
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {color: colors.black, fontFamily: Fonts.Bold, fontSize: wp(1.2)},
};

export default Header;
