import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import RText from './Basics/RText';
import {hp, wp} from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import {iconPath} from '../constants/icon';
import Icon from './Icon';
import Input from './Input';
import {globalPath} from '../constants/globalPath';
import ResponsiveText from './RnText';
import {routeName} from '../constants/routeName';
import { colors } from '../constants/colorsPallet';

const Header = ({ navigation ,showRightMenu = true, inputWidth = wp(72), ...props}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={ props.iconPath? ()=>navigation.goBack() :null } style={{height:hp(6), width:wp(10), backgroundColor:colors.black3, 
      justifyContent:'center', alignItems:'center', borderRadius:10, marginEnd:5}}>
      <Icon
        margin={[0, 0, 0, 0]}
        size={25}
        source={props.iconPath ? props.iconPath : globalPath.BALI_ICON}
      />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(routeName.FeaturedSearch)}>
        <Input
          editable={false}
          fontSize={11}
          placeholder="Search for Dishes, Restaurants or Promo"
          padding={[0, 0, 0, 10]}
          leftIcon={globalPath.SEARCH_LOGO}
          containerStyle={{backgroundColor: colors.black1}}
          height={hp(6)}
          width={inputWidth}
        />
      </TouchableOpacity>
      {showRightMenu && (
        <TouchableOpacity
          onPress={() => props.navigation.navigate(routeName.PROFILE_SCREEN)}>
          <Icon
            margin={[0, 0, 0, 5]}
            borderRadius={10}
            size={(wp(10), hp(6))}
            source={globalPath.PROFILE_LOGO}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  header: {
    backgroundColor: colors.black2,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
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
