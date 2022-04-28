import React from "react";
import { View, StyleSheet } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { hp, wp } from '../../../../helpers/Responsiveness';

export default SkeletonComponent = ({ width }) => {
    return (
        <SkeletonPlaceholder>
            <View style={styles.Header}>
            </View>
            <View
                style={styles.MainView}>
                <View style={styles.InnerStyle} />

                <View style={styles.InnerStyle} />
            </View>
            <View
                style={styles.Box}>
                <View style={styles.InnerStyle} />

                <View style={styles.InnerStyle} />
            </View>
            {/* {/UperView} */}
            <View
                style={styles.View}>
                <View style={styles.InnerStyle} />

                <View style={styles.InnerStyle} />
            </View>
            <View
                style={styles.Box}>
                <View style={styles.InnerStyle} />

                <View style={styles.InnerStyle} />
            </View>
            <View
                style={styles.Box}>
                <View style={styles.InnerStyle} />

                <View style={styles.InnerStyle} />
            </View>
            {/* {TopDishDesign} */}

            <View style={styles.ImageStyle}>
            </View>
            <View style={{ alignItems: 'center', marginTop: '5%', }}>
                <View style={{ width: 150, height: 20, borderRadius: 4 }} />
                <View
                    style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }}
                />
            </View>

        </SkeletonPlaceholder>

    );
};

const styles = StyleSheet.create({

    Box: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginVertical: 5,
        marginTop: 5,
    },
    Header: {
        height: hp(7),
        width: wp(90),
        borderRadius: 4,
        marginTop: 10,
        alignItems: 'center',
        marginHorizontal: 10,
        marginLeft: 20,
    },
    InnerStyle: {

        flexDirection: 'row',
        padding: 25,
        borderRadius: 5,
        width: wp(43),
    },
    MainView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginVertical: 5,
        marginTop: '15%',
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
        paddingVertical:20,
        alignItems: 'center',
        marginHorizontal: 40
    }

})