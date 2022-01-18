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
import Icon from '../../../../components/Icon';
import { globalPath } from '../../../../constants/globalPath';

import ResponsiveText from '../../../../components/RnText';
import FastImage from 'react-native-fast-image'

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
import {
  advertisementBannerFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../../constants/mock';
import { colors } from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import { routeName } from '../../../../constants/routeName';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { useSelector } from 'react-redux';
import { getPromoJobsData } from '../../../../redux/actions/user.actions';
const JobsList = props => {
  const List = useSelector(state => state.appReducers.promoJobs.data);
  const List_Loading = useSelector(state => state.appReducers.promoJobs.loading);
  console.log('Job List: ', List);
  // console.log('Loading: ', List_Loading);
  return (
    <>
      <View style={styles.recommendationHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={colors.white}>
          Jobs
        </ResponsiveText>
        <View style={{ marginRight: -10 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 10,
            }}
            onPress={() => {
              props.navigation.navigate(routeName.JOB_LISTING, {
                data: List,
              });
            }}>
            <ResponsiveText
              size={3.2}
              margin={[0, 10, 0, 0]}
              color={colors.yellow}>
              Show All
            </ResponsiveText>
            <Icon
              size={(wp(1.6), hp(1.6))}
              margin={[0, 10, 0, 0]}
              source={globalPath.RIGHT_ARROW}
            />
          </TouchableOpacity>
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
                      data: url,
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
                    <FastImage
                      imageStyle={{ opacity: 1 }}
                      style={{
                        flex: 1,
                        padding: 5,
                        overflow: 'hidden',
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgba(0,0,0,1)',
                        priority: FastImage.priority.high,

                      }}
                      // source={url.url.}>
                      source={{
                        uri: url.fullPath,
                      }}>
                      {/* source={{uri: url.fullPath}}> */}
                      <Text
                        style={{
                          color: 'white', padding: 3, opacity: 0.7,
                          backgroundColor: 'black', borderRadius: 7,
                          textAlign: 'center', fontWeight: '600', fontSize: 8.5
                        }}

                      >
                        {url.jobTitle}




                      </Text>
                      {/* <ResponsiveText
                        fontFamily="Regular"
                        size={3}
                        margin={[0, 0, -5, 0]}
                        color={colors.white}>
                        {url.jobTitle}
                      </ResponsiveText> */}
                      {/* <ResponsiveText
                        fontFamily="Light"
                        size={2.5}
                        color={colors.white}>
                        {url.adSlideTitle}
                      </ResponsiveText> */}
                    </FastImage>
                  </View>
                </TouchableOpacity>
              );
            })
            : undefined}
        </ScrollView>
        {
          List_Loading === true ?
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
