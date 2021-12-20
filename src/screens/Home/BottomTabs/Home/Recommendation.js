import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';

import {
  advertisementBannerFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../../constants/mock';
import {colors} from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import {routeName} from '../../../../constants/routeName';
import {hp, wp} from '../../../../helpers/Responsiveness';
import {useSelector} from 'react-redux';
const Recommendation = props => {
  const bfaRecommendation = useSelector(
    state => state.appReducers.bfaRecommendationDetail.data,
  );
  console.log('Bfa Recommendations: ', bfaRecommendation);
  return (
    <>
      <View style={styles.recommendationHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={colors.white}>
          BFA Recommendation
        </ResponsiveText>
        <View style={{marginRight: -10}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 10,
            }}
            onPress={() => props.navigation.navigate(routeName.DISH_DETAIL)}>
            <View style={{marginRight: 0}}>
              <SeeAllButton
                title={'BFA Recommendation'}
                data={bfaRecommendation}
                navigation={props.navigation}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.recommendationItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {bfaRecommendation.length > 0
            ? bfaRecommendation.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(routeName.DISH_DETAIL, {
                        dish: item,
                      })
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
                      <ImageBackground
                        imageStyle={{opacity: 0.5}}
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          backgroundColor: 'rgba(0,0,0,1)',
                        }}
                        source={{uri: item.imageDataB}}>
                        <ResponsiveText
                          fontFamily="Regular"
                          size={3}
                          margin={[0, 0, 5, 0]}
                          color={colors.white}>
                          {item.dishName}
                        </ResponsiveText>
                        <ResponsiveText
                          fontFamily="Light"
                          size={2.5}
                          color={colors.white}>
                          {item.cusineName}
                        </ResponsiveText>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                );
              })
            : undefined}
        </ScrollView>
      </View>

      {/* <View style={styles.recommendationHeaderSection}>
                <ResponsiveText margin={[0,0,0,0]} size={4} color={colors.white}>BFA Recommendations</ResponsiveText>
                <View style={{marginRight:-10}} >
                <SeeAllButton title={"BFA Recommendation"} data={ourRecommendationFakeDATA} navigation={props.navigation} />
                </View>
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {ourRecommendationFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL,{dish:url})}>
                            <View  style={{ width: wp(26), height: hp(18), borderRadius: 3, marginHorizontal: 5, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground imageStyle={{opacity:.5}} imageStyle={{opacity:.5}} style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end',backgroundColor: 'rgba(0,0,0,1)' }} source={url.url} >
                                    <ResponsiveText fontFamily="Regular" size={3} margin={[0,0,-5,0]} color={colors.white}>{url.title}</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2.5} color={colors.white}>{url.description}</ResponsiveText>
                                </ImageBackground>
                            </View>
                            </TouchableOpacity>

                        )
                    })}
                </ScrollView>
            </View> */}
    </>
  );
};

export default Recommendation;

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
