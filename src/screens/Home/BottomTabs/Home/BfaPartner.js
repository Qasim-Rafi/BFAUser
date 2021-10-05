import React from 'react'
import { Image, StyleSheet, View ,ScrollView, TouchableOpacity} from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, BFAPartnerFakeData } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { globalPath } from '../../../../constants/globalPath'
import { wp } from '../../../../helpers/Responsiveness'
import urls from '../../../../redux/lib/urls'
import AsyncStorage from '@react-native-community/async-storage'
const BfaPartner = ({props}) => {
    

    

    return (
        <>
            <View style={styles.bfaPartnerHeaderSection}>
                <ResponsiveText margin={5} size={4} color={colors.white}>BFA Partners</ResponsiveText>
                <SeeAllButton src={globalPath.DOWN_ARROW}/>
            </View>
            <TouchableOpacity >
            <View style={styles.bfaPartnerItemsSection}>
                {BFAPartnerFakeData.map((url, index) => {
                    return (
                        <Image style={{ width: wp(13), height: wp(13), marginHorizontal: 5, borderRadius: 5, overflow: 'hidden' }} source={url} />

                    )
                })}
            </View>
            </TouchableOpacity>
        </>
    )
}

export default BfaPartner

const styles = StyleSheet.create({

    bfaPartnerHeaderSection: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.black1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    bfaPartnerItemsSection: {
        
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        backgroundColor:colors.black2,
        overflow: 'hidden',
    }


})
