import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import RnButton from '../../../../components/RnButton'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA, cuisineSliderData } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import { globalPath } from '../../../../constants/globalPath'
import Icon from '../../../../components/Icon'
import { hp, wp } from '../../../../helpers/Responsiveness'
import Header from '../../../../components/Header'
import { useDispatch } from 'react-redux'
import routeName from '../../../../constants/routeName'
import { getUserCusine } from '../../../../redux/actions/user.actions'
const CuisinesSlider = (props) => {
    const navigation = props.navigation
    const token = async()=> await AsyncStorage.getItem('@token');

  const dispatch=useDispatch();
 const getCusines=()=>{
    dispatch(
      (getUserCusine({
        navigation:navigation,
      }))
    );
  }
    return (

        <Swiper style={{}} showsButtons={false} autoplay={true} autoplayTimeout={3}
            activeDot={<View style={{ backgroundColor: colors.yellow, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: -15, }} />}
            dot={
                <View style={{ backgroundColor: colors.white, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: -15, }} />
            }>

                
            {cuisineSliderData.map((url, index) => {
                return (
                    <ImageBackground style={styles.advertisementBannerImage}
                    //  source={{ uri: url }}
                     source={url}
                     imageStyle={{opacity:0.5}}
                      >
                        <View style={styles.advertisementBannerTitleOverlay}>
                            <TouchableOpacity onPress={getCusines} style={{height:hp(4.2), width:wp(28), 
                            backgroundColor:colors.yellow, borderRadius:5, alignItems:'center', 
                            justifyContent:'center',flexDirection:'row'
                        , alignSelf:'center'}} >
                                <ResponsiveText>Cuisines</ResponsiveText>
                                <Icon size={wp(3)} margin={[0,0,0,10]}  tintColor='black' source={globalPath.RIGHT_ARROW} />

                                </TouchableOpacity>
                        </View>
                    </ImageBackground>
                )
            })}

        </Swiper>

    )
}

export default CuisinesSlider;

const styles = StyleSheet.create({

    advertisementBannerImage: { 
        flex: 1, 
        justifyContent:'center',
        alignItems:'center',
        
    },
    advertisementBannerTitleOverlay: {
        width: "40%",
        marginTop:-5,
        marginRight:-15,
        
        alignSelf:'center',
        // backgroundColor:  'rgba(52, 52, 52, 0.7)',
        opacity: 1,
        paddingVertical: 10
    }

})
