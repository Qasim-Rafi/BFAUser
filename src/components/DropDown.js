//Node Imports
import React from 'react'
import { View, Text } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown';

//Local Imports
import { globalPath } from '../constants/globalPath';
import { colors } from '../constants/colorsPallet';
import { hp } from '../helpers/Responsiveness';
import { wp } from '../helpers/Responsiveness';
import Icon from './Icon';
import ResponsiveText from './RnText';
import { useSelector } from 'react-redux';


export default function DropDown(props) {

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  return (
    <View style={{
      backgroundColor: isThemeDark ? colors.black1 : colors.grey,
      height: props.height ? props.height : hp(6),
      width: props.width ? props.width : wp(85),
      alignSelf: 'center',
      justifyContent: 'center',

      borderRadius: 7,
    }}>


      <SelectDropdown
        disabled={props.disabled? props.disabled : false}
        statusBarTranslucent={true}
        dropdownStyle={{ borderRadius: 7, borderBottomWidth: 0 }}
        dropdown1RowTxtStyle={{ color: isThemeDark ?  colors.white: colors.black, textAlign: "left", marginStart: 20, fontSize: 14, }}
        defaultValue={props.defaultValue?props.defaultValue:null}
        // defaultValueByIndex={0}
        defaultButtonText={props.defaultButtonText?props.defaultButtonText:null}
        rowTextStyle={{ color: isThemeDark ?  colors.white: colors.black, alignSelf: 'center', fontSize: 14 }}
        rowStyle={{ backgroundColor: isThemeDark ? colors.black1 : colors.grey, borderBottomColor: isThemeDark ? colors.black1 : colors.grey, borderBottomWidth: 0 }}
        buttonStyle={{
          backgroundColor: isThemeDark ? colors.black1 : colors.grey,
          height: props.height ? props.height : hp(6),
          width: props.width ? props.width : wp(81),
          alignSelf: 'center',

          borderRadius: 7,

        }}
        buttonTextStyle={{ color: props.disabled? isThemeDark ?  colors.grey: colors.lightBlack :isThemeDark ?  colors.white: colors.black, fontSize: 14, textAlign: 'left', }}
        renderDropdownIcon={() => {
          return (
            <Icon source={globalPath.DOWN_ARROW} tintColor={props.disabled? isThemeDark ?  colors.grey: colors.lightBlack :isThemeDark ?  colors.white: colors.black} size={10} />
          );
        }}
        dropdownIconPosition={"right"}
        data={props.data ? props.data : []}
        onSelect={props.onSelect
          ? props.onSelect:()=>{}
      }
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  )
}
