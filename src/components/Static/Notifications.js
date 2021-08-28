import React, {useState, useRef} from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {colors} from '../../constants/colorsPallet';
import {iconPath} from '../../constants/icon';
import {wp} from '../../helpers/Responsiveness';
import {gStyles} from '../../styles/global';
import Icon from '../Icon';
import RnButton from '../RnButton';
import ResponsiveText from '../RnText';
import withToolTip from '../HigherOrderComponents/withToolTip';
import Header from '../Header';

const deleteNotification = [
  {
    title: 'Delete Notification',
  },
];

const Notifications = (props) => {
  const view1 = useRef();
  const view2 = useRef();
  const [yOffsets, setYOffsets] = useState([]);

  return (
    <View style={styles.container}>
      <ResponsiveText margin={[0, 15]} size={'h5'} fontFamily="SemiBold">
        Recent
      </ResponsiveText>
      <View
        ref={view1}
        onLayout={(event) => {
          const y = event.nativeEvent.layout.y;
          yOffsets.push(y);
        }}
        style={[
          styles.notificationCard,
          {backgroundColor: colors.red4, marginTop: wp(2)},
        ]}>
        <View style={styles.imageWraper}>
          <ResponsiveText size={'h3'} color={'white'}>
            M
          </ResponsiveText>
          <View style={styles.userNameCircle}>
            <Image source={iconPath.PROFILE_ICON} style={styles.profileIcon} />
          </View>
        </View>
        <View style={styles.notificationTxtArea}>
          <ResponsiveText
            size={'h6'}
            numberOfLines={3}
            fontFamily={'SemiBold'}
            color={'black'}>
            You could be making better deals
          </ResponsiveText>
          <View style={{paddingRight: 20, marginVertical: wp(1)}}>
            <ResponsiveText
              style={{fontSize: wp(3.5)}}
              numberOfLines={4}
              color={'grey'}>
              Verified users make better deals.Take a minute to complete and
              verify your profile today.
            </ResponsiveText>
          </View>
          <View
            style={{
              marginTop: wp(1),
              marginBottom: wp(3),
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: wp(75),
            }}>
            <RnButton
              margin={[8, 8, 5, 0]}
              borderRadius={wp(5)}
              padding={[6, 2]}
              textColor={'white'}
              fontFamily={'Bold'}
              btnStyle={styles.button1}
              title="Edit listing"
            />
            <RnButton
              margin={[8, 0, 5, 0]}
              borderRadius={wp(5)}
              padding={[6, 2]}
              // width={wp(42)}
              textColor={'red'}
              fontFamily={'Bold'}
              btnStyle={styles.button}
              title="Complete Profile"
            />
          </View>
        </View>
        <View style={styles.rightSideView}>
          <View style={styles.redDot} />
          <View>
            <TouchableOpacity
              onPress={() => {
                props.toggleAlign(deleteNotification, yOffsets, 0);
              }}>
              <Icon
                margin={[0, 0, 0, 3]}
                source={iconPath.ALLIGN_ICON}
                width={wp(4)}
                tintColor={colors.grey}
                height={wp(4)}
              />
            </TouchableOpacity>
            <ResponsiveText
              size={'h7'}
              color={colors.grey}
              margin={[8, 2.5, 0, 0]}>
              5m
            </ResponsiveText>
          </View>
        </View>
      </View>
      <ResponsiveText margin={[10, 0, 0, 15]} size={'h5'} fontFamily="SemiBold">
        Earlier
      </ResponsiveText>
      <View
        ref={view2}
        onLayout={(event) => {
          const y = event.nativeEvent.layout.y;
          yOffsets.push(y);
        }}
        style={[styles.notificationCard, {marginTop: wp(2)}]}>
        <View style={styles.imageWraper}>
          <ResponsiveText size={'h3'} color={'white'}>
            M
          </ResponsiveText>
          <View style={styles.userNameCircle}>
            <Image source={iconPath.PROFILE_ICON} style={styles.profileIcon} />
          </View>
        </View>
        <View style={styles.notificationTxtArea}>
          <ResponsiveText
            size={'h6'}
            numberOfLines={3}
            fontFamily={'SemiBold'}
            color={'grey'}>
            You could be making better deals
          </ResponsiveText>
          <View style={{paddingRight: 20, marginVertical: wp(1)}}>
            <ResponsiveText
              style={{fontSize: wp(3.5)}}
              numberOfLines={4}
              color={'grey'}>
              Your profile picture has been updated.
            </ResponsiveText>
          </View>
          <View
            style={{
              marginTop: wp(1),
              marginBottom: wp(3),
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: wp(72),
            }}>
            <RnButton
              margin={[8, 0, 5, 0]}
              borderRadius={wp(5)}
              padding={[6, 2]}
              // width={wp(42)}
              textColor={'red'}
              fontFamily={'Bold'}
              btnStyle={styles.button}
              title="Earn more points"
            />
          </View>
        </View>
        <View style={styles.rightSideView}>
          <View style={[styles.redDot, {backgroundColor: 'white'}]} />
          <View>
            <TouchableOpacity
              onPress={() => {
                props.toggleAlign(deleteNotification, yOffsets, 1);
              }}>
              <Icon
                margin={[0, 0, 0, 3]}
                source={iconPath.ALLIGN_ICON}
                width={wp(4)}
                tintColor={colors.grey}
                height={wp(4)}
              />
            </TouchableOpacity>
            <ResponsiveText
              size={'h7'}
              color={colors.grey}
              margin={[8, 2.5, 0, 0]}>
              5m
            </ResponsiveText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withToolTip(Notifications);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
  notificationCard: {
    // height: wp(27),
    width: wp(100),
    paddingLeft: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: colors.red4,
    alignSelf: 'center',
    // alignItems:'center'
    paddingTop: 10,
  },
  imageWraper: {
    marginTop: wp(4),
    marginLeft: wp(2),
    justifyContent: 'center',
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    backgroundColor: '#5A69C6',
    alignItems: 'center',
  },
  senderImage: {
    overflow: 'hidden',
  },
  userNameCircle: {
    position: 'absolute',
    zIndex: 3,
    width: wp(7.5),
    height: wp(7.5),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: wp(-1),
    right: wp(-1.2),
  },
  notificationTxtArea: {
    width: wp(60),
    // height: '90%',
    marginLeft: wp(4),
    // backgroundColor: 'red',
    marginTop: wp(3.5),
  },
  button: {
    backgroundColor: 'white',
    padding: 0,
    borderWidth: 1,
  },
  button1: {
    backgroundColor: colors.red1,
    padding: 0,
    borderWidth: 1,
  },
  profileIcon: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(3),
    tintColor: 'red',
    resizeMode: 'contain',
  },
  redDot: {
    backgroundColor: 'red',
    height: 5,
    width: 5,
    borderRadius: 5 / 2,
    marginLeft: 14,
    marginTop: 5,
  },
  rightSideView: {
    marginTop: wp(3.5),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(20),
    paddingRight: 15,
    paddingTop: 5,
  },
});
