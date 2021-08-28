import React, {useState} from 'react';
import {View, TouchableOpacity, Switch, ScrollView} from 'react-native';

import Container from '../Basics/Container';
import ResponsiveText from '../RnText';
import Header from '../Header';
import {iconPath} from '../../constants/icon';
import {wp} from '../../helpers/Responsiveness';
import {colors} from '../../constants/colorsPallet';
import SettingSwitchComponent from '../SettingSwitchComponent';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <Header
        title={'Dealzone'}
        color={'grey'}
        leftIcon={iconPath.Back_BUTTON}
        onFirstPress={() => navigation.goBack()}
      />
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ResponsiveText color={'grey'}>Listing Updates</ResponsiveText>
          <SettingSwitchComponent title={'Search alerts'} />
          <SettingSwitchComponent title={'Price rops'} />
          <SettingSwitchComponent title={'Similar deals'} />
          <SettingSwitchComponent title={'Listing Removed'} />
          <ResponsiveText color={'grey'} padding={[wp(8), 0, 0, 0]}>
            Activity
          </ResponsiveText>
          <SettingSwitchComponent title={'Listing favorited'} />
          <SettingSwitchComponent title={'New review'} />
          <SettingSwitchComponent title={'Verification request'} />
          <SettingSwitchComponent title={'Verification request completed'} />
          <SettingSwitchComponent title={'FB friend joins Dealzone'} />
          <SettingSwitchComponent title={'Invited friend joins Dealzone'} />
          <SettingSwitchComponent title={'Free feature'} />
          <ResponsiveText color={'grey'} padding={[wp(8), 0, 0, 0]}>
            Tips & reminders
          </ResponsiveText>
          <SettingSwitchComponent title={'Selling tips'} />
          <SettingSwitchComponent title={'Listing ideas'} />
          <SettingSwitchComponent title={'Selling Share listing'} />
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = {
  scrollView: {
    paddingHorizontal: wp(6),
    paddingTop: wp(3),
    paddingBottom: wp(5),
  },
};

export default Settings;
