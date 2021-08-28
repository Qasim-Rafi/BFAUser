import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
const AdvertisementBanner = () => {
    return (

        <Swiper style={{}} showsButtons={false}
            activeDot={<View style={{ backgroundColor: colors.yellow, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            dot={
                <View style={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
            }>
            {advertisementBannerFakeDATA.map((url, index) => {
                return (
                    <ImageBackground style={styles.advertisementBannerImage} source={{ uri: url }} >
                        <View style={styles.advertisementBannerTitleOverlay}>
                            <ResponsiveText fontFamily={'SemiBold'} size={3.2} color={colors.white}>Pandok Sari Wangi</ResponsiveText>
                            <ResponsiveText fontFamily={'Light'} size={3} color={colors.white}>Seafood Restaurant</ResponsiveText>
                            <RnButton>
                                <ResponsiveText>Order Now</ResponsiveText>
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

    advertisementBannerImage: { flex: 1, justifyContent: 'center' },
    advertisementBannerTitleOverlay: {
        width: "40%",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor:  'rgba(52, 52, 52, 0.7)',
        opacity: 1,
        padding: 10
    }

})
