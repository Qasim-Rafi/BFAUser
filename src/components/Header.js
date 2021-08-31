import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import RText from './Basics/RText';
import {wp} from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import {iconPath} from '../constants/icon';
import Icon from './Icon';
import Input from './Input';
import { globalPath } from '../constants/globalPath';
import ResponsiveText from './RnText';
import { routeName } from '../constants/routeName';

const Header = (props) => {
  return (
    <View style={styles.header}>

                <Icon source={globalPath.BALI_LOGO} />
                <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.FeaturedSearch)}>
                  <Input editable={false} placeholder="Search for Dishes, Restaurants or Promo" padding={[0, 0, 0, 10]} leftIcon={globalPath.SEARCH_LOGO} containerStyle={{ backgroundColor: '#404040' }} width={wp(75)} />
                  </TouchableOpacity>
                <Icon source={globalPath.SEARCH_LOGO} />

            </View>
    
  );
};

const styles = {
  header: {
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
  titleText: {color: 'black', fontFamily: Fonts.Bold, fontSize: wp(1.2)},
};

export default Header;
