import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';
import { hp, wp } from '../../helpers/Responsiveness';
import { globalPath } from '../../constants/globalPath';
import { color } from 'react-native-reanimated';
import { colors } from '../../constants/colorsPallet';
import Icon from '../Icon';

export default function SearchDropDown(props) {
    const { data } = props
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}>

            <View style={styles.subContainer}>
                {
                    data.length ?

                        data.map((item, index) => {
                            if (index < 10) {
                                return (
                                    <View style={styles.itemView}>
                                        <TouchableOpacity onPress={() => props.onSearch(item.suggestedName)}>

                                            <View style={styles.itemView}>
                                                <Text style={styles.itemText}>{item.suggestedName}</Text>
                                                <View style={{ alignItems: 'flex-end' }}>

                                                    <Icon size={15} margin={[-10, 10, 0, 0]} source={require('../../assets/icons/uparrow.png')} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                )
                            }
                            else {
                                // <View
                                //     style={styles.noResultView}>
                                //     <Icon
                                //         borderColor={colors.yellow}
                                //         borderWidth={0}
                                //         borderRadius={0}
                                //         margin={[hp(1), 0, 0, 0]}
                                //         size={150}
                                //         source={globalPath.NORECORD_ICON}
                                //     />
                                // </View>
                            }
                        })
                        :
                        <View
                            style={styles.noResultView}>
                            <Text style={styles.noResultText}>No search items matched</Text>
                        </View>
                }
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        top: '20%',
        left: -5, right: -5, bottom: 0,

    },
    subContainer: {
        backgroundColor: colors.black3,
        paddingTop: 10,
        marginHorizontal: 20,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        /// flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    itemView: {
        // marginHorizontal: '10%',
        backgroundColor: colors.black1,
        height: wp(10),
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        // alignContent:"center",
        // alignItems:'center',
        // textAlign:'center',
        // alignSelf:'center',
        // borderRadius: 4,
    },
    itemText: {
        color: colors.white,
        paddingHorizontal: 10,
    },
    noResultView: {
        alignSelf: 'center',
        backgroundColor: colors.black1,
        // margin: 20,
        height: hp(90),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
    },

});