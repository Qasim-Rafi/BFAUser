import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import RText from './Basics/RText';
import {hp, wp} from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import {iconPath} from '../constants/icon';
import Icon from './Icon';
import Input from './Input';
import { globalPath } from '../constants/globalPath';
import ResponsiveText from './RnText';
import { routeName } from '../constants/routeName';
import { colors } from '../constants/colorsPallet';

const SearchHeader = (props) => {
  return (
    <View style={[styles.header, {backgroundColor:'#2F2F2F'}]}>
    
         <View style={{backgroundColor:'#3f3f3f', borderRadius:2}}>
        <TouchableOpacity onPress={()=>{props.navigation.goBack()}}><Icon size={wp(2) , hp(5)} source={require('../assets/icons/back-arrow.png')} /></TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginLeft:5}}>
                  <Input editable={false} fontSize={11} color={colors.white} Value="Chicken" padding={[0, 0, 0, 10]} leftIcon={globalPath.SEARCH_LOGO} containerStyle={{ backgroundColor: '#404040'}}height={hp(6)} width={wp(70)} />
        </TouchableOpacity>
        <Icon margin={[0,0,0,5]} borderRadius={10} size={wp(10) , hp(6)} source={globalPath.PROFILE_LOGO} />
        

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

export default SearchHeader;
