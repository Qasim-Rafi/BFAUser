import React, { useState } from 'react';
import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
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
import { Rating, AirbnbRating } from 'react-native-ratings';
import { routeName } from '../../../../constants/routeName';
import {
  advertisementBannerFakeDATA,
  everyoneFavoriteFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../../constants/mock';
import { colors } from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { useSelector } from 'react-redux';
import { State } from 'react-native-gesture-handler';
import { getPeopleChoice } from '../../../../redux/actions/user.actions';
const EveryOneFavourite = props => {
  const People_choice = useSelector(state => state.appReducers.PeopleChoice.data)
  const People_choice_Loading = useSelector(State => State.appReducers.PeopleChoice.loading)
  console.log("People Choice: ", People_choice);
  console.log("People Choice: ", People_choice.length);

  const [arrayData, setArrayData] = useState(ourRecommendationFakeDATA);

  return (
    <>
      <View style={styles.everyOneFavoriteHeaderSection}>
        <ResponsiveText size={4} margin={[0, 0, 0, 0]} color={colors.white}>
          People's Choice
        </ResponsiveText>
        <View style={{ marginRight: -10 }}>
          <SeeAllButton
            title={"People's Choice"}
            data={People_choice}
            action={getPeopleChoice}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={styles.everyOneFavoriteItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {
            People_choice.length > 0 ?
              People_choice.map((url, index) => {
                if (index < 4) {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate(routeName.RestaurantDetail)
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
                        <ImageBackground
                          imageStyle={{ opacity: 1 }}
                          style={{
                            flex: 1,
                            padding: 5,
                            overflow: 'hidden',
                            justifyContent: 'flex-end',
                          }}
                          source={{ uri: url.fullPath }}>

                          <ResponsiveText
                            fontFamily="Regular"
                            size={3}
                            color={colors.white}>
                            {url.dishName}
                          </ResponsiveText>
                          {/* <ResponsiveText
                      fontFamily="Light"
                      size={2.5}
                      margin={[-5, 0, -5, 0]}
                      color={colors.white}>
                      Special sushi
                    </ResponsiveText> */}

                          <Rating
                            tintColor={'rgba(0, 0, 0, 0.8)'}
                            size={2}
                            imageSize={10}
                            // tintColor={'transparent'}
                            style={{ paddingVertical: 10, alignSelf: 'flex-start' }}
                          />
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
                  );
                }
              }) : undefined}
        </ScrollView>
        {
          People_choice_Loading === true ?
            <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0)', flex: 1 }}>
              < DotIndicator color={colors.yellow} size={5} />
            </View>
            :
            undefined
        }
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
