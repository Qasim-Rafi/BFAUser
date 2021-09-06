import React from 'react';
import {StatusBar, Platform, SafeAreaView, View} from 'react-native';
import {Spacing} from '../constants/spacingScale';
import { colors } from '../constants/colorsPallet';
const Screen = ({color, translucent, hidden, ...props}) => {
  return (
    <View
      style={[
        !translucent &&
          Platform.OS === 'android' && {marginBottom: Spacing.headerV},
        color && {backgroundColor: color},
      ]}>
      <SafeAreaView>
        <StatusBar
          hidden={hidden ? hidden : false}
          translucent={translucent ? translucent : true}
          backgroundColor={colors.white}
          barStyle="dark-content"
        />
      </SafeAreaView>
    </View>
  );
};

export default Screen;
