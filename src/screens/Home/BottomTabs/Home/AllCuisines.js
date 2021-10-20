import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, CuisinesData, ourRecommendationFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { routeName } from '../../../../constants/routeName'
import { hp, wp } from '../../../../helpers/Responsiveness'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import Icon from '../../../../components/Icon'
import { globalPath } from '../../../../constants/globalPath'
import { getUserCusine } from '../../../../redux/actions/user.actions'
const AllCuisines = (props) => {
    const token = async()=> await AsyncStorage.getItem('@token');

  const dispatch=useDispatch();
 const getCusines=()=>{
    dispatch(
      (getUserCusine({
        navigation:props.navigation,
      }))
    );
  }
    return (
        <>
            <View style={styles.recommendationHeaderSection}>
                <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={colors.white}>Cuisines</ResponsiveText>
                <View style={{ marginRight: -10 }} >
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}
                    onPress={getCusines}
                    >
                        <ResponsiveText size={3.2} margin={[0, 10, 0, 0]} color={colors.yellow}>Show All</ResponsiveText>
                        <Icon size={wp(1.6), hp(1.6)} margin={[0,10,0,0]} source={globalPath.RIGHT_ARROW} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {CuisinesData.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate(routeName.DISH_DETAIL, { dish: url })}>
                                <View style={{ width: wp(26), height: hp(18), borderRadius: 3, marginHorizontal: 5, overflow: 'hidden', flexDirection: 'row' }}>
                                    <ImageBackground imageStyle={{ opacity: 0.5 }} style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,1)' }} source={url.url} >
                                        <ResponsiveText fontFamily="Regular" size={3} margin={[0, 0, 10, 0]} color={colors.white}>{url.title}</ResponsiveText>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

                        )
                    })}
                </ScrollView>
            </View>

        </>
    )
}

export default AllCuisines;

const styles = StyleSheet.create({

    recommendationHeaderSection: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 1,
        borderColor: colors.black1
    },
    recommendationItemsSection: {
        flex: 1,
        marginTop: 5,
        paddingLeft: 15,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
        marginLeft: -5,
    }


})
