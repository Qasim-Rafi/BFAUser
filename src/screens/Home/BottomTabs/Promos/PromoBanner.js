import React from 'react'
import { ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'
import { globalPath } from '../../../../constants/globalPath'
import {
    promosBannerFakeDATA,
    yourFavoriteFakeDATA
} from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import { hp } from '../../../../helpers/Responsiveness'
const PromosBanner = (props) => {
    const [data, setData] = React.useState(props.data)
    console.log(data, 'sabbbbb')
    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <View style={{ flex: 1, marginTop: 15,marginBottom:'40%'}} >

                <ResponsiveText color={colors.white}>Promotions</ResponsiveText>
                <ScrollView style={{ flexGrow: 1 }}>
                    {yourFavoriteFakeDATA.map((item, index) => {
                        return (
                            <View>
                                <ImageBackground style={styles.Advertisement2ndVarientImage}
                                    // source={{ uri: url }}
                                    source={item.url}

                                >
                                </ImageBackground>
                            </View>
                        )
                    })
                    }
                </ScrollView>
            </View>
        </ScrollView>



    )
}

export default PromosBanner

const styles = StyleSheet.create({


    Advertisement2ndVarientImage: { marginTop: 20, justifyContent: 'center', height: hp(18), backgroundColor: 'rgba(0,0,0,0.5)' },


})
