import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

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

const AboutMe = (props) => {
  const navigation = useNavigation();
  const [bio, setBio] = useState('');
  return (
    <Container>
      <Header
        title={'About Me'}
        color={'grey'}
        leftIcon={iconPath.Back_BUTTON}
        onFirstPress={() => navigation.goBack()}
      />
      <View style={styles.Container}>
        <ResponsiveText
          fontFamily="SemiMuBold"
          color={colors.grey}
          size="h5"
          margin={[wp(2.5), 0, 0, 0]}>
          Add a bio that describes who you are . share that what you're
          intrested in or a fun fact about yourself.
        </ResponsiveText>
        <Input
          margin={[0, 0, 20, 0]}
          // placeholder={`Add a bio that describes who you are . share that what you're
          // intrested in or a fun fact about yourself `}
          // placeholderTextColor={colors.black}
          // value={email}
          fontFamily={'SemiBold'}
          containerStyle={styles.textInput}
          onChnageText={(txt) => {
            if (bio.length < 151) setBio(txt);
          }}
        />
        <View style={gStyles.row_jBetween}>
          <ResponsiveText></ResponsiveText>
          <ResponsiveText
            fontFamily="SemiMuBold"
            color={colors.grey}
            size="h5"
            margin={[wp(2.5), 0]}>
            {bio.length}/150
          </ResponsiveText>
        </View>
        <RnButton
          onPress={() => navigation.goBack()}
          margin={[wp(5), 0]}
          padding={[15, 0]}
          fontFamily="Bold"
          backgroundColor={colors.red1}
          title="Save"
          textColor={colors.primary}
        />
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
  textInput: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    backgroundColor: 'white',
    borderRadius: wp(0),
  },
});

export default AboutMe;
