import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';
import {colors} from '../constants/colorsPallet';
import {iconPath} from '../constants/globalPath';
import {handleMargin, handlePadding} from '../constants/theme';
import Fonts from '../helpers/Fonts';
import {wp} from '../helpers/Responsiveness';
import Icon from './Icon';

const Input = ({
  iconSize,
  height,
  margin,
  padding,
  zIndex,
  fontFamily,
  tintColor,
  iconMargin,
  rightIconMargin,
  placeholderTextColor,
  width,
  containerStyle,
  secureTextEntry,
  onChnageText,
  fontSize,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(secureTextEntry);
  const toggle = () => setShowPassword((previousState) => !previousState);

  return (
    <KeyboardAvoidingView>
    <View
      style={[
        styles.container,
        margin ? handleMargin(margin) : undefined,
        padding ? handlePadding(padding) : undefined,
        props.style,
        height && {height},
        width && {width},
        {zIndex: zIndex},
        containerStyle,
      ]}>
      {props.leftIcon && (
        <Icon
          tintColor={tintColor ? tintColor : colors.yellow}
          margin={iconMargin ? iconMargin : [0, 10, 0, -4]}
          source={props.leftIcon}
          size={iconSize}
        />
      )}

      <TextInput
        value={value && value}
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable={props.editable}
        style={[
        fontSize && {fontSize},
          styles.Input,
          fontFamily && {fontFamily: Fonts[fontFamily]},
          props.centerText ? {textAlign: 'center', paddingLeft: 0} : undefined,
          props.textStyle,
          ,{
            color:colors.white
          }
        ]}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : colors.grey1
        }
        // secureTextEntry={showPassword ? true : false}
        secureTextEntry={secureTextEntry ? true : false}
        onChangeText={onChnageText ? (txt) => onChnageText(txt) : null}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.showPasswordBtn} onPress={toggle}>
          {/* <Icon
            tintColor={tintColor ? tintColor : colors.grey}
            margin={rightIconMargin ? rightIconMargin : [0, 10, 0, -4]}
            // style={gStyles.alS_End}
            size="s4"
            // source={showPassword ? iconPath.EYE_ICON : iconPath.EYE_OFF_ICON}
          /> */}
        </TouchableOpacity>
      )}
    </View>
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: wp(12),
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    backgroundColor:colors.grey4,
    borderRadius: wp(2),
    paddingLeft: 10,
  },
  Input: {
    borderRadius: wp(1.5),
    flex: 1,
    // paddingRight: 15,
    fontFamily: Fonts.Regular,
    color:colors.grey4,
  },
  showPasswordBtn: {
    height: '80%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
