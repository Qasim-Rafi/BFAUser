import React from 'react'
import { ImageBackground, StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
const image = { uri: "https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024" };

const ImageHeader = () => {
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          {/* <TouchableOpacity><Image source={{uri: ''}}/> </TouchableOpacity> */}
        </ImageBackground>
      </View>

    )
}

export default ImageHeader

const styles = StyleSheet.create({

        container: {
          flex: 1,
        },
        image: {
          flex: 1,
          height:200,
          justifyContent: "center"
        },
        
      });
      
