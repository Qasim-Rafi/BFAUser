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
import {ourRecommendationFakeDATA} from '../../../../constants/mock';
import {wp, hp} from '../../../../helpers/Responsiveness';
import ResponsiveText from '../../../../components/RnText';
import {routeName} from '../../../../constants/routeName';
import Icon from '../../../../components/Icon';
import {getFavorite} from '../../../../redux/actions/user.actions';
import {useSelector, useDispatch} from 'react-redux';

export default function FavouriteDishes(props) {
  const favData = useSelector(state => state.appReducers.favorite.data,)
  const dispatch = useDispatch();
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  React.useEffect(() => {
    dispatch(getFavorite(1, 13));
  }, []);

  return (
    <View style={{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite, flex: 1}}>
      <View style={{flex: 0.9, margin: 20}}>
        <ResponsiveText size={4} margin={[0, 0, 5, 10]} color={isThemeDark ? colors.yellow : colors.black}>
          Favorite Dishes
        </ResponsiveText>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: wp(100)}}>
        {favData.length > 0
            ? Array.from(new Set(favData.map(JSON.stringify))).map(JSON.parse).map((url, item) => {
            console.log("favvvv",item)
            return (
              <TouchableOpacity
              style={{marginHorizontal: 4, marginVertical: 14, }}
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
