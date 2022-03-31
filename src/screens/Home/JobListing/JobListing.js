import React, { useEffect } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../constants/colorsPallet'
import { hp, wp } from '../../../helpers/Responsiveness'
import ResponsiveText from '../../../components/RnText'
import Icon from '../../../components/Icon'
import { PROMOS_JOBS } from '../../../constants/mock'
import { routeName } from '../../../constants/routeName'
import Header from '../../../components/Header'
import { globalPath } from '../../../constants/globalPath'
import urls from '../../../redux/lib/urls'
import { getApplyJobList, getPromoJobsData } from '../../../redux/actions/user.actions'
import { useSelector, useDispatch } from 'react-redux';


const JobListing = ({ navigation ,route}) => {
    // const JobsList = useSelector(state => state.appReducers.getApplyJobList.data);
    const JobsList = useSelector(state => state.appReducers.promoJobs.data);
    const List_Loading = useSelector(state => state.appReducers.promoJobs.loading);
    console.log("Jobs data: ", JobsList);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getPromoJobsData(1, 100));
        ;
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: colors.black3 }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 7 }}>
                <TouchableOpacity style={{ backgroundColor: colors.yellow1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 0.9, paddingHorizontal: 20 }}>
                    <ResponsiveText size={4} margin={[20, 20, 10, 0]} color={colors.yellow}>Jobs Listing</ResponsiveText>
                    {JobsList.map((item, index) => {

                        return (

                            <TouchableOpacity onPress={() => navigation.navigate(routeName.APPLY_JOBS, {

                                data: item,
                            })}>
                                <View style={{ backgroundColor: colors.black2, height: hp(10), borderRadius: 5, marginTop: 10, flexDirection: 'row' }}>
                                    <View style={{ marginTop: '2%', marginLeft: '2%', }}><Icon source={{ uri: item.fullPath }} borderRadius={5} size={65} /></View>
                                    <View style={{ marginTop: '2%', marginLeft: '2%' }}>
                                        <View >
                                            <ResponsiveText color={colors.white}>{item.jobTitle}</ResponsiveText>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <ResponsiveText size={2.8} color={colors.yellow}>{item.restuarantName}</ResponsiveText>
                                            <ResponsiveText size={2.8} margin={[0, 0, 0, 5]} color={colors.grey}>{item.areaName}</ResponsiveText>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp(60) }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <ResponsiveText size={2.8} color={colors.grey}>Date:</ResponsiveText>
                                                <ResponsiveText size={2.8} color={colors.white}>{item.postedOn}</ResponsiveText>
                                            </View>
                                            <View style={{backgroundColor:colors.yellow,borderRadius:5,bottom:hp(6),left:wp(35)}}>
                                            <Text style={{ fontWeight: '800', color: colors.white,  }}>
                                                    {item.userAppliedStatus === "Applied" ? 'Already Applied' : undefined}
                                                </Text>
                                            </View>
                                           
                                            <View style={{ marginLeft: 5, flexDirection: 'row' }}>
                                               
                                                <ResponsiveText size={2.8} color={colors.grey}>Experience : {item.experience}</ResponsiveText>
                                            </View>

                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>

                        )

                    })}

                </View>
            </ScrollView>

        </View>
    )

}
export default JobListing;
const styles = StyleSheet.create({

    Advertisement2ndVarientImage: { justifyContent: 'center', height: hp(18), },

})