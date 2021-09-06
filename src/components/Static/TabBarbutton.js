import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';

import {TabBg} from '../../assets/icons/Svg/TabBg';
import {colors} from '../../constants/colorsPallet';
import {iconPath} from '../../constants/icon';
import Icon from '../Icon';
import ResponsiveText from '../RnText';

export const TabBarButton = ({bgColor, ...props}) => (
  <View style={styles.container} pointerEvents="box-none">
    <TabBg color={'blue'} style={styles.background} />
    <Pressable onPress={props.onPress}>
      <View style={styles.button}>
        <Icon
          source={iconPath.CAMERA_ICON}
          tintColor={colors.primary}
          width={20}
          height={20}
        />
        <ResponsiveText size={'h7'} color={colors.white}>
          Sell
        </ResponsiveText>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: colors.red1,
    zIndex: 1000,
  },
});
