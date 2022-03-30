import React from 'react';
import {
  Image,
  Text,
  Animated,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {moreFromRestaurant} from '../../../redux/actions/user.actions';
import {routeName} from '../../../constants/routeName';
import ResponsiveText from '../../../components/RnText';
import {
  advertisementBannerFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../constants/mock';
import {colors} from '../../../constants/colorsPallet';
import SeeAllButton from '../../../components/SeeAllButton';
import {useSelector, useDispatch} from 'react-redux';
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
import {useEffect} from 'react';
const MoreFromResturant = (props, navigation) => {
  const moreFromRest = useSelector(
    state => state.appReducers.moreFromRest.data,
  );
  const loading = useSelector(state => state.appReducers.moreFromRest.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(moreFromRestaurant(props.restaurantBranchId));
  }, []);
  return (
    <>
      <View style={styles.yourFavoriteHeaderSection}>
        <ResponsiveText size={4} color={colors.white}>
          More From {props.title}
        </ResponsiveText>
        <SeeAllButton
          title={'More From Restaurant'}
          navigation={props.navigation}
          action={moreFromRestaurant}
          data={props.restaurantBranchId}
        />
      </View>
      <View style={styles.yourFavoriteItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {moreFromRest.length > 0
            ? moreFromRest.map((url, index) => {
                // if (index < 4) {
                return (
                  <TouchableOpacity onPress={() => props.item(url)}>
                    <View
                      style={{
                        width: 90,
                        height: 130,
                        marginRight: 5,
                        borderRadius: 3,
                        overflow: 'hidden',
                        flexDirection: 'row',
                      }}>
                      <ImageBackground
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                        }}
                        source={{uri: url.imageDataB}}>
                        <Text
                          style={{
                            color: 'white',
                            padding: 3,
                            opacity: 0.7,
                            backgroundColor: '#383131',
                            borderRadius: 7,
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: 8.5,
                          }}>
                          {url.titleD}
                        </Text>
                        <Text
                          style={{
                            marginTop: 2,
                            color: 'white',
                            padding: 3,
                            opacity: 0.7,
                            backgroundColor: 'black',
                            borderRadius: 7,
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: 8.5,
                          }}>
                          {url.titleR}
                        </Text>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                );
              })
            : null}
        </ScrollView>
        {loading === true ? (
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
        ) : moreFromRest.length > 0 ? null : (
          <Text
            style={{
              textAlign: 'center',
              color: colors.white,
            }}>
            No data found
          </Text>
        )}
      </View>
    </>
  );
};

export default MoreFromResturant;

const styles = StyleSheet.create({
  yourFavoriteHeaderSection: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:colors.black1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 0.9,
    borderColor: colors.black1,
  },
  yourFavoriteItemsSection: {
    flex: 1,
   // flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
