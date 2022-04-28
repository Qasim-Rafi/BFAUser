import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import ResponsiveText from '../../../../components/RnText';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {routeName} from '../../../../constants/routeName';
import FastImage from 'react-native-fast-image';

import {
  advertisementBannerFakeDATA,
  everyoneFavoriteFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../../constants/mock';
import {colors} from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import {hp, wp} from '../../../../helpers/Responsiveness';
import {useSelector} from 'react-redux';
import {State} from 'react-native-gesture-handler';
import {getPeopleChoice} from '../../../../redux/actions/user.actions';
const EveryOneFavourite = props => {
  const People_choice = useSelector(
    state => state.appReducers.PeopleChoice.data,
  );
  const People_choice_Loading = useSelector(
    State => State.appReducers.PeopleChoice.loading,
  );
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  console.log('People Choice: ', People_choice);
  console.log('People Choice: ', People_choice.length);

  const [arrayData, setArrayData] = useState(ourRecommendationFakeDATA);

  return (
    <>
      <View style={[styles.everyOneFavoriteHeaderSection,{backgroundColor:isThemeDark ?  colors.black3: colors.bgWhite}]}>
        <ResponsiveText size={4} margin={[0, 0, 0, 0]} color={isThemeDark ? colors.white : colors.black}>
          People's Choice
        </ResponsiveText>
        <View style={{marginRight: -10}}>
          <SeeAllButton
            title={"People's Choice"}
            data={People_choice}
            action={getPeopleChoice}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={[styles.everyOneFavoriteItemsSection,{backgroundColor:isThemeDark ?  colors.black3: colors.bgWhite}]}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {People_choice.length > 0
            ? People_choice.map((url, index) => {
                if (index < 4) {
                  return (
                    <TouchableOpacity
                      onPress={
                        () =>
                          props.navigation.navigate(routeName.DISH_DETAIL, {
                            dish: url,
                          })
                        // (routeName.RestaurantDetail, url)
                      }>
                      <View
                        style={{
                          width: wp(26),
                          height: hp(18),
                          marginHorizontal: 5,
                          borderRadius: 3,
                          overflow: 'hidden',
                          flexDirection: 'row',
                        }}>
                        <FastImage
                          imageStyle={{opacity: 1}}
                          style={{
                            flex: 1,
                            padding: 5,
                            overflow: 'hidden',
                            justifyContent: 'flex-end',
                          }}
                          source={{uri: url.fullPath}}>
                          {/* <Rating
                            tintColor={'rgba(0, 0, 0, 0.8)'}
                            imageSize={13}
                            ratingCount={5}
                            defaultRating={5}
                            // tintColor={'transparent'}
                            style={{ paddingVertical: 10, alignSelf: 'flex-start' }}
                          /> */}
                          <AirbnbRating
                            showRating={false}
                            isDisabled={true}
                            count={5}
                            defaultRating={url.ratingCount}
                            size={12}
                            style={{
                              paddingVertical: 10,
                              alignSelf: 'flex-start',
                            }}
                          />
                          <Text
                            style={{
                              color: 'white',
                              padding: 3,
                              opacity: 1,
                              backgroundColor: 'black',
                              borderRadius: 7,
                              textAlign: 'center',
                              fontWeight: '600',
                              fontSize: 8.5,
                            }}>
                            {url.titleD}
                          </Text>

                          {/* <ResponsiveText
                      fontFamily="Light"
                      size={2.5}
                      margin={[-5, 0, -5, 0]}
                      color={colors.white}>
                      Special sushi
                    </ResponsiveText> */}
                        </FastImage>
                      </View>
                    </TouchableOpacity>
                  );
                }
              })
            : undefined}
        </ScrollView>
        {People_choice_Loading === true ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: 'rgba(65, 65, 65, 0)',
              flex: 1,
            }}>
            <DotIndicator color={colors.yellow} size={5} />
          </View>
        ) : undefined}
      </View>
    </>
  );
};

export default EveryOneFavourite;

const styles = StyleSheet.create({
  everyOneFavoriteHeaderSection: {
    paddingHorizontal: 0,
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 5,
    marginRight: 15,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.black1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 1,
    borderBottomColor: colors.black2,
    borderColor: colors.black1,
  },
  everyOneFavoriteItemsSection: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
    justifyContent: 'center',
    marginLeft: 10,
    overflow: 'hidden',
  },
});
