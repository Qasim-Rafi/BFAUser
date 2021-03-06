import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import ResponsiveText from './RnText';
import {colors} from '../constants/colorsPallet';
import {hp} from '../helpers/Responsiveness';
import {wp} from '../helpers/Responsiveness';
import Icon from './Icon';
import {globalPath} from '../constants/globalPath';
import { useSelector } from 'react-redux';

export default function CustomInput(props) {
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  return (
    <View style={{marginTop: 15}}>
      <ResponsiveText color={colors.grey1} size={3} margin={[0, 0, 2, 30]}>
        {props.fieldName ? props.fieldName : undefined}
      </ResponsiveText>
      <View
        style={{
          backgroundColor: isThemeDark ? colors.black1 : colors.grey,
          height: hp(6),
          width: props.width ? props.width : wp(85),
          alignSelf: 'center',
          borderRadius: 7,
          flexDirection: 'row',
        }}>
        <TextInput
          placeholder={
            props.placeHolderText ? props.placeHolderText : undefined
          }
          placeholderTextColor={isThemeDark ? colors.grey : colors.lighterGrey }
          style={{marginStart: 20, color: isThemeDark ? colors.white : colors.black, width: wp(40)}}
          value={props.value}
          onChangeText={props.onChangeText}
          editable={props.editable}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  );
}
