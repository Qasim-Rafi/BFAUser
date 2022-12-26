//Native map implementation is yet to be done after getting the google map API
// get API's for both android and ios

import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Map, {PROVIDER_GOOGLE,Marker,Polyline} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';

import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {hp, wp} from '../../../helpers/Responsiveness';
import {colors} from '../../../constants/colorsPallet';
import { useSelector } from 'react-redux';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
// const GOOGLE_MAPS_APIKEY = 'AIzaSyBPlHPQFOoDXh4K60fqBVg7kPHC7Fcmy5I';
const GOOGLE_MAPS_APIKEY ='AIzaSyCVqqBceVIdw8mFtICTxUYQ4kWqvk2Wi_c';
export default function MapView(props) {
const data=props.route.params?.data
  // latitude: 4.5353,
  // longitude: 114.7277,
  const [coordinates,setCoordinates] = useState([
    {
      latitude:data.latitude!==null?parseFloat(data.latitude):37.78825 ,
          longitude:data.longitude!==null?parseFloat(data.longitude):-122.4324,
    },
    {
      latitude: 4.2254,
      longitude: 114.6675,
    },
  ]);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  return (
    <View style={{flex: 1}}>
      <View style={[styles.header,{backgroundColor: isThemeDark ?  colors.black2: colors.white}]}>
        <TouchableOpacity style={styles.backArrow} onPress={()=>props.navigation.goBack()}>
        <Icon  source={globalPath.BACK_ARROW} />
        </TouchableOpacity>
        <ResponsiveText color={isThemeDark ?  colors.white: colors.black} size={5}>
          View Map
        </ResponsiveText>
        <ResponsiveText color={isThemeDark ?  colors.white: colors.black} size={5}>
        </ResponsiveText>
      </View>
      <View
        style={{
          flex: 0.9,
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <View
          style={{
            padding: 10,
            position: 'absolute',
            flexDirection: 'row',
            height: wp(25),
            borderRadius: 10,
            top: hp(5),
            width: '80%',
            flex: 1,
            // justifyContent: 'space-between',
            // alignItems: 'center',
            backgroundColor: colors.black,
            // top: -100,
            zIndex: 100,
          }}>
          <View
            style={{
              // flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '20%',
            }}>
            <View
              style={{
                width: 15,
                height: 15,
                borderWidth: 2,
                borderColor: colors.yellow,
                borderRadius: 15,
              }}
            />
            <View
              style={{
                height: '45%',
                width: 0.1,
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: colors.yellow,
                borderRadius: 1,
              }}></View>
            <Icon source={globalPath.LOCATION1} />
          </View>
          <View
            style={{
              flex: 1,
              width: '80%',
              justifyContent: 'space-between',
            }}>
            <ResponsiveText size={3} fontFamily="Light" color="white">
              Your Location
            </ResponsiveText>
            <ResponsiveText size={3} fontFamily="Light" color="white">
              Affinna Restaurant,JIn Tungku, Brunei
            </ResponsiveText>
          </View>
          <View></View>
        </View> */}
        <Map
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude:data.latitude!==null?parseFloat(data.latitude):37.78825 ,
          longitude:data.longitude!==null?parseFloat(data.longitude):-122.4324,
            latitudeDelta: 0.9,
            longitudeDelta: 0.0121,
          }}>
          {/* <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          /> */}
          {/* <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={GOOGLE_MAPS_APIKEY} // insert your API Key here
            strokeWidth={4}
            strokeColor="blue"
          /> */}
          <Marker coordinate={coordinates[0]} />
          {/* <Marker coordinate={coordinates[1]} /> */}
          {/* <Polyline
          coordinates={coordinates}
          strokeColor=colors.black // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[colors.darkRed]}
          strokeWidth={6}
        /> */}
        </Map>
      </View>
      {/* <TouchableOpacity>
        <View style={{
          position: 'absolute',
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          right: 30,
          bottom: 30,
        }} >

        </View>
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  header: {
    flex: 0.09,
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.black2,
  },
  backArrow:{
    backgroundColor:colors.yellow,
    padding:wp(3),
    borderRadius:75
  }
});
