import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Map, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {hp, wp} from '../../../helpers/Responsiveness';
import { colors } from '../../../constants/colorsPallet';

export default function MapView() {
  return (
    <View style={{flex: 1}}>
       <View style={styles.header}>
        <Icon source={globalPath.BALI_ICON} />
        
        <ResponsiveText color={colors.white} size={5}>View Map</ResponsiveText>
        </View>
      <View
        style={{
          flex: 0.9,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
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
            backgroundColor: 'black',
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
                borderColor: '#edc54e',
                borderRadius: 15,
              }}
            />
            {/* <Icon source={globalPath.LOCATION} /> */}
            <View
              style={{
                height: '45%',
                width: 0.1,
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: '#edc54e',
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
        </View>
        <Map
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 4.5353,
            longitude: 114.7277,
            latitudeDelta: 0.9,
            longitudeDelta: 0.0121,
          }}></Map>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor:'#303030'

},
});
