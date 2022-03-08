import React from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';

import RText from './Basics/RText';
import { hp, wp } from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import { iconPath } from '../constants/icon';
import Icon from './Icon';
import Input from './Input';
import { globalPath } from '../constants/globalPath';
import ResponsiveText from './RnText';
import { routeName } from '../constants/routeName';
import { colors } from '../constants/colorsPallet';
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../redux/actions/user.actions';

const Header = ({
  navigation,
  showRightMenu = true,
  inputWidth = wp(58),
  title,

  ...props
}) => {
  const [searchBar, toggleSearchBar] = React.useState('false');
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
          props.iconPath ? navigation.goBack() : navigation.navigate(routeName.WALLET);
        }}
        style={{
          height: hp(6.4),
          width: wp(10.4),
          // backgroundColor:props.iconPath ? colors.black1: undefined,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginEnd: 5,
        }}>
        <View style={props.iconPath ? { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.yellow1, height: wp(13), width: wp(13), borderRadius: wp(6.5) } : { flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            margin={[0, 0, 0, 0]}
            size={props.iconPath ? 25 : 44}
            source={props.iconPath ? props.iconPath : globalPath.BALI_ICON}
          />
          {/* <Icon
          margin={[0, 15, 0, 0]}
          size={props.iconPath ? 25 : 30}
          tintColor={colors.yellow}
          source={props.iconPath ? undefined : globalPath.WALLET_ICON}
        /> */}
        </View>
      </TouchableOpacity>
      {props.iconPath ? (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: hp(6), width: wp(50), paddingLeft: wp(17) }}>
          <Text style={{ color: colors.white, fontSize: wp(6), fontWeight: 'bold' }}>
            {title}
          </Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(routeName.SEARCH_RESULT)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 7,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            backgroundColor:
              searchBar === 'true' ? 'rgba(64,64,64,0.5)' : undefined,
          }}>
          <TouchableOpacity >
            {/* // onPress={() => searchBar==='true'? navigation.navigate(routeName.FeaturedSearch) : undefined}> */}
            {/* <Input
          editable={searchBar==='true'? true : false}
          fontSize={11}
          onSubmitEditing={()=>{}}
          placeholder={searchBar==='true'? "Search Dishes, Restaurants or Promo" : ""}
          padding={[0, 0, 0, 5]}
          
          
          height={hp(6)}
          width={inputWidth}
        /> */}
            <TouchableOpacity >
              <TextInput
                style={{ height: hp(6), width: wp(50), color: colors.white }}
                editable={false}
                onP
                fontSize={11}
                placeholderTextColor={colors.white}
                placeholder={
                  searchBar === 'true'
                    ? 'Search Dishes, Restaurants or Promo'
                    : ''
                }
              />
            </TouchableOpacity>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              searchBar === 'true'
                ? navigation.navigate(routeName.SearchAll)
                : toggleSearchBar('true');
            }}
            style={{ marginStart: 5, borderRadius: 10 }}>
            <Icon source={globalPath.SEARCH_LOGO} size={25} />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      {showRightMenu &&
        (props.iconPath ? (
          <View />
        ) : (
          <TouchableOpacity
            style={{ marginRight: -10 }}
            onPress={() => {
              navigation.navigate(routeName.MORE_BOTTOM);
            }}>
            <Icon
              borderRadius={30}
              size={props.iconPath ? (wp(10), hp(6)) : 42}
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
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
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
  titleText: { color: colors.black, fontFamily: Fonts.Bold, fontSize: wp(1.2) },
};

export default Header;
