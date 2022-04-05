import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../components/Header';
import {colors} from '../../../../constants/colorsPallet';
import {globalPath} from '../../../../constants/globalPath';
import {wp, hp} from '../../../../helpers/Responsiveness';
import ResponsiveText from '../../../../components/RnText';
import { routeName } from '../../../../constants/routeName';
import Icon from '../../../../components/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { getFavouiteRestaurent } from '../../../../redux/actions/user.actions';
export default function FavouriteRestaurants(props) {
  const favData = useSelector(state => state.appReducers.favoriteRestaurant.data,)
  console.log(favData,'resssss')
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFavouiteRestaurent(1,8))
  }, []);
 
  return (
    <View style={{backgroundColor: colors.black3, flex: 1}}>
      <View style={{flex: 0.9, margin: 20}}>
        <ResponsiveText size={4} margin={[0, 0, 5, 10]} color={colors.yellow}>
          Favorite Restaurants
        </ResponsiveText>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: wp(100)}}>
        {favData.length > 0
            ? Array.from(new Set(favData.map(JSON.stringify))).map(JSON.parse).map((url, item) => {
            console.log("favvvv",item)
            return (
              <TouchableOpacity
              style={{marginHorizontal: 4, marginVertical: 14}}
              onPress={() =>
                props.navigation.navigate(routeName.DISH_DETAIL, {
                  dish: url,
                })
              }>
             
                <View
                  style={{
                    width: wp(26),
                    height: hp(18),
                    borderRadius: 7,
                    overflow: 'hidden',
                    flexDirection: 'row',
                  }}>
                  <ImageBackground
                    imageStyle={{opacity: 1}}
                    style={{
                      flex: 1,
                      padding: 5,
                      overflow: 'hidden',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(0,0,0,1)',
                    }}
                    source={{uri: url.imageDataB}}>
                    <View style={{alignItems: 'flex-end'}}>
                      <Icon size={15} source={globalPath.favouriteicon_red} />
                    </View>
                    <View>
                      <ResponsiveText
                        fontFamily="Regular"
                        size={2.9}
                        color={colors.white}>
                        {url.titleR}
                      </ResponsiveText>
                      <ResponsiveText
                        fontFamily="Light"
                        size={2}
                        color={colors.white}>
                        {url.titleD}
                      </ResponsiveText>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            )     
          })
          : undefined}
        </View>
      </View>
    </View>
  );
}
