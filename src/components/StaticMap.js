import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Map, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const StaticMap = (props) => {
  return (
    <View
      style={{borderRadius: 10, overflow: 'hidden'}}>
      <Map
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={[styles.map,{height:props?.height}]}
        scrollEnabled={false}
        //   zoomEnabled={false}
        rotateEnabled={false}
        region={{
          latitude: 4.5353,
          longitude: 114.7277,
          latitudeDelta: 0.9,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{latitude: 4.5353, longitude: 114.7277}} />
      </Map>
    </View>
  );
};

export default StaticMap;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    // height: props.height? props.height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
