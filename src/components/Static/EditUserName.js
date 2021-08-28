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

const EditUserName = (props) => {
  const navigation = useNavigation();
  const [name, setName] = useState(props.route.params.name);
  return (
    <Container>
      <Header
        title={'Name'}
        color={'grey'}
        leftIcon={iconPath.Back_BUTTON}
        onFirstPress={() => navigation.goBack()}
      />
      <View style={styles.Container}>
        <Input
          margin={[20, 0, 0, 0]}
          // placeholder={props.route.params.name}
          // placeholderTextColor={colors.black}
          value={name}
          fontFamily={'SemiBold'}
          containerStyle={styles.textInput}
          leftIcon={iconPath.USER_ICON}
          onChnageText={(txt) => {
            if (txt.length < 19) setName(txt);
          }}
        />
        <View style={gStyles.row_jBetween}>
          <ResponsiveText></ResponsiveText>
          <ResponsiveText
            fontFamily="SemiMuBold"
            color={colors.grey}
            size="h5"
            margin={[wp(2.5), 0]}>
            {name.length}/18
          </ResponsiveText>
        </View>
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

export default EditUserName;
