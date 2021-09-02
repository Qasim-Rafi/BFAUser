import React from 'react'
import { ImageBackground, StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import Icon from '../../../../components/Icon'
import { globalPath } from '../../../../constants/globalPath'
const image = { uri: "https://i.ndtvimg.com/i/2016-06/noodles-625_625x350_41466064269.jpg" };

const ImageHeader = (props) => {
    return (
        <View style={styles.container}>
        <ImageBackground  imageStyle={{opacity:0.8}} source={image} resizeMode="cover" style={styles.image}>
          <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{margin:20}}>
            <Icon source={globalPath.BACK_ARROW}/>
             </TouchableOpacity>
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
        },
        
      });
      
