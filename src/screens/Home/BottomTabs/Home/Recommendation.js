import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';
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
import { getBfaRecommendations } from '../../../../redux/actions/user.actions';
import {
  advertisementBannerFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../../constants/mock';
import { colors } from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import { routeName } from '../../../../constants/routeName';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Recommendation = props => {
  const bfaRecommendation = useSelector(
    state => state.appReducers.bfaRecommendationDetail.data,
  );
  const bfaRecommendation_Loading = useSelector(
    state => state.appReducers.bfaRecommendationDetail.loading,
  );
  const dispatch = useDispatch();
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)


  console.log('Bfa Recommendations: ', bfaRecommendation);
  console.log('Bfa Recommendations: ', bfaRecommendation_Loading);
  return (
    <>
      <View style={styles.recommendationHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={isThemeDark ? colors.white : colors.black}>
          BFA Recommendation
        </ResponsiveText>
        <View style={{ marginRight: -10 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 10,
            }}
            onPress={() => props.navigation.navigate(routeName.DISH_DETAIL)}

          >
            <View style={{ marginRight: 0 }}>
              <SeeAllButton
                title={'BFA Recommendation'}
                navigation={props.navigation}
                action={getBfaRecommendations}

              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.recommendationItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {bfaRecommendation.length > 0
            ? bfaRecommendation.map((item, index) => {
              if (index < 4) {


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
                        imageStyle={{ opacity: 1 }}
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          backgroundColor: 'rgba(0,0,0,1)',
                        }}
                        source={{ uri: item.imageDataB }}>
                        <Text
                          style={{
                            margin: 1,
                            opacity: 1,

                            color: 'white', padding: 3, marginTop: 2,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >
                          {item.titleR}

                        </Text>
                        <Text
                          style={{
                            opacity: 0.7,
                            color: 'white', padding: 3,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >
                          {item.titleD}
                        </Text>

                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                );
              }
            })
            : undefined}
        </ScrollView>
        {
          bfaRecommendation_Loading === true ?
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
