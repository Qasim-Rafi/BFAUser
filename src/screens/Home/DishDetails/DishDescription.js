import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import {colors} from '../../../constants/colorsPallet';
const text = 'Description';
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {wp} from '../../../helpers/Responsiveness';
import StaticMap from '../../../components/StaticMap';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavorite,
  onRemoveFavorite,
} from '../../../redux/actions/user.actions';
import {routeName} from '../../../constants/routeName';
import {useNavigation} from '@react-navigation/native';

export default function DishDescription(props) {
  const dispatch = useDispatch();
  const favData = useSelector(state => state.appReducers.favorite.data);
  const [liked, setLiked] = React.useState(props.item.userLiked);

  const navigation = useNavigation();
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  console.log(props.item, 'itemmmpropsss');
  useEffect(() => {
    setLiked(props.item.userLiked);
  }, [liked]);

  const updateLike = () => {
    props.item.userLiked = !props.item.userLiked;
    setLiked(!liked);
    // console.log(props.item.userLiked, 'props.item.userLiked');
  };
  return (
    <View>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.priceDesc}>
            <ResponsiveText size={4} color={ isThemeDark ? colors.white : colors.black}>
              {props.item.titleD == undefined
                ? props.item.titleA
                : props.item.titleD}
            </ResponsiveText>
            <ResponsiveText size={3.7} color={colors.grey}>
              {props.item.titleR}
            </ResponsiveText>
            <ResponsiveText size={4} color={colors.yellow}>
              {props.item.price} $
            </ResponsiveText>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                routeName.RestaurantDetail,
                props.item.restaurantBranchId,
              )
            }>
            <Icon
              size={wp(18)}
              margin={[0, 20, 0, 0]}
              source={
                props.item.restaurantLogo
                  ? {uri: props.item.restaurantLogo}
                  : globalPath.RESTAURANT_LOGO
              }
            />
          </TouchableOpacity>
        </View>

        <View>{/* <Image style={{ width: 30, height: 25 }} /> */}</View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
          borderBottomColor: colors.grey,
          borderBottomWidth: 1,
          backgroundColor: isThemeDark ? undefined : colors.white,
          borderTopStartRadius:15,
          borderTopEndRadius:15
        }}>
        <TouchableOpacity disabled={props.item.titleA}
          style={{alignItems: 'center'}}
          onPress={() => {
            if (
              favData.some(
                o => o.restaurantDishId === props.item.restaurantDishId,
              ) ||
              liked
            ) {
              dispatch(onRemoveFavorite(props.item));
              updateLike();
            } else {
              dispatch(addFavorite(props.item));
              updateLike();
            }
            // favData.some(o => o.restaurantDishId === props.item.restaurantDishId) || props.item.userLiked
            //   ?
            //   :
          }}>
          <Icon
            source={
              liked ||
              favData.some(
                o => o.restaurantDishId === props.item.restaurantDishId,
              )
                ? globalPath.F_HEART
                : globalPath.HEART
            }
          />
          <ResponsiveText top={5} color={colors.yellow}>
            Favourite
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routeName.MAP_VIEW)}>
          <View style={{alignItems: 'center'}}>
            <Icon source={globalPath.LOCATION} />
            <ResponsiveText top={5} color={colors.yellow}>
              Go To
            </ResponsiveText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              routeName.CONTACT_US,
              props.item.restaurantBranchId,
            )
          }>
          <View style={{alignItems: 'center'}}>
            <Icon source={globalPath.CONTACT} />
            <ResponsiveText top={5} color={colors.yellow}>
              Contact
            </ResponsiveText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routeName.MORE_ABOUT_DISHES, props.item)
          }>
          <View style={{alignItems: 'center'}}>
            <Icon source={globalPath.MORE_LOGO} />
            <ResponsiveText top={5} color={colors.yellow}>
              More
            </ResponsiveText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <ResponsiveText fontFamily="Regular" size={4} color={ isThemeDark ? colors.white : colors.black}>
          {props.item.titleA == undefined
            ? props.item.titleD
            : props.item.titleA}
        </ResponsiveText>
        <ResponsiveText
          top={5}
          fontFamily="Regular"
          size={3.5}
          color={colors.grey}>
          {props.item.description}
        </ResponsiveText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    height: 200,
  },
  priceDesc: {
    padding: 20,
    flex: 4,
  },
});
