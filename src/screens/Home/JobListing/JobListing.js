import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../constants/colorsPallet'
import { hp,wp } from '../../../helpers/Responsiveness'
import ResponsiveText from '../../../components/RnText'
import Icon from '../../../components/Icon'
import { PROMOS_JOBS } from '../../../constants/mock'
import { routeName } from '../../../constants/routeName'
import Header from '../../../components/Header'
import { globalPath } from '../../../constants/globalPath'


const JobListing = ({navigation}) => {

    return (
        <View style={{flex:1, backgroundColor:colors.black3}}>
            <View style={{flex:0.1, justifyContent:'center', backgroundColor:colors.black2}}>
                <Header iconPath={globalPath.BACK_ARROW} navigation={navigation} />
            </View>
            <View style={{flex:0.9, paddingHorizontal:20}}>
            <ResponsiveText size={4} margin={[20,20,10,0]} color={colors.yellow}>Jobs Listing</ResponsiveText>
            {PROMOS_JOBS.map((item, index) => {
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate(routeName.APPLY_JOBS)}>
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
        </View>
    )

}
export default JobListing;
const styles = StyleSheet.create({

    Advertisement2ndVarientImage: { justifyContent: 'center', height: hp(18), },

})