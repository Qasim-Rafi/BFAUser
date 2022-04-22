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
  const favDataRestaurant = useSelector(state => state.appReducers.favoriteRestaurant.data,)
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  console.log(favDataRestaurant,'resssss')
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFavouiteRestaurent(1,8))
  }, []);
 
  return (
    <View style={{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite, flex: 1}}>
      <View style={{flex: 0.9, margin: 20}}>
        <ResponsiveText size={4} margin={[0, 0, 5, 10]} color={isThemeDark ? colors.yellow : colors.black}>
          Favorite Restaurants
        </ResponsiveText>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: wp(100)}}>
        {favDataRestaurant.length > 0
            ? Array.from(new Set(favDataRestaurant.map(JSON.stringify))).map(JSON.parse).map((url, item) => {
            console.log("favvvv",item)
            return (
              <TouchableOpacity
              style={{marginHorizontal: 4, marginVertical: 14}}
              onPress={() =>
                props.navigation.navigate(routeName.RestaurantDetail,
                  url.restaurantBranchId,)
              }>
             
                <View
                  style={{
                    width: wp(26),
                    height: hp(18),
                    borderRadius: 7,
                    overflow: 'hidden',
                    flexDirection: 'row',
                    borderWidth: 0.5, 
                    borderColor: colors.black3
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
                    source={{uri: url.restaurantLogo}}>
                    <View style={{alignItems: 'flex-end'}}>
                      <Icon size={15} source={globalPath.favouriteicon_red} />
                    </View>
                    <View>
                    <Text
                          style={{
                            margin: 1,
                            opacity: 1,

                            color: 'white', padding: 3, marginTop: 2,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >  {url.restaurantName}</Text>
                    
                    <Text
                          style={{
                            margin: 1,
                            opacity: 0.7,
                            color: 'white', padding: 3, marginTop: 2,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >  {url.restaurantBranchesAlldataforappList.areaName}</Text>
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
