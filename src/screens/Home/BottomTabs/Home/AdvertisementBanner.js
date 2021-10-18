import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import { globalPath } from '../../../../constants/globalPath'
import Icon from '../../../../components/Icon'
import { hp, wp } from '../../../../helpers/Responsiveness'
import Header from '../../../../components/Header'
const AdvertisementBanner = ({navigation}) => {
    return (

        <Swiper style={{}} showsButtons={false} autoplay={true} autoplayTimeout={3}
            activeDot={<View style={{ backgroundColor: colors.yellow, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: -20, }} />}
            dot={
                <View style={{ backgroundColor: colors.white, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: -20, }} />
            }>

                
            {advertisementBannerFakeDATA.map((url, index) => {
                return (
                    <View style={{flex:1}} >

                    <ImageBackground imageStyle={{opacity:0.8}} style={styles.advertisementBannerImage}
                    //  source={{ uri: url }}
                     source={url.url}
                      >
                        <View style={styles.advertisementBannerTitleOverlay}>
                  
                            <ResponsiveText fontFamily={'SemiBold'} size={4.5} color={colors.white}>{url.restaurantName}</ResponsiveText>
                            {
                                url.dishName!==" " ?
                            <ResponsiveText fontFamily={'light'} margin={[-3,0,5,0]} size={3} color={colors.white}>{url.dishName}</ResponsiveText>
                            :
                            undefined
                            }
                            
                            {/* <TouchableOpacity style={{height:hp(3.5), width:wp(28), backgroundColor:colors.yellow,
                            borderRadius:5,justifyContent:'center',alignItems:'center',alignSelf:'center', flexDirection:'row'
                            }} >
                                <ResponsiveText size={3} >Read More</ResponsiveText>
                                <Icon size={wp(3)} margin={[0,0,0,5]}  tintColor='black' source={globalPath.READ_MORE} />

                            </TouchableOpacity> */}
                        </View>
                    </ImageBackground>
                    </View>
                )
            })}

        </Swiper>

    )
}

export default AdvertisementBanner

const styles = StyleSheet.create({

    advertisementBannerImage: { 
        flex: 1, 
        justifyContent:'flex-end',
        alignItems:'center', 
        
    },
    advertisementBannerTitleOverlay: {
        width: "70%",
        justifyContent: 'center',
        alignItems: "center",
        marginBottom:15,
        
        // backgroundColor:  'rgba(52, 52, 52, 0.7)',
        opacity: 1,
        padding: 10
    }

})
