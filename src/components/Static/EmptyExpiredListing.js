import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import ResponsiveText from '../RnText';
import Icon from '../Icon';
import {wp} from '../../helpers/Responsiveness';
import {iconPath} from '../../constants/icon';
import {gStyles} from '../../styles/global';

const EmptyExpiredLisitng = (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <Icon
        margin={[wp(5), 0]}
        source={iconPath.NO_SOLD_LISTINGS_ICON}
        width={wp(70)}
        height={wp(45)}
      />
      <ResponsiveText margin={[0, 0]} size={'h4'} fontFamily="SemiBold">
        No Expired Listings
      </ResponsiveText>
      <ResponsiveText
        size={'h6'}
        style={gStyles.center_text}
        padding={[0, 28]}
        margin={[10, 0]}
        textAlign>
        Your listing are active for 30 days after they're posted.We have found
        buyers like listing that are fresh the from oven.)
      </ResponsiveText>
      <ResponsiveText
        size={'h6'}
        style={gStyles.center_text}
        padding={[0, 28]}
        margin={[10, 0]}
        textAlign>
        When your listing is expire, you can come here to reactivate them.
      </ResponsiveText>
    </ScrollView>
  );
};

export default EmptyExpiredLisitng;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
