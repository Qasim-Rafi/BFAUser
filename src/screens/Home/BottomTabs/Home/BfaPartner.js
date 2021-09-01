import React from 'react'
import { Image, StyleSheet, View ,ScrollView} from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, BFAPartnerFakeData } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { globalPath } from '../../../../constants/globalPath'
import { wp } from '../../../../helpers/Responsiveness'
const BfaPartner = (props) => {
    return (
        <>
            <View style={styles.bfaPartnerHeaderSection}>
                <ResponsiveText size={4} color={colors.white}>BFA Partners</ResponsiveText>
                <SeeAllButton navigation={props.navigation} src={globalPath.RIGHT_ARROW}/>
            </View>
            <View style={styles.bfaPartnerItemsSection}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {BFAPartnerFakeData.map((url, index) => {
                    return (
                        <Image style={{ width: wp(22), height: wp(22), marginHorizontal: 5, borderRadius: 5, overflow: 'hidden' }} source={{ uri: url }} />

                    )
                })}
                 </ScrollView>
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
