import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Header from '../../../../components/Header';
import Advertisement2ndVarient from '../Home/Advertisement2ndVarient';
import PromosBanner from './PromoBanner';
import RnButton from '../../../../components/RnButton';
import {colors} from '../../../../constants/colorsPallet';
import {hp, wp} from '../../../../helpers/Responsiveness';
import ResponsiveText from '../../../../components/RnText';
import {
  myPromosListingTabs,
  yourFavoriteFakeDATA,
} from '../../../../constants/mock';
import Icon from '../../../../components/Icon';
import {globalPath} from '../../../../constants/globalPath';
import {NewsFeeds} from '../../../../constants/mock';
import {routeName} from '../../../../constants/routeName';
import {useSelector,useDispatch} from 'react-redux';
import {
 getPromoNewsData
} from '../../../../redux/actions/user.actions';

const NewsFeed = props => {
  const {navigation} = props;
  const NewsData = useSelector(state => state.appReducers.PromoNews.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPromoNewsData());
    console.log('News: ', NewsData);
  },[]);
  return (
    <View style={{backgroundColor: colors.black3, flex: 1}}>
      <View
        style={{
          marginTop: 0,
          alignSelf: 'center',
          height: 65,
          backgroundColor: colors.black1,
        }}>
        <View
          style={{
            marginTop: 25,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Header navigation={navigation} />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            backgroundColor: colors.black3,
          }}>
          <ResponsiveText size={5} color={colors.white}>
            Inbox
          </ResponsiveText>
        </View>
        {NewsData.length > 0
          ? NewsData.map((item, index) => {
              return (
                <View
                  style={{
                    marginHorizontal: 9,
                    backgroundColor: colors.black2,
                    height: hp(46),
                    borderRadius: 5,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 12,
                      marginHorizontal: 15,
                    }}>
                    <View >
                      <Avatar.Image size={40} source={{uri: item.fullPath}} />
                    </View>
                    <View>
                      <ResponsiveText
                        margin={[0, 7]}
                        color={colors.white}
                        size={2.7}>
                        {item.title}
                      </ResponsiveText>
                      <ResponsiveText
                        margin={[0, 7]}
                        color={colors.grey}
                        size={2.7}>
                        {item.description}
                      </ResponsiveText>
                    </View>
                  </View>
                  <ImageBackground
                    style={styles.Advertisement2ndVarientImage}
                    // source={item.url}
                    source={{uri: item.fullPath}}
                      ></ImageBackground>
                  <View style={{marginTop: 10, marginLeft: 15}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#707070',
                            flexDirection: 'row',
                            borderRadius: 20,
                            height: hp(4),
                            width: wp(17),
                          }}>
                          <Icon source={globalPath.F_HEART} />
                          <ResponsiveText
                            margin={[0, 5, 0, 8]}
                            color={colors.white}
                            size={3}>
                            224
                          </ResponsiveText>
                        </View>
                      </TouchableOpacity>
                      <View style={{marginRight: 15}}>
                        <TouchableOpacity
                          style={{
                            width: wp(25),
                            height: hp(4),
                            borderRadius: 20,
                            backgroundColor: colors.yellow,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          //  onPress={()=>props.navigation.navigate(routeName.DishDetails)}>
                          onPress={() =>
                            props.navigation.navigate(routeName.DISH_DETAIL, {
                              dish: item,
                            })
                          }>
                          <ResponsiveText size={3}>Order Now</ResponsiveText>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 7,
                      }}>
                      <ResponsiveText top={0} color={colors.white} size={3}>
                        {item.newsTitle}
                        {/* <ResponsiveText color={colors.grey} size={3}>
                          {item.description}
                        </ResponsiveText> */}
                      </ResponsiveText>
                    </View>
                  </View>
                </View>
              );
            })
          : undefined}
      </ScrollView>
    </View>
  );
};
export default NewsFeed;
const styles = StyleSheet.create({
  Advertisement2ndVarientImage: {justifyContent: 'center', height: hp(25)},
});
