import React from 'react'
import { ImageBackground, StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
const image = { uri: "https://i.ndtvimg.com/i/2016-06/noodles-625_625x350_41466064269.jpg" };

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
      
