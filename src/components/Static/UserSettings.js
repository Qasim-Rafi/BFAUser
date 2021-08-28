import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Container from '../Basics/Container';
import ResponsiveText from '../RnText';
import Header from '../Header';
import {iconPath} from '../../constants/icon';
import {hp, wp} from '../../helpers/Responsiveness';
import {colors} from '../../constants/colorsPallet';
import SettingSwitchComponent from '../SettingSwitchComponent';
import {useNavigation} from '@react-navigation/native';
import Icon from '../Icon';
import RnButton from '../RnButton';

const UserSettings = (props) => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <Header
        title={'Settings'}
        color={'grey'}
        leftIcon={iconPath.Back_BUTTON}
        onFirstPress={() => navigation.goBack()}
      />
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ResponsiveText margin={[15, 0]} size="h5" color={colors.red}>
            Profile
          </ResponsiveText>
          <View style={styles.listingCard}>
            <View style={styles.photoCircle}>
              <ResponsiveText
                fontFamily="SemiBold"
                size="h4"
                color={colors.primary}>
                N
              </ResponsiveText>
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Photo
              </ResponsiveText>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('EditUserName', {
                name: 'Nisan Alex',
              })
            }
            style={styles.listingCard}>
            <View style={styles.iconStyle}>
              <Icon
                resizeMode={'contain'}
                source={iconPath.USER_1}
                tintColor={'grey'}
                size="s1"
              />
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Name
              </ResponsiveText>
              <ResponsiveText color={colors.grey} fontFamily="" size="h5">
                Nisan Alex
              </ResponsiveText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('EditUserEmail', {
                email: 'nisan@dealzone.co',
              })
            }
            style={styles.listingCard}>
            <View style={styles.iconStyle}>
              <Icon
                resizeMode={'contain'}
                source={iconPath.EMAIL_1}
                tintColor={'grey'}
                size="s1"
              />
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Email
              </ResponsiveText>
              <ResponsiveText color={colors.grey} fontFamily="" size="h5">
                nisan@dealzone.co
              </ResponsiveText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('LocationScreen')}
            style={styles.listingCard}>
            <View style={styles.iconStyle}>
              <Icon
                resizeMode={'contain'}
                source={iconPath.LOCATION_ICON}
                tintColor={'grey'}
                size="s1"
              />
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Location
              </ResponsiveText>
              <ResponsiveText color={colors.grey} fontFamily="" size="h5">
                5479, OK,US
              </ResponsiveText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AboutMe')}
            style={styles.listingCard}>
            <View style={styles.iconStyle}>
              <Icon
                resizeMode={'contain'}
                source={iconPath.USER_BIO}
                tintColor={'grey'}
                size="s1"
              />
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Bio / about me
              </ResponsiveText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Distance')}
            style={styles.listingCard}>
            <View style={styles.iconStyle}>
              <Icon
                resizeMode={'contain'}
                source={iconPath.DISTANCE}
                tintColor={'grey'}
                size="s1"
              />
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Distances
              </ResponsiveText>
              <ResponsiveText color={colors.grey} fontFamily="" size="h5">
                Miles
              </ResponsiveText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Notification')}
            style={styles.listingCard}>
            <View style={styles.iconStyle}>
              <Icon
                resizeMode={'contain'}
                source={iconPath.NOTIFICATION_1}
                tintColor={'grey'}
                size="s1"
              />
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Notifications
              </ResponsiveText>
            </View>
          </TouchableOpacity>
          <ResponsiveText margin={[15, 0]} size="h5" color={colors.red}>
            Support
          </ResponsiveText>
          <View style={styles.listingCard}>
            <View style={styles.iconStyle}>
              <Icon
                resizeMode={'contain'}
                source={iconPath.HELP}
                tintColor={'black'}
                size="s1"
              />
            </View>
            <View>
              <ResponsiveText fontFamily="SemiBold" size="h5">
                Help
              </ResponsiveText>
            </View>
          </View>
          <RnButton
            onPress={() => navigation.goBack()}
            margin={[wp(9), 0]}
            fontFamily="Bold"
            // style={{borderRadius:0}}
            backgroundColor={colors.red}
            title="Log Out"
            textColor={colors.primary}
          />
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
    paddingHorizontal: wp(6),
    paddingTop: wp(3),
    paddingBottom: wp(5),
  },
  listingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(3),
  },
  photoCircle: {
    width: wp(13),
    height: wp(13),
    backgroundColor: colors.light_blue,
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(5),
  },
  iconStyle: {
    width: wp(13),
    height: wp(13),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(5),
  },
});

export default UserSettings;
