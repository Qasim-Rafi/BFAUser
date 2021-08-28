import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Container from '../Basics/Container';
import ResponsiveText from '../RnText';
import Header from '../Header';
import {iconPath} from '../../constants/icon';
import {wp} from '../../helpers/Responsiveness';
import {colors} from '../../constants/colorsPallet';
import {useNavigation} from '@react-navigation/native';
import Input from '../Input';
import RnButton from '../RnButton';
import {gStyles} from '../../styles/global';

const EditUserEmail = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(props.route.params.email);
  return (
    <Container>
      <Header
        title={'Change Email'}
        color={'grey'}
        leftIcon={iconPath.Back_BUTTON}
        onFirstPress={() => navigation.goBack()}
      />
      <View style={styles.Container}>
        <ResponsiveText
          fontFamily="SemiMuBold"
          color={colors.red}
          size="h5"
          margin={[wp(2.5), 0]}>
          Current email: {'\t'}
          <ResponsiveText fontFamily="SemiMuBold" color={colors.grey} size="h5">
            {props.route.params.email}
          </ResponsiveText>
        </ResponsiveText>
        <Input
          margin={[20, 0, 0, 0]}
          placeholder={'New email (email@domain.co'}
          // placeholderTextColor={colors.black}
          // value={email}
          fontFamily={'SemiBold'}
          containerStyle={styles.textInput}
          onChnageText={(txt) => setEmail(txt)}
        />

        <RnButton
          onPress={() => navigation.goBack()}
          margin={[wp(20), 0]}
          fontFamily="Bold"
          backgroundColor={colors.red}
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

export default EditUserEmail;
