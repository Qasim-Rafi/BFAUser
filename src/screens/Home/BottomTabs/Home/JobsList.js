import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import Icon from '../../../../components/Icon'
import { advertisementBannerFakeDATA, ourRecommendationFakeDATA, PROMOS_JOBS } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { routeName  } from '../../../../constants/routeName'
import { globalPath } from '../../../../constants/globalPath'
import { hp, wp } from '../../../../helpers/Responsiveness'
import { useSelector } from 'react-redux'
const JobsList = (props) => {
    const JobsList = useSelector(state=>state.appReducers.promoJobs.data);
    console.log("Jobs data: ", JobsList);
    return (
        <>
            <View style={styles.recommendationHeaderSection}>
                <ResponsiveText margin={[0,0,0,0]} size={4} color={colors.white}>Jobs</ResponsiveText>
                <View style={{ marginRight: -10 }} >
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}
                    onPress={()=>props.navigation.navigate(routeName.JOB_LISTING)}
                    >
                        <ResponsiveText size={3.2} margin={[0, 10, 0, 0]} color={colors.yellow}>Show All</ResponsiveText>
                        <Icon size={wp(1.6), hp(1.6)} margin={[0,10,0,0]} source={globalPath.RIGHT_ARROW} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {JobsList.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.APPLY_JOBS)}>
                            <View  style={{ width: wp(26), height: hp(18), borderRadius: 3, marginHorizontal: 5, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground imageStyle={{opacity:.5}} imageStyle={{opacity:.3}} style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end',backgroundColor: 'rgba(0,0,0,1)' }} source={require('../../../../assets/fake_Images/Jobs-logo1.png')} >
                                    <ResponsiveText fontFamily="Regular" size={3} margin={[0,0,5,0]} color={colors.white}>{url.jobTitle}</ResponsiveText>
                                    
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

export default JobsList;

const styles = StyleSheet.create({

    recommendationHeaderSection: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:15,
        marginRight:15,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 1,
        borderColor: colors.black1
    },
    recommendationItemsSection: {
        flex: 1,
        marginTop:5,
        paddingLeft:15,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
        marginLeft:-5,
    }


})
