import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Header from '../../../../components/Header';
import { colors } from '../../../../constants/colorsPallet';
import { globalPath } from '../../../../constants/globalPath';
import { ourRecommendationFakeDATA } from '../../../../constants/mock';
import { wp, hp } from '../../../../helpers/Responsiveness';
import ResponsiveText from '../../../../components/RnText';
import { useSelector, useDispatch } from 'react-redux';
import { routeName } from '../../../../constants/routeName';
import Icon from '../../../../components/Icon';
import {
  getRestaurantAllDishes,
  getUserCusine,
  getBruneiFoodRewards,
  getPromotions,
  getFavorite,
  whatsNew,
  getBfaRecommendations,
  getPromoNewsData,
  getPromoJobsData,
  getPeopleChoice,
} from '../../../../redux/actions/user.actions';
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
export default function AllDishesList({ route, navigation }) {
  // const data = route.params.data;
  const title = route.params.title;
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(2);
  const data = useSelector(state =>
    title == 'BFA Recommendation'
      ? state.appReducers.bfaRecommendationDetail.data
      : title == "People's Choice"
        ? state.appReducers.PeopleChoice.data
        : title == 'Brunei Food Awards'
          ? state.appReducers.bruneiFoodsAwards.data
          : title == "PG's Favourites"
            ? state.appReducers.favorite.data
            : title == "What's New"
              ? state.appReducers.whatsnew.data
              : title == 'Promotions'
                ? state.appReducers.promotions.data
                : state.appReducers.promoJobs.data,
  );
  const loading = useSelector(
    state => state.appReducers.bfaRecommendationDetail.loading,
  );
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginHorizontal: 8, marginVertical: 10, flex: 1 }}
      onPress={() => navigation.navigate(routeName.DISH_DETAIL, { dish: item })}>
      <View
        style={{
          //width: wp(26),
          flex: 1,
          height: hp(18),
          borderRadius: 7,
          overflow: 'hidden',
          flexDirection: 'row',
        }}>
        <ImageBackground
          imageStyle={{ opacity: 1 }}
          style={{
            flex: 1,
            padding: 5,
            overflow: 'hidden',
            justifyContent: 'space-between',

            backgroundColor: 'rgba(0,0,0,1)',
          }}
          source={item.url ? item.url : { uri: item.imageDataB }}>
          <View style={{ alignItems: 'flex-end' }}></View>
          <View>
            <Text
              style={{
                color: 'white', padding: 3, marginTop: 1, opacity: 0.7,
                backgroundColor: 'black', borderRadius: 7,
                textAlign: 'center', fontWeight: '600', fontSize: 8.5
              }}>
              {item.titleR}
            </Text>
            <Text
              style={{
                marginTop: 1,
                color: 'white', padding: 3, opacity: 0.7,
                backgroundColor: 'black', borderRadius: 7,
                textAlign: 'center', fontWeight: '600', fontSize: 8.5
              }}>
              {item.titleD == undefined ? item.titleA : item.titleD}
            </Text>

            {/* <ResponsiveText fontFamily="Regular" size={2} color={colors.white}>
              {item.titleR}
            </ResponsiveText> */}
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
  const listHead = () => (
    <View>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          backgroundColor: colors.black2,
        }}>
        <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ margin: 10, backgroundColor: colors.black, paddingVertical: 10, alignSelf: 'flex-start', paddingHorizontal: 10, borderRadius: 25 }}>
          <Icon source={globalPath.BACK_ARROW} />
        </TouchableOpacity>
        {/* <Header navigation={navigation} iconPath={globalPath.BACK_ARROW} /> */}
      </View>
      <View style={{ flex: 0.9, margin: 20 }}>
        <ResponsiveText size={4} margin={[0, 0, 5, 10]} color={colors.yellow}>
          {title}
        </ResponsiveText>
      </View>
    </View>
  );

  const onLoad = param => {
    setIndex(index + 1);
    console.log('indexxxxxxx', index);
    switch (title) {
      case "PG's Favourites":
        dispatch(getFavorite(index, 13));
        break;

      case 'Brunei Food Awards':
        dispatch(getBruneiFoodRewards(index, 13));
        break;

      case 'BFA Recommendation':
        dispatch(getBfaRecommendations(index, 13));
        break;

      case "People's Choice":
        dispatch(getBfaRecommendations(index, 13));
        break;

      case "What's New":
        dispatch(whatsNew(index, 13));
        break;

      case 'Promotions':
        dispatch(getPromotions(index, 13));
        break;
      default:
      //Alert.alert('NUMBER NOT FOUND');dispatch(getBruneiFoodRewards())
    }
  };

  return (
    <View style={{ backgroundColor: colors.black3, flex: 1 }}>
      <FlatList
        ListHeaderComponent={listHead}
        stickyHeaderIndices={[0]}
        onEndReached={() => onLoad()}
        onEndReachedThreshold={0.2}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={3}
        ListFooterComponent={
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
            {loading ? <DotIndicator color={colors.yellow} size={5} /> : null}
          </View>
        }
      />
    </View>
  );
}
