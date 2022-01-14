import React, {useState} from 'react';
import {
  ScrollView,
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
  ourRecommendationFakeDATA,
} from '../../../constants/mock';
import {Rating} from 'react-native-ratings';
import Icon from '../../../components/Icon';
import {globalPath} from '../../../constants/globalPath';
import {myListingTabs} from '../../../constants/mock';
import {routeName} from '../../../constants/routeName';
import SearchHeader from '../../../components/SearchHeader';

const BranchesDetail = props => {
  const [data, setData] = React.useState(props.data);

  return (
    <View style={{marginTop: 10, flex: 1}}>
      <View style={styles.everyOneFavoriteItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ResponsiveText size={4} color={colors.white}>
              I-Lotus Restaurant
            </ResponsiveText>
            <ResponsiveText size={3.5} color={colors.grey}>
              View other Branches from this Restaurant
            </ResponsiveText>
          </View>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.black2,
                  borderRadius: 5,
                  marginTop: 10,
                  padding: 5,
                }}
                onPress={() =>
                  props.navigation.navigate(routeName.DISH_DETAIL, {dish: item})
                }>
                <Icon source={item.url} borderRadius={5} size={70} />

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View style={{padding: 5}}>
                    <ResponsiveText
                      fontFamily="Regular"
                      size={3}
                      color={colors.white}>
                      {item.areaName}
                    </ResponsiveText>
                    <ResponsiveText
                      fontFamily="Light"
                      size={2.5}
                      color={colors.grey}>
                      {item.branchAlias}
                    </ResponsiveText>
                    <Rating
                      size={2}
                      tintColor={colors.black2}
                      imageSize={15}
                      // tintColor={'transparent'}
                      style={{
                        paddingVertical: 5,
                        color: colors.black2,
                        left: -1,
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default BranchesDetail;

const styles = StyleSheet.create({
  everyOneFavoriteHeaderSection: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 0.9,
    borderColor: colors.black1,
  },
  everyOneFavoriteItemsSection: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingBottom: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonShape: {
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  buttonViewStyle: {
    margin: 20,
    flexDirection: 'row',
  },
});
