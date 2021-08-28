import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Container from '../Basics/Container';
import ResponsiveText from '../RnText';
import Header from '../Header';
import {iconPath} from '../../constants/icon';
import {hp, wp} from '../../helpers/Responsiveness';
import {colors} from '../../constants/colorsPallet';
import {useNavigation} from '@react-navigation/native';
import Input from '../Input';
import RnButton from '../RnButton';
import {gStyles} from '../../styles/global';
import Icon from '../Icon';

const ReportListing = (props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header
        title={'Report Listing'}
        color={'grey'}
        leftIcon={iconPath.CROSS_ICON}
        onFirstPress={() => navigation.goBack()}
      />
      <View style={styles.Container}>
        <ResponsiveText
          // fontFamily="SemiBold"
          color={colors.grey}
          size="h5"
          margin={[wp(2.5), 0]}>
          why are you reporting this listing?
        </ResponsiveText>
        <TouchableOpacity onPress={() => null} style={styles.listItem}>
          <ResponsiveText fontFamily="Bold" color={colors.black} size="h6">
            it shouldn't be on dealzone
          </ResponsiveText>
          <Icon
            source={iconPath.RIGHT_ICON}
            size="s6"
            tintColor={colors.grey}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <ResponsiveText
            margin={[20, 0]}
            fontFamily="Bold"
            color={colors.black}
            size="h6">
            it shouldn't be on dealzone
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <ResponsiveText
            margin={[20, 0]}
            fontFamily="Bold"
            color={colors.black}
            size="h6">
            I think it's a scam
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <ResponsiveText
            margin={[20, 0]}
            fontFamily="Bold"
            color={colors.black}
            size="h6">
            It's dublicate listing
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <ResponsiveText
            margin={[20, 0]}
            fontFamily="Bold"
            color={colors.black}
            size="h6">
            It's in the wrong category
          </ResponsiveText>
        </TouchableOpacity>
        {/* <View style={{flex: 2}} /> */}
        <RnButton
          onPress={() => navigation.goBack()}
          margin={[hp(28), 0]}
          fontFamily="Bold"
          btnStyle={{borderWidth: 0}}
          backgroundColor={colors.red3}
          title="Report"
          textColor={colors.primary}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingTop: wp(3),
    paddingBottom: wp(5),
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default ReportListing;
