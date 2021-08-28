import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import RText from './Basics/RText';
import {wp} from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import {iconPath} from '../constants/icon';
import Icon from './Icon';
import ResponsiveText from './RnText';

const Header = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        {props.leftIcon && (
          <TouchableOpacity onPress={() => props.onFirstPress()}>
            <Icon
              resizeMode={'contain'}
              margin={[5, 15, 0, 0]}
              source={props.leftIcon}
              tintColor={'grey'}
              size="s2"
            />
          </TouchableOpacity>
        )}
        <RText style={styles.titleText}>{props.title}</RText>
      </View>
      <View style={{flexDirection: 'row'}}>
        {props.secondIcon && (
          <TouchableOpacity onPress={() => props.onSecondPress()}>
            <Icon
              margin={[5, 15]}
              source={props.secondIcon}
              tintColor={'grey'}
              size="s2"
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => props.onSecondPress()}
          onLayout={props.onLayout}>
          <Icon
            margin={[5, 8]}
            source={props.icon}
            tintColor={props.color}
            size="header"
          />
        </TouchableOpacity>
        {props.leftText && (
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => props.onTextPress()}>
            <ResponsiveText fontFamily={'SemiBold'} color={'red'}>
              {props.leftText}
            </ResponsiveText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = {
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
