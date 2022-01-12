import React from 'react'
import { ImageBackground, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import Icon from '../../../../components/Icon'
import { globalPath } from '../../../../constants/globalPath'

import IMG from '../../../../assets/fake_Images/salmon_asparagus.jpg'

// const image = { uri: "." };

const ImageHeader = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{ opacity: 0.8, }} source={props.img ? { uri: props.img } : IMG} resizeMode="cover" style={styles.image}>
        <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ margin: 20 }}>
          <Icon source={globalPath.BACK_ARROW} />
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
    height: 200,
  },

});

