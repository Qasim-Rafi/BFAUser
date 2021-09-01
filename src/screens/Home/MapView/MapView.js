import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import Map, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default function MapView() {
    return (
        <View style={{ flex: 1 }}>

<View style={[styles.header, {backgroundColor:'#2F2F2F'}]}>
    
    <View>
   <Icon source={globalPath.BACK_ARROW} />
   </View>
   <Text style={{ color: "#ffffff", width: wp(75), textAlign: 'center' }}>
     View map
   </Text>
  
   

 </View>
            <View style={{ flex: 0.9,backgroundColor:'white' }}>
            <Map
    //    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </Map>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
   
    map: {
      ...StyleSheet.absoluteFillObject,
flex:1
    },

    header: {
      color: '#EDC54E',
      flex: 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
  
    },

   });