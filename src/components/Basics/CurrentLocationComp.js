import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import RNLocation from 'react-native-location';

import Icon from '../Icon';
import RnButton from '../RnButton';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import ResponsiveText from '../RnText';
import CustomLabel from '../CustomLabel';
import {hp, wp} from '../../helpers/Responsiveness';
import {colors} from '../../constants/colorsPallet';
import {gStyles} from '../../styles/global';
import {iconPath} from '../../constants/icon';

const CurrentLocationComp = ({visible, setVisibile, showLocationSlides}) => {
  const map = useRef(null);
  const ref = useRef(null);
  const autoCompleteRef = React.useRef();
  const [range, setRange] = useState(5);
  const [location, setLocation] = useState(null);
  const [remix, setRemix] = useState(0);
  const [details, setDetails] = useState([]);
  const [directions, setDirections] = useState(false);
  const [overlayHeight, setOverlayHeight] = useState(wp(70));
  const [overlayWidth, setOverlayWidth] = useState(wp(70));
  const [overlayRadius, setOverlayRadius] = useState(wp(35));
  const [top, setTop] = useState('30%');
  const [left, setLeft] = useState('13%');
  const [value, setValue] = useState(null);
  const [showBackgroundView, setShowBackgroundView] = useState(true);
  const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0421);
  const [u, setU] = useState(false);

  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([5]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = React.useState([0, 100]);

  console.log('location', location);

  let User_region = {
    latitude: location ? location.latitude : 37.78825,
    longitude: location ? location.longitude : -122.4324,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  };

  console.log('>>>>>', value);

  useEffect(() => {
    // RNLocation.configure({ distanceFilter: null });

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    })
      .then((granted) => {
        console.warn(granted);
        RNLocation.getLatestLocation({timeout: 60000}).then((locations) => {
          setLocation(locations);
        });
      })
      .catch((err) => console.log('error', err));
  }, []);

  const zoomFunction = () => {
    setU(!u);
    if (value === 9) {
      console.log('500 MILE');
      setLatitudeDelta(7.2463);
      setLongitudeDelta(0.0);
    }
    if (value === 8) {
      console.log('300 MILE');
      setLatitudeDelta(4.34782);
      setLongitudeDelta(0.0);
    }
    if (value === 7) {
      console.log('100 MILE');
      setLatitudeDelta(1.4492);
      setLongitudeDelta(0.0);
    }
    if (value === 6) {
      console.log('50 MILE');
      setLatitudeDelta(0.7246);
      setLongitudeDelta(0.0);
    }
    if (value === 5) {
      console.log('30 MILE');
      setLatitudeDelta(0.43478);
      setLongitudeDelta(0.0);
    }
    if (value === 4) {
      console.log('10 MILE');
      setLatitudeDelta(0.14492);
      setLongitudeDelta(0.0);
    }
    if (value === 3) {
      console.log('5 MILE');
      setLatitudeDelta(0.07224);
      setLongitudeDelta(0.0);
    }
    if (value === 2) {
      console.log('3 MILE');
      setLatitudeDelta(0.04347);
      setLongitudeDelta(0.0);
    }
    if (value === 1) {
      console.log('1 MILE');
      setLatitudeDelta(0.01449);
      setLongitudeDelta(0.0);
    }
    setU(!u);
  };

  return (
    <>
      <View
        style={[styles.mapContainer, {flex: showLocationSlides ? 0.97 : 0.95}]}>
        <View style={styles.searchInputContainer}>
          <Icon
            tintColor={colors.grey}
            style={styles.searchIcon}
            margin={[0, 1, 0, 15]}
            source={iconPath.SEARCH_ICON}
            height={wp(8)}
            width={wp(6)}
          />
          <GooglePlacesAutocomplete
            ref={ref}
            placeholder="Enter Location"
            minLength={2}
            autoFocus={false}
            returnKeyType="default"
            placeholderTextColor="black"
            fetchDetails
            enablePoweredByContainer={false}
            query={{
              key: 'AIzaSyAG5SzNERLnO1L7KEEjpJUZHIJlINvmrEA',
              language: 'en',
            }}
            currentLocation
            onPress={(data, details = null) => {
              setDetails(details);
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_1',
            ]}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={{
              textInput: {
                height: wp(12),
                color: '#5d5d5d',
              },
            }}
          />

          <TouchableOpacity
            style={{zIndex: 10000}}
            onPress={() => autoCompleteRef?.current.clear()}>
            <Icon
              tintColor={colors.grey}
              style={styles.clearSeach}
              margin={[0, 15]}
              source={iconPath.CROSS_ICON}
              height={wp(5)}
              width={wp(5)}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.liveLocation}>
          <Icon
            tintColor={colors.grey}
            source={iconPath.LIVE_ICON}
            height={wp(7)}
            width={wp(7)}
          />
        </TouchableOpacity>
        {showBackgroundView && !showLocationSlides && (
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: showLocationSlides
                ? 'rgba(255,255,255,0.6)'
                : 'rgba(0,0,0,0.2)',
              position: 'absolute',
              zIndex: 100,
              top: top,
              height: overlayHeight,
              width: overlayWidth,
              borderRadius: overlayRadius,
            }}
          />
        )}
        {showLocationSlides && (
          <View pointerEvents="none" style={styles.markerView}>
            <Image
              pointerEvents="none"
              source={iconPath.GPS_ICON}
              style={styles.fixedMarker}
            />
          </View>
        )}
        <MapView
          onRegionChange={(region) => {
            showLocationSlides
              ? setShowBackgroundView(false)
              : setOverlayHeight(wp(9)),
              setOverlayWidth(wp(9)),
              setOverlayRadius(wp(4.5)),
              setTop('50%');
          }}
          onRegionChangeComplete={(region) => {
            // showLocationSlides
            //   ? setShowBackgroundView(true)
            //   :
            setLocation({
              latitude: region.latitude,
              longitude: region.longitude,
            });
            !showLocationSlides && setOverlayHeight(wp(70)),
              setOverlayWidth(wp(70)),
              setOverlayRadius(wp(35));
            setTop('30%'), setLeft('13%');
          }}
          zoomEnabled={true}
          style={{...StyleSheet.absoluteFillObject}}
          ref={map}
          provider={PROVIDER_GOOGLE}
          followsUserLocation
          region={User_region}
        />
      </View>
      {showLocationSlides && (
        <View
          style={[
            gStyles.row_alSCenter,
            {
              alignItems: 'center',
              marginTop: 10,
            },
          ]}>
          <Icon
            source={iconPath.HOME_ICON}
            size="s4"
            margin={[0, 3, 0, 30]}
            tintColor={'grey'}
          />
          <View style={styles.sliderContainer}>
            {/*/>*/}
            {/*<Slider*/}
            {/*  style={{width: 280, height: 80}}*/}
            {/*  minimumValue={1}*/}
            {/*  maximumValue={10}*/}
            {/*  minimumTrackTintColor={colors.red1}*/}
            {/*  maximumTrackTintColor="#000000"*/}
            {/*  thumbTintColor={colors.red1}*/}
            {/*  step={1}*/}
            {/*  onSlidingComplete={(val) => {*/}
            {/*    setValue(val);*/}
            {/*    zoomFunction();*/}
            {/*  }}*/}
            {/*/>*/}
            <MultiSlider
              values={sliderOneValue}
              min={0}
              max={9}
              step={1}
              snapped={true}
              selectedStyle={{
                backgroundColor: colors.red1,
              }}
              unselectedStyle={{
                backgroundColor: 'silver',
              }}
              sliderLength={wp(70)}
              touchDimensions={{
                height: 40,
                width: 40,
                borderRadius: 20,
                slipDisplacement: 40,
              }}
              trackStyle={{
                height: 3,
              }}
              customMarker={() => {
                return (
                  <View
                    style={{
                      backgroundColor: colors.red1,
                      height: wp(5),
                      width: wp(5),
                      borderRadius: wp(2.5),
                    }}
                  />
                );
              }}
              customLabel={CustomLabel}
              showSteps={true}
              showStepLabels={true}
              // isMarkersSeparated={true}
              enableLabel={true} //not showing enableLabel={true}
              // onValuesChangeStart={sliderOneValuesChangeStart}
              // onValuesChange={sliderOneValuesChange}
              // onValuesChangeFinish={sliderOneValuesChangeFinish}
            />
            <View
              style={{
                position: 'absolute',
                zIndex: 1000,
                top: wp(10),
                left: wp(0.1),
                height: 10,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {[...Array(10)].map((item, index) => {
                return (
                  <View
                    style={{
                      height: 4.5,
                      width: 4.5,
                      backgroundColor: 'grey',
                      borderRadius: 4.5 / 2,
                    }}
                  />
                );
              })}
            </View>
          </View>
          <Icon source={iconPath.RAOD_ICON} size="s4" margin={[0, 35, 0, 3]} />
        </View>
      )}
      <View
        style={{
          height: hp(5),
          marginTop: showLocationSlides ? 10 : wp(8),
          alignItems: 'center',
        }}>
        <RnButton
          fontFamily={'SemiBold'}
          margin={[0, 0, 0, 0]}
          textColor={colors.primary}
          btnStyle={{backgroundColor: colors.red1, allignSelf: 'center'}}
          title="Set Location"
          width={wp(92)}
          borderRadius={20}
          onPress={() => console.warn('hh')}
        />
        {!showLocationSlides && (
          <ResponsiveText
            padding={[10, 0]}
            textAlign
            color={'grey'}
            size={'h7'}>
            Your exact location is never shown to Dealzone users.
          </ResponsiveText>
        )}
      </View>
    </>
  );
};
export default CurrentLocationComp;
const styles = {
  searchInputContainer: {
    backgroundColor: colors.background.white,
    width: '90%',
    alignSelf: 'center',
    top: wp(3),
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1000,
    alignItems: 'center',
    borderRadius: 10,
    height: wp(13),
  },
  mapContainer: {flex: 0.97, overflow: 'hidden', borderRadius: 13},
  googlePlacesInput: {
    textInputContainer: {},
    textInput: {
      height: 38,
      color: '#5d5d5d',
      fontSize: 16,
      alignContent: 'center',
    },
    predefinedPlacesDescription: {
      color: colors.black,
    },
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: wp(1),
  },
  sliderContainer: {
    width: wp(70),
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  liveLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: wp(18),
    right: wp(2),
    zIndex: 100,
    height: wp(14),
    width: wp(14),
    borderRadius: wp(7),
  },
  fixedMarker: {
    height: wp(12),
    width: wp(10),
    tintColor: 'red',
    resizeMode: 'contain',
  },
  markerView: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 100,
    top: hp(40),
  },
};
