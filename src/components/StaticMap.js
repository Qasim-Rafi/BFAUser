import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Map, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const StaticMap = (props) => {
  const [data,setData]=React.useState(props.data)
console.log(data,'hh')
  return (
    <View
      style={{borderRadius: 10, overflow: 'hidden'}}>
      <Map
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={[styles.map,{height:props.height? props.height:200}]}
        scrollEnabled={false}
        //   zoomEnabled={false}
        rotateEnabled={false}
        region={{
          latitude:data.latitude!==null?parseFloat(data.latitude):37.78825 ,
          longitude:data.longitude!==null?parseFloat(data.longitude):-122.4324,
          latitudeDelta: 0.9,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{latitude:data.latitude!==null?parseFloat(data.latitude):37.78825, longitude:data.longitude!==null?parseFloat(data.longitude):-122.4324}} />
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
