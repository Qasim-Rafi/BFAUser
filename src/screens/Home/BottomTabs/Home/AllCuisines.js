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
import {
  advertisementBannerFakeDATA,
  CuisinesData,
  cuisineSliderData,
  ourRecommendationFakeDATA,
} from '../../../../constants/mock';
import { colors } from '../../../../constants/colorsPallet';
import FastImage from 'react-native-fast-image'

import SeeAllButton from '../../../../components/SeeAllButton';
import { routeName } from '../../../../constants/routeName';
import { hp, wp } from '../../../../helpers/Responsiveness';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../../../components/Icon';
import { globalPath } from '../../../../constants/globalPath';
import { getUserCusine } from '../../../../redux/actions/user.actions';
const AllCuisines = props => {
  const token = async () => await AsyncStorage.getItem('@token');
  const cuisines = useSelector(state => state.appReducers.cusineDetail.data);
  const cuisinesLoader = useSelector(state => state.appReducers.cusineDetail.loading);
  console.log('Cuisines: ', cuisines);
  console.log('Cuisines: ', cuisinesLoader);
  console.log('cuisines length:', cuisines.length);
  const dispatch = useDispatch();

  React.useEffect(() => { }, [cuisines]);

  return (
    <>
      <View style={styles.recommendationHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={colors.white}>
          Cuisines
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
              props.navigation.navigate(routeName.Categories, {
                data: cuisines,
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
          {cuisines.length > 0
            ?
            cuisines.map((item, index) => {
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
                      <FastImage
                        imageStyle={{ opacity: 1 }}
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          backgroundColor: 'rgba(0,0,0,1)',
                        }}
                        source={{
                          uri: item.fullPath,
                          priority: FastImage.priority.normal,

                        }}>

                        {/* source={require('../../../../assets/fake_Images/japanese.png')}> */}
                        <Text
                          style={{
                            color: 'white', padding: 3, opacity: 0.7,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >
                          {item.name}

                        </Text>

                        {/* <ResponsiveText
                          fontFamily="Regular"
                          size={3}
                          margin={[0, 0, 10, 0]}
                          color={colors.white}>
                          {item.name}
                        </ResponsiveText> */}
                      </FastImage>
                    </View>
                  </TouchableOpacity>
                );
              }
            })

            : undefined}
        </ScrollView>
        {
          cuisinesLoader === true ?
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

export default AllCuisines;

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
