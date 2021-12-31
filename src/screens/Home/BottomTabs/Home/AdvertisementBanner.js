import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';
import RnButton from '../../../../components/RnButton';
import Swiper from 'react-native-swiper';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator
} from 'react-native-indicators'
import Svg, { Defs, LinearGradient, Stop } from 'react-native-svg';
import { advertisementBannerFakeDATA } from '../../../../constants/mock';
import { colors } from '../../../../constants/colorsPallet';
import { globalPath } from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import { hp, wp } from '../../../../helpers/Responsiveness';
import Header from '../../../../components/Header';
import { useSelector } from 'react-redux';

const AdvertisementBanner = ({ navigation }) => {
  const addBanner = useSelector(state => state.appReducers.addBanner.data);
  const loading = useSelector(state => state.appReducers.addBanner.loading);
  console.log("Banner loading: ", loading)

  return (
    <>
      {addBanner.length === undefined ? undefined : (
        <Swiper
          style={{}}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          removeClippedSubviews={false}
          activeDot={
            <View
              style={{
                backgroundColor: colors.yellow,
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: -20,
              }}
            />
          }
          dot={
            <View
              style={{
                backgroundColor: colors.white,
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: -20,
              }}
            />
          }>
          {addBanner.map((item, index) => {
            return (
              <View style={{ flex: 1 }}>
                <ImageBackground
                  imageStyle={{ opacity: 0.8 }}
                  style={styles.advertisementBannerImage}
                  //  source={{ uri: url }}
                  source={{ uri: item.fullPath }}>
                  {
                    loading === true ?
                      <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0)', flex: 1 }}>
                        <DotIndicator color={colors.yellow} size={5} />
                      </View>
                      :
                      undefined
                  }
                  <View style={styles.advertisementBannerTitleOverlay}>

                    <ResponsiveText
                      fontFamily={'SemiBold'}
                      size={4.5}
                      color={colors.white}>
                      {item.adSlideTitle}
                    </ResponsiveText>

                    <ResponsiveText
                      fontFamily={'light'}
                      margin={[-3, 0, 5, 0]}
                      size={3}
                      color={colors.white}>
                      {item.description}
                    </ResponsiveText>

                    {/* <TouchableOpacity style={{height:hp(3.5), width:wp(28), backgroundColor:colors.yellow,
                            borderRadius:5,justifyContent:'center',alignItems:'center',alignSelf:'center', flexDirection:'row'
                            }} >
                                <ResponsiveText size={3} >Read More</ResponsiveText>
                                <Icon size={wp(3)} margin={[0,0,0,5]}  tintColor='black' source={globalPath.READ_MORE} />

                            </TouchableOpacity> */}

                  </View>


                </ImageBackground>


              </View>
            );
          })}

        </Swiper>

      )}
    </>
  );
};

export default AdvertisementBanner;

const styles = StyleSheet.create({
  advertisementBannerImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  advertisementBannerTitleOverlay: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,

    // backgroundColor:  'rgba(52, 52, 52, 0.7)',
    opacity: 1,
    padding: 10,
  },
});
