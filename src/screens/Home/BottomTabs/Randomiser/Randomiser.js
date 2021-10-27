//Node Imports
import React, { useState } from 'react';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';


//Local Imports
import { colors } from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import Icon from '../../../../components/Icon';
import { globalPath } from '../../../../constants/globalPath';
import CheckBox from '../../../../components/Static/CheckBox';

import CustomRadioButton from '../../../../components/RadioButton';
import RnButton from '../../../../components/RnButton';
import Header from '../../../../components/Header';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { routeName } from '../../../../constants/routeName';

const Randomiser = ({ navigation }) => {
  const [value, setValue] = useState('1');
  const [radioButton1, setRadioButton1] = useState(true);
  const [radioButton2, setRadioButton2] = useState(false);
  const [radioButton3, setRadioButton3] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black3,
      }}>
      <View
        style={{
          flex: 0.1,
          backgroundColor: colors.black2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Header navigation={navigation} />
      </View>
     <View style={{flex:0.9}} >
     <View style={{ marginTop: 40 }} >

<View style={{ backgroundColor: colors.black3, }}>
    <ResponsiveText color={colors.white} size={3.7} margin={[20, 0, 10, 20]}>
        Randomiser setting
    </ResponsiveText>
</View>
<View style={{ marginStart: 10, }}>
    <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
        <CheckBox />
        <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Dishes
        </ResponsiveText>
    </View>
    <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
        <CheckBox />
        <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Restaurants
        </ResponsiveText>
    </View>
    <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
        <CheckBox />
        <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Distance
        </ResponsiveText>
    </View>
    <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
        <CheckBox />
        <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Area
        </ResponsiveText>
    </View>
    <View style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row', marginStart: 10, marginEnd: 20, marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.black2, }}>
        <CheckBox />
        <ResponsiveText margin={[0, 0, 0, 10]} color={colors.grey1}>
            Premise
        </ResponsiveText>
    </View>
</View>
<View style={{ backgroundColor: colors.black3 }}>
    <View>
        <ResponsiveText
            color={colors.white}
            margin={[20, 0, 0, 20]}
            size={3.7}>
            Choose how many results
        </ResponsiveText>

        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
            <RadioGroup color={colors.yellow} style={{ flex: 1, flexDirection: 'row' }}
            // onSelect = {(index, value) => this.onSelect(index, value)}
            >
                <RadioButton value={'item1'} style={{ marginStart: 10 }}>
                    <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>1</ResponsiveText>
                </RadioButton>

                <RadioButton value={'item2'} style={{ marginStart: 10 }}>
                    <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>2</ResponsiveText>
                </RadioButton>

                <RadioButton value={'item3'} style={{ marginStart: 10 }}>
                    <ResponsiveText color={colors.grey1} margin={[0, 10, 0, 10]}>3</ResponsiveText>
                </RadioButton>
            </RadioGroup>

        </View>
    </View>
</View>
</View>

     </View>

    </View>
  );
};


export default Randomiser;





