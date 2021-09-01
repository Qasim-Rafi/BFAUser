import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, BFAPartnerFakeData } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { globalPath } from '../../../../constants/globalPath'
const BfaPartner = () => {
    return (
        <>
            <View style={styles.bfaPartnerHeaderSection}>
                <ResponsiveText color={colors.white}>BFA Partners</ResponsiveText>
                <SeeAllButton  src={globalPath.RIGHT_ARROW}/>
            </View>
            <View style={styles.bfaPartnerItemsSection}>
                {BFAPartnerFakeData.map((url, index) => {
                    return (
                        <Image style={{ width: 55, height: 55, marginHorizontal: 5, borderRadius: 5, overflow: 'hidden' }} source={{ uri: url }} />

                    )
                })}
            </View>
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
        backgroundColor: '#404040',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    bfaPartnerItemsSection: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    }


})
