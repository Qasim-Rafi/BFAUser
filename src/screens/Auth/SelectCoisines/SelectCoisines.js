import React, {useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import Header from '../../../components/Header';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import {hp, wp} from '../../../helpers/Responsiveness';
import {
  advertisementBannerFakeDATA,
  COISINES_FAKE_DATA,
} from '../../../constants/mock';
import {Rating} from 'react-native-ratings';
import Icon from '../../../components/Icon';
import {globalPath} from '../../../constants/globalPath';
import {myListingTabs} from '../../../constants/mock';
import {FiltersDummyData} from '../../../constants/mock';
import RnButton from '../../../components/RnButton';
import {routeName} from '../../../constants/routeName';

export default function SelectCoisines({navigation}) {
  const [check, setChecked] = React.useState([]);

  return (
    <View style={{flex: 1, backgroundColor: colors.black3}}>
      <View style={styles.header}>
        <View></View>
        <ResponsiveText color={colors.white} size={5}>
          Select Coisines
        </ResponsiveText>
        <Icon />
      </View>
      <ResponsiveText margin={[20, 0, 30, 20]} color={colors.white}>
        Pick Your Fav Coisines{' '}
      </ResponsiveText>
      <View
        style={{
          flex: 0.8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          // alignContent: 'center',
        }}>
        {COISINES_FAKE_DATA.map((item, index) => {
          return (
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: check ? colors.yellow : colors.black2,
                  marginHorizontal: 10,
                  padding: 10,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 14}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <RnButton
          onPress={() => {
            navigation.navigate(routeName.LANDING_SCREEN);
          }}
          style={styles.cuisinesButton}>
          <ResponsiveText>Next</ResponsiveText>
        </RnButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.black2,
  },
  cuisinesButton: {
    backgroundColor: colors.yellow,
    paddingVertical: 5,
    // paddingHorizontal:5,
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
    // justifyContent: 'space-between',

    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
