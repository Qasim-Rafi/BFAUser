import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../constants/colorsPallet'
import { globalPath } from '../constants/globalPath'
import Icon from './Icon'
import ResponsiveText from './RnText'
import { routeName } from '../constants/routeName'

const SeeAllButton = (props) => {
    return (
        <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.SearchAll)} style={styles.button}  >
    <ResponsiveText size={2.9} margin={[0, 10, 0, 0]} color={colors.yellow}>Show All</ResponsiveText>
            <Icon source={props.src?props.src:globalPath.DOWN_ARROW} />
        </TouchableOpacity>
    )
}

export default SeeAllButton

const styles = StyleSheet.create({
    button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }
})
