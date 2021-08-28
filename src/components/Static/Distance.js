import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Container from '../Basics/Container';
import Header from '../Header';
import {iconPath} from '../../constants/icon';
import {wp} from '../../helpers/Responsiveness';
import {colors} from '../../constants/colorsPallet';
import {useNavigation} from '@react-navigation/native';
import Input from '../Input';
import RnButton from '../RnButton';
import ResponsiveText from '../RnText';
import {gStyles} from '../../styles/global';

const Distance = (props) => {
  const navigation = useNavigation();
  const [scale, setScale] = useState('MILE');
  return (
    <Container>
      <Header
        title={'Distance'}
        color={'grey'}
        leftIcon={iconPath.Back_BUTTON}
        onFirstPress={() => navigation.goBack()}
      />
      <View style={styles.Container}>
        <View style={styles.item}>
          <ResponsiveText
            fontFamily="SemiMuBold"
            color={colors.grey}
            size="h5"
            margin={[wp(2.5), 0]}>
            Miles
          </ResponsiveText>
          <TouchableOpacity
            onPress={() => setScale('MILE')}
            style={styles.radioBtn}>
            <View
              style={[
                styles.radioDot,
                {
                  backgroundColor:
                    scale === 'MILE' ? colors.red : colors.primary,
                },
              ]}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <ResponsiveText
            fontFamily="SemiMuBold"
            color={colors.grey}
            size="h5"
            margin={[wp(2.5), 0]}>
            Kilometers
          </ResponsiveText>
          <TouchableOpacity
            onPress={() => setScale('KILO')}
            style={styles.radioBtn}>
            <View
              style={[
                styles.radioDot,
                {
                  backgroundColor:
                    scale === 'KILO' ? colors.red : colors.primary,
                },
              ]}></View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingTop: wp(3),
    paddingBottom: wp(5),
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: wp(3),
  },
  radioBtn: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.red1,
  },
  radioDot: {width: 10, height: 10, borderRadius: 20},
});

export default Distance;
