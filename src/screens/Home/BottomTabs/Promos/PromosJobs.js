import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../../../../components/Header'
import Advertisement2ndVarient from '../Home/Advertisement2ndVarient'
import PromosBanner from './PromoBanner'
import RnButton from '../../../../components/RnButton'
import { colors } from '../../../../constants/colorsPallet'
import { hp, wp } from '../../../../helpers/Responsiveness'
import ResponsiveText from '../../../../components/RnText'
import { myPromosListingTabs } from '../../../../constants/mock'
import Icon from '../../../../components/Icon'
import { globalPath } from '../../../../constants/globalPath'
import { PROMOSJOBS } from '../../../../constants/mock'
import { routeName } from '../../../../constants/routeName'



const PromosJob = (props) => {

    return (
        <View style={{marginTop:30}} >
            <ResponsiveText color={colors.white}>Jobs</ResponsiveText>
            {PROMOSJOBS.map((item, index) => {
                return (
                    <TouchableOpacity onPress={()=>props.navigation.navigate(routeName.APPLY_JOBS)}>
                    <View style={{ backgroundColor: colors.black2, height: hp(10), borderRadius: 5, marginTop: 10, flexDirection: 'row' }}>
                        <View style={{marginTop:'2%',marginLeft:'2%',}}><Icon source={item.Logo} borderRadius={5} size={65} /></View>
                        <View style={{marginTop:'2%',marginLeft:'2%'}}>
                            <View >
                                <ResponsiveText color={colors.white}>{item.JobTitle}</ResponsiveText>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <ResponsiveText size={2.8} color={colors.yellow}>{item.ResturantName}-</ResponsiveText>
                                <ResponsiveText size={2.8} color={colors.grey}>{item.Location}</ResponsiveText>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:wp(60) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <ResponsiveText size={2.8} color={colors.grey}>Date:</ResponsiveText>
                                    <ResponsiveText size={2.8} color={colors.white}>{item.Date}</ResponsiveText>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <ResponsiveText size={2.8} color={colors.grey}>Experience:</ResponsiveText>
                                    <ResponsiveText size={2.8} color={colors.white}>{item.Experience}</ResponsiveText>
                                </View>
                                
                            </View>
                        </View>

                    </View>
                    </TouchableOpacity>
            )
            })}
        </View>
    )

}
export default PromosJob
const styles = StyleSheet.create({

    Advertisement2ndVarientImage: { justifyContent: 'center', height: hp(18), },

})