//Node Imports
import React from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

//Local Imports
import {globalPath} from '../constants/globalPath';
import {colors} from '../constants/colorsPallet';
import {hp} from '../helpers/Responsiveness';
import {wp} from '../helpers/Responsiveness';
import Icon from './Icon';
import ResponsiveText from './RnText';
import { useSelector } from 'react-redux';

export default function DropDown(props) {
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  return (
    <View
      style={{
        backgroundColor: isThemeDark ? colors.black1 : colors.grey,
        height: props.height ? props.height : hp(6),
        width: props.width ? props.width : wp(85),
        alignSelf: 'center',
        justifyContent: 'center',

        borderRadius: 7,
      }}>
      <SelectDropdown
        statusBarTranslucent={true}
        defaultValue={props.defaultValue}
        dropdownStyle={{borderRadius: 7, borderBottomWidth: 0}}
        dropdown1RowTxtStyle={{
          color: colors.white,
          textAlign: 'left',
          marginStart: 20,
          fontSize: 14,
        }}
        //   defaultValueByIndex={props.defaultValueByIndex !== 'Gender' ? props.defaultValueByIndex : null}
         defaultValueByIndex={props.defaultValueByIndex}
        //defaultValue={props.defaultValue?props.defaultValue:null}
        defaultButtonText={props.defaultButtonText}
        rowTextStyle={{color: colors.white, alignSelf: 'center', fontSize: 14}}
        rowStyle={{
          backgroundColor: isThemeDark ? colors.black1 : colors.grey,
          borderBottomColor: isThemeDark ? colors.black1 : colors.grey,
          borderBottomWidth: 0,
        }}
        buttonStyle={{
          backgroundColor: isThemeDark ? colors.black1 : colors.grey,
          height: props.height ? props.height : hp(6),
          width: props.width ? props.width : wp(81),
          alignSelf: 'center',

          borderRadius: 7,
        }}
        buttonTextStyle={{
          color: colors.white,
          fontSize: 14,
          textAlign: 'left',
          marginTop: 7,
        }}
        renderDropdownIcon={() => {
          return (
            <Icon
              source={globalPath.DOWN_ARROW}
              tintColor={isThemeDark ? colors.white : colors.black}
              size={10}
            />
          );
        }}
        dropdownIconPosition={'right'}
        data={props.data ? props.data : undefined}
        onSelect={props.onSelect}
        buttonTextAfterSelection={(selectedItem, index) => {
          console.log('selectedddd:', selectedItem.lable);
          return (
            <View style={{flexDirection: 'row'}}>
              <Icon
                source={selectedItem.icon}
                margin={[0, 0, 0, 10]}
                size={20}
              />
              <Text style={{color: isThemeDark ? colors.grey : colors.black1, marginLeft: 10, top: -3}}>
                {selectedItem.lable}
              </Text>
            </View>
          );
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        renderCustomizedRowChild={(item, index) => {
          return (
            <View style={{flexDirection: 'row'}}>
              <Icon source={item.icon} margin={[0, 0, 0, 15]} size={20} />
              <Text style={{color: isThemeDark ? colors.white : colors.black, marginLeft: 10}}>
                {item.lable}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
