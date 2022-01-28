import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../../../constants/colorsPallet'
import Icon from '../../../../components/Icon'
import Header from '../../../../components/Header'
import { globalPath } from '../../../../constants/globalPath'
import ResponsiveText from '../../../../components/RnText'
import { hp, wp } from '../../../../helpers/Responsiveness'


export default function MoreAboutDishes({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: colors.black3 }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 7 }}>
                <TouchableOpacity style={{ backgroundColor: colors.yellow1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
            </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: colors.black2,
                        padding: 5,
                        marginTop: 60,
                        marginLeft:10
                    }}>
                    <ResponsiveText color={colors.white}>
                        {'TOTAL FATS (g)'}
                    </ResponsiveText>
                    {/* <ResponsiveText color={colors.white}>{'Required'}</ResponsiveText> */}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(80),
                    justifyContent: 'space-between',
                    marginTop:20,
                    marginLeft:10

                  }}>
                  <ResponsiveText
                    margin={[0, 0, 0, 10]}
                    size={3}
                    color={colors.grey}>
                    softDrinkName
                  </ResponsiveText>
                  <ResponsiveText color={colors.grey}>
                      $ 25
                    </ResponsiveText>
                </View>
          
        </View>
    )
}
