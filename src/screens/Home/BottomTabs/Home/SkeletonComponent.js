import React from "react";
import { View, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { colors } from "../../../../constants/colorsPallet";
import { hp, wp } from '../../../../helpers/Responsiveness';

export default SkeletonComponent = ({ width }) => {
    return (
        <SkeletonPlaceholder >
            <View style={styles.Header}>
            </View>

            <View style={styles.Text}>
                <View style={{ width: 150, height: 15, borderRadius: 4 }} />
            </View>
            <View
                style={styles.MainView}>
                <View style={styles.InnerStyle} />
                <View style={styles.InnerStyle} />
                <View style={styles.InnerStyle} />
                <View style={styles.InnerStyle} />
                <View style={styles.InnerStyle} />
                <View style={styles.InnerStyle} />
            </View>
            <View style={styles.Text}>
                <View style={{ width: 150, height: 15, borderRadius: 4 }} />
            </View>
            <View
                style={styles.Box}>
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />

            </View>
            <View style={styles.Text}>
                <View style={{ width: 150, height: 15, borderRadius: 4 }} />
            </View>
            <View
                style={styles.Box}>
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />

            </View>
            <View style={styles.Text}>
                <View style={{ width: 150, height: 15, borderRadius: 4 }} />
            </View>
            <View
                style={styles.Box}>
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />
                <View style={styles.CardStyle} />

            </View>

        </SkeletonPlaceholder>

    );
};

const styles = StyleSheet.create({

    Box: {
        flexDirection: 'row',
        // marginHorizontal: 20,
        // justifyContent: 'space-between',
        // marginVertical: 5,
        marginLeft: '3%',
        marginTop: 5,
    },
    Header: {
        height: hp(20),
        width: wp(90),
        borderRadius: 4,
        marginTop: 10,
        alignItems: 'center',
        marginHorizontal: 10,
        marginLeft: '7%',
    },
    InnerStyle: {

        flexDirection: 'row',
        padding: 25,
        borderRadius: 5,
        marginLeft: '1%',
        flex: 1,
        flexWrap: 'wrap',
        width: wp(15),
    },
    CardStyle: {

        flexDirection: 'row',
        // height:hp(15),
        paddingVertical: '17%',
        borderRadius: 5,
        marginLeft: '1%',
        flex: 1,
        flexWrap: 'wrap',
        width: wp(25),
    },
    MainView: {
        flexDirection: 'row',
        marginLeft: '5%',
        // marginHorizontal: 20,
        // justifyContent: 'space-between',
        marginVertical: 5,
        marginTop: '3%',
    },
    View: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginVertical: 5,
        marginTop: '10%',
    },
    ImageStyle: {
        height: hp(10),
        width: wp(80),
        borderRadius: 4,
        marginTop: 10,
        paddingVertical: 20,
        alignItems: 'center',
        marginHorizontal: 40
    },
    Text: {
        marginLeft: '5%',
        marginTop: '3%',
    },
})