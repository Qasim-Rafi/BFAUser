import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import { globalPath } from '../../../../constants/globalPath'
import Icon from '../../../../components/Icon'
import { wp } from '../../../../helpers/Responsiveness'
import Header from '../../../../components/Header'
const AdvertisementBanner = ({navigation}) => {
    return (

        <Swiper style={{}} showsButtons={false} autoplay={true} autoplayTimeout={3}
            activeDot={<View style={{ backgroundColor: colors.yellow, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            dot={
                <View style={{ backgroundColor: colors.white, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
            }>

                
            {advertisementBannerFakeDATA.map((url, index) => {
                return (
                    <ImageBackground style={styles.advertisementBannerImage}
                    //  source={{ uri: url }}
                     source={globalPath.HOME_ADD_BANNER_1}
                      >
                        <View style={styles.advertisementBannerTitleOverlay}>
                            <ResponsiveText fontFamily={'SemiBold'} size={3.2} color={colors.white}>Pandok Sari Wangi</ResponsiveText>
                            <ResponsiveText fontFamily={'Light'} size={3} color={colors.white}>Seafood Restaurant</ResponsiveText>
                            <RnButton >
                                <ResponsiveText>Order Now</ResponsiveText>
                                <Icon size={wp(3)} margin={[0,0,0,5]}  tintColor='black' source={globalPath.RIGHT_ARROW} />

                            </RnButton>
                        </View>
                    </ImageBackground>
                )
            })}

        </Swiper>

    )
}

export default AdvertisementBanner

const styles = StyleSheet.create({

    advertisementBannerImage: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center', 
    },
    advertisementBannerTitleOverlay: {
        width: "40%",
        justifyContent: 'center',
        alignItems: "center",
        // backgroundColor:  'rgba(52, 52, 52, 0.7)',
        opacity: 1,
        padding: 10
    }

})
