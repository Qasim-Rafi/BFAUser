import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
const Advertisement2ndVarient = () => {
    return (

        <Swiper style={{}} showsButtons={false}
            activeDot={<View style={{ backgroundColor: colors.yellow, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            dot={
                <View style={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
            }>
            {advertisementBannerFakeDATA.map((url, index) => {
                return (
                    <ImageBackground style={styles.Advertisement2ndVarientImage} source={{ uri: url }} >
                    </ImageBackground>
                )
            })}

        </Swiper>

    )
}

export default Advertisement2ndVarient

const styles = StyleSheet.create({

    Advertisement2ndVarientImage: { flex: 1, justifyContent: 'center' },


})
