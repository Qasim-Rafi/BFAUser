import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image'

import ResponsiveText from '../../../../components/RnText';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import { routeName } from '../../../../constants/routeName';
import { hp, wp } from '../../../../helpers/Responsiveness';
import {
  getRestaurantAllDishes,
  getUserCusine,
  getPromotions,
  getBruneiFoodRewards,
  getBfaPartners,
  AddOrder, whatsNew,
  getFavorite,
  getAddBannerData,
  getBfaRecommendations,
  getPromoNewsData,
  getPromoJobsData,
  getPeopleChoice,
  get_whatsNew,
  getwhatsNew,
} from '../../../../redux/actions/user.actions';
import { getWhatsNewSaga } from '../../../../redux/sagas/user.sagas';
const WhatsNew = props => {
  const NewData = useSelector(state => state.appReducers.whatsnew.data,)
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.recommendationHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={colors.white}>
          What's New
        </ResponsiveText>
        <View style={{ marginRight: -10 }}>

          <SeeAllButton
            title={"What's New"}
            data={NewData}
            action={getwhatsNew}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={styles.recommendationItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {

            NewData.map((url, index) => {
              if (index < 4) {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(routeName.DISH_DETAIL, { dish: url })
                    }>
                    <View
                      style={{
                        width: wp(26),
                        height: hp(18),
                        borderRadius: 3,
                        marginHorizontal: 5,
                        overflow: 'hidden',
                        flexDirection: 'row',
                      }}>
                      <FastImage
                        imageStyle={{ opacity: 1 }}
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          backgroundColor: 'rgba(0,0,0,1)',
                        }}
                        source={{ uri: url.imageDataB }}>
                        <Text
                          style={{
                            opacity: 0.7,
                            marginTop: 1,
                            color: 'white', padding: 3,
                            backgroundColor: '#383131', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >
                          {url.titleR}
                        </Text>
                        <Text
                          style={{
                            color: 'white', padding: 3, marginTop: 1, opacity: 0.7,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >
                          {url.titleD}


                        </Text>
                        {/* <ResponsiveText
                      fontFamily="Regular"
                      size={3}
                      margin={[0, 0, -5, 0]}
                      color={colors.white}>
                    </ResponsiveText> */}
                        {/* <ResponsiveText fontFamily="Light" size={2.5} color={colors.white}>{url.description}</ResponsiveText> */}
                      </FastImage>
                    </View>
                  </TouchableOpacity>
                );
              }
            })
          }
        </ScrollView>
      </View>
    </>
  );
};

export default WhatsNew;

const styles = StyleSheet.create({
  recommendationHeaderSection: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 1,
    borderColor: colors.black1,
  },
  recommendationItemsSection: {
    flex: 1,
    marginTop: 5,
    paddingLeft: 15,
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: -5,
  },
});
