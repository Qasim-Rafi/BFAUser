import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Share,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors} from '../../constants/colorsPallet';
import {iconPath} from '../../constants/icon';
import {
  myListingTabs,
  userDetailProfile,
  XImageListing,
} from '../../constants/mock';
import {Spacing} from '../../constants/spacingScale';
import {wp} from '../../helpers/Responsiveness';
import TopTabs from '../../navigation/TopTab';
import {gStyles} from '../../styles/global';
import Container from '../Basics/Container';
import Header from '../Header';
import Icon from '../Icon';
import RnButton from '../RnButton';
import ResponsiveText from '../RnText';
import UserProfileComp from '../UserProfileComp';

const UserDetailProfile = ({navigation, ...props}) => {
  const [activeTab, setActiveTab] = React.useState(userDetailProfile[0].id);

  const onShare = () => {
    console.log('yoo<<<<');
    try {
      const result = Share.share({
        message: 'Deal Zone Share Content placed here',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // const Selling = () => {
  //   return(

  //   )
  // };

  return (
    <Container style={styles.container}>
      <ScrollView>
        <Header
          leftIcon={iconPath.Back_BUTTON}
          color={'grey'}
          // title={'Chats-All'}
          icon={iconPath.ALLIGN_ICON}
          secondIcon={iconPath.SHARE_ICON}
          onSecondPress={() => onShare()}
          onFirstPress={() => navigation.goBack()}
          // onFirstPress={() => props.toggleAlign(FilterData)}
          // onLayout={props.onLayout}
        />
        <View style={styles.body}>
          <UserProfileComp
            btnTxtColor={colors.red1}
            btnTitle="Ask Naeem Qaisar to ..."
          />
          <View style={{justifyContent: 'flex-start', alignSelf: 'flex-start'}}>
            <ResponsiveText size="h6" margin={[0, 0, 10, 0]}>
              Verified With
            </ResponsiveText>
            <View
              style={{
                borderRadius: 50,
                borderColor: colors.light_blue,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: 30,
                height: 30,
              }}>
              <Icon source={iconPath.GOOGLE} />
            </View>
          </View>
          <View style={styles.tabsHeading}>
            {userDetailProfile.map((items, index) => {
              return (
                <View key={items.id}>
                  <RnButton
                    id={index}
                    width={wp(18)}
                    onPress={() => setActiveTab(items.id)}
                    btnStyle={{
                      flexDirection: 'row',
                      borderWidth: 0,
                      borderRadius: 0,
                      borderBottomWidth: 2,
                      borderColor:
                        items.id === activeTab ? colors.red1 : 'white',
                    }}
                    borderRadius={0}
                    padding={[15, 0]}>
                    <ResponsiveText
                      size={2.7}
                      // fontFamily={items.id === activeTab ? 'Boldedium' : undefined}
                      color={
                        items.id === activeTab ? colors.red1 : colors.grey
                      }>
                      {items.name}
                    </ResponsiveText>
                  </RnButton>
                </View>
              );
            })}
          </View>
          <View style={styles.imageListing}>
            <FlatList
              data={XImageListing}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={gStyles.jcCenter}
              numColumns={2}
              horizontal={false}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <React.Fragment key={item.id}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 12,
                      width: wp(88 / 2),
                      height: wp(90 / 2),
                      marginVertical: 4.9,
                      marginHorizontal: 6,
                      overflow: 'hidden',
                      elevation: 1.5,
                      backgroundColor: 'white',
                    }}
                    onPress={() =>
                      navigation.navigate('ProductDetail', {chat: 0})
                    }>
                    <Icon
                      // resizeMode={'contain'}
                      idx={item.id}
                      width={'100%'}
                      height={'100%'}
                      source={{uri: item.url}}
                      resizeMode={'cover'}
                    />
                    <RnButton style={styles.heartButton}>
                      <Icon
                        idx={item.id}
                        tintColor={colors.primary}
                        margin={[5]}
                        size="s2"
                        source={iconPath.HEART_ICON}
                      />
                    </RnButton>
                  </TouchableOpacity>
                </React.Fragment>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default UserDetailProfile;

const styles = {
  container: {
    flex: 1,
    // paddingHorizontal: Spacing.horizental,
    backgroundColor: colors.primary,
  },
  body: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // paddingVertical: Spacing.headerV,
    paddingHorizontal: wp(5),
  },
  tabsHeading: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
    width: '100%',
  },
  tabsContent: {},
  imageListing: {
    marginBottom: wp(25),
    width: wp(95),
  },
};
