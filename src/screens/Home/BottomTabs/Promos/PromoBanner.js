import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'
import { globalPath } from '../../../../constants/globalPath'
import { promosBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import { hp } from '../../../../helpers/Responsiveness'
const PromosBanner = () => {
    return (

		<View>
            {promosBannerFakeDATA.map((url, index) => {
                return (
                    <View>
                    <ResponsiveText color={colors.white}>Promotions</ResponsiveText>
                    <ImageBackground style={styles.Advertisement2ndVarientImage} 
                    // source={{ uri: url }}
                    source={url}

                     >
                    </ImageBackground>
                    </View>
                )
            })
			}
			</View>

     

    )
}

export default PromosBanner

const styles = StyleSheet.create({

        
        Advertisement2ndVarientImage: { marginTop:20, justifyContent: 'center',height: hp(18),backgroundColor: 'rgba(0,0,0,0.5)' },


})
