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


export default function DropDown(props) {


  return (
    <View style={{
      backgroundColor: colors.black1,
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
        dropdown1RowTxtStyle={{ color: colors.white, textAlign: "left", marginStart: 20, fontSize: 14, }}
        defaultValue={props.defaultValue?props.defaultValue:null}
        // defaultValueByIndex={0}
        rowTextStyle={{ color: colors.white, alignSelf: 'center', fontSize: 14 }}
        rowStyle={{ backgroundColor: colors.black1, borderBottomColor: colors.black1, borderBottomWidth: 0 }}
        buttonStyle={{
          backgroundColor: colors.black1,
          height: props.height ? props.height : hp(6),
          width: props.width ? props.width : wp(81),
          alignSelf: 'center',

          borderRadius: 7,

        }}
        buttonTextStyle={{ color: props.disabled? colors.grey :colors.white, fontSize: 14, textAlign: 'left', }}
        renderDropdownIcon={() => {
          return (
            <Icon source={globalPath.DOWN_ARROW} tintColor={props.disabled? colors.grey :colors.white} size={10} />
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
