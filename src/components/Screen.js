import React from 'react';
import {StatusBar, Platform, SafeAreaView, View} from 'react-native';
import {Spacing} from '../constants/spacingScale';

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
          backgroundColor={'white'}
          barStyle="dark-content"
        />
      </SafeAreaView>
    </View>
  );
};

export default Screen;
