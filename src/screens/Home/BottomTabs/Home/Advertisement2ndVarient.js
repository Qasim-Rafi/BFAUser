import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'
import { globalPath } from '../../../../constants/globalPath'
import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import { hp } from '../../../../helpers/Responsiveness'
const Advertisement2ndVarient = (data) => {
    console.log(data,'dataa');
    return (

        <Swiper style={{}} showsButtons={false} autoplay={true} autoplayTimeout={3}
            activeDot={<View style={{ backgroundColor: colors.yellow, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            dot={
                <View style={{ backgroundColor: colors.white, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
            }>
            {advertisementBannerFakeDATA.map((url, index) => {
                return (
                    <ImageBackground style={styles.Advertisement2ndVarientImage} 
                    //  source={url}
                    source={globalPath.HOME_ADD_BANNER_2}

                     >
                    </ImageBackground>
                )
            })}

        </Swiper>

    )
}

export default Advertisement2ndVarient

const styles = StyleSheet.create({

        
        Advertisement2ndVarientImage: {  justifyContent: 'center',height: hp(23),backgroundColor: 'rgba(0,0,0,0.5)' },


})
