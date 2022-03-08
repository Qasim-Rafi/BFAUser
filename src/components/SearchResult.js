import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Text } from 'react-native';

import RText from './Basics/RText';
import { hp, wp } from '../helpers/Responsiveness';
import Fonts from '../helpers/Fonts';
import { iconPath } from '../constants/icon';
import Icon from './Icon';
import Input from './Input';
import { globalPath } from '../constants/globalPath';
import ResponsiveText from './RnText';
import { routeName } from '../constants/routeName';
import { colors } from '../constants/colorsPallet';
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../redux/actions/user.actions';
import { FiltersDummyData } from '../constants/mock';

const SeachResult = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.9 }} >
                <FlatList
                    data={FiltersDummyData}
                    renderItem={({ item, index }) => (
                        <>
                            <View style={{ margin: 20 }}>
                                <ResponsiveText size={4} color={colors.white}>{item.title}</ResponsiveText>
                                <View style={{ borderBottomWidth: 0.5, borderBottomColor: colors.grey1 }}></View>

                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    // justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    alignContent: 'center',
                                    marginHorizontal: 10

                                }}>
                                {item.data.map((item, index) => {
                                    return (
                                        <View
                                            style={{
                                                borderRadius: 7,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: colors.black3,
                                                marginHorizontal: 10,
                                                padding: 10,
                                                marginTop: 10,
                                                borderColor: colors.grey1,
                                                borderWidth: 0.5
                                            }}>
                                            <ResponsiveText color={colors.white} fontFamily={'regular'}>
                                                {item.name}<ResponsiveText color={colors.yellow}>({item.value})
                                                </ResponsiveText>
                                            </ResponsiveText>
                                        </View>
                                    );
                                })}
                            </View>


                        </>)}
                    keyExtractor={item => item.id} />
                {/* <View style={{ height: 50, backgroundColor: colors.black2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <ResponsiveText margin={[0, 20, 0, 20]} color={colors.yellow}>2523 Properties</ResponsiveText>
                    <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: colors.yellow, borderRadius: 3, padding: 6, marginRight: 20 }}>
                        <ResponsiveText size={3.3}>Show Result</ResponsiveText>
                    </TouchableOpacity>

                </View> */}
            </View>


        </View>
    );
};



export default SeachResult;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black3,
        alignItems: 'center',
    },
});
