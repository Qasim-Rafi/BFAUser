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
const JobsList = props => {
  const List = useSelector(state => state.appReducers.promoJobs.data);
  console.log('Job List: ', List);
  return (
    <>
      <View style={styles.recommendationHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={colors.white}>
          Jobs
        </ResponsiveText>
        <View style={{marginRight: -10}}>
          <SeeAllButton
            title={'Jobs'}
            data={List}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={styles.recommendationItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {List.length > 0
            ? List.map((url, index) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(routeName.APPLY_JOBS, {
                        dish: url,
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
                        imageStyle={{opacity: 0.5}}
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          backgroundColor: 'rgba(0,0,0,1)',
                        }}
                        // source={url.url.}>
                        source={{
                          uri: url.resLogo.replace(/ /g, ''),
                        }}>
                        {/* source={{uri: url.fullPath}}> */}
                        <ResponsiveText
                          fontFamily="Regular"
                          size={3}
                          margin={[0, 0, -5, 0]}
                          color={colors.white}>
                          {url.jobTitle}
                        </ResponsiveText>
                        <ResponsiveText
                          fontFamily="Light"
                          size={2.5}
                          color={colors.white}>
                          {url.adSlideTitle}
                        </ResponsiveText>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                );
              })
            : undefined}
        </ScrollView>
      </View>
    </>
  );
};

export default JobsList;

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
