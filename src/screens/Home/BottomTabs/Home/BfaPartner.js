import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';
import {BarIndicator, DotIndicator} from 'react-native-indicators';

import {
  advertisementBannerFakeDATA,
  BFAPartnerFakeData,
  BFAPartnerLessData,
  image,
} from '../../../../constants/mock';
import {colors} from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import {globalPath} from '../../../../constants/globalPath';
import {wp} from '../../../../helpers/Responsiveness';
import {useDispatch, useSelector} from 'react-redux';
import urls from '../../../../redux/lib/urls';
import {hp} from '../../../../helpers/Responsiveness';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from '../../../../components/Icon';
import {getBfaPartners} from '../../../../redux/actions/user.actions';
import {WebView} from 'react-native-webview';

const BfaPartner = ({props}) => {
  const dispatch = useDispatch();
  const loading = useSelector(
    state => state.appReducers.bfaPartners.refreshing,
  );

  // console.log('loading', loading);
  const [moreData, setMoreData] = React.useState(false);
  const [modalVisble, setModalVisible] = React.useState(false);
  const [loadingVisble, setloadingVisible] = React.useState(true);
  const [webIndex, setWebIndex] = React.useState(null);

  let bfaPartners = useSelector(state => state.appReducers.bfaPartners.data);
  const [title, setTitle] = React.useState(
    bfaPartners.length <= 6 ? 'More' : 'Less',
  );
  const images = [];
  const lessImages = [];
  const siteAdd = [];
  if (bfaPartners.length > 0) {
    bfaPartners.map(item => {
      if (images.includes(item.fullpath)) {
      } else {
        images.push(item.fullpath);
      }

      //  console.log('All Images: ',images);
    });
  }

  if (bfaPartners.length > 0) {
    bfaPartners.map((item, index) => {
      siteAdd.push(bfaPartners[index].siteUrl);
    });
  }
  // console.log(siteAdd);

  if (bfaPartners.length > 0) {
    var end = bfaPartners.length > 6 ? 6 : bfaPartners.length;
    for (var i = 0; i < end; i++) {
      var img = bfaPartners[i].fullpath;
      //var src = img.replace(/\\/g, '/');
      if (lessImages.includes(img)) {
        console.log('pathhhhhhhhh: ', img);
      } else {
        lessImages.push(img);
      }
    }
  }
  const modalView = index => {
    setModalVisible(true);
    setWebIndex(index);
  };
  // useEffect(() => {
  //   dispatch(getBfaPartners(6))
  // }, [])
  const renderItem = ({item, index}) => {
    console.log(index);
    return (
      <View
        style={{
          backgroundColor: colors.white,
          borderRadius: 5,
          marginRight: 5,
          marginVertical: 3,
        }}>
        <TouchableOpacity onPress={() => modalView(index)}>
          <Icon
            source={{
              uri: item,
            }}
            // source={url}

            size={wp(14)}
            borderRadius={5}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const ContentThatGoesAboveTheFlatList = ({item, index}) => {
    return (
      <View style={styles.bfaPartnerHeaderSection}>
        <ResponsiveText size={4} color={colors.white}>
          Bali Partners
        </ResponsiveText>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 10,
          }}
          onPress={() => {
            if (title === 'Less') {
              dispatch(getBfaPartners(4));
            } else {
              dispatch(getBfaPartners(24));
            }
            setTitle(title === 'More' ? 'Less' : 'More');
          }}>
          <ResponsiveText
            size={3.2}
            margin={[0, 10, 0, 0]}
            color={colors.yellow}>
            {title}
          </ResponsiveText>

          <Icon
            size={(wp(1.6), hp(1.6))}
            source={
              title === 'More' ? globalPath.DOWN_ARROW : globalPath.UP_ARROW
            }
          />
        </TouchableOpacity>
      </View>
    );
  };
  const ContentThatGoesBelowTheFlatList = ({item, index}) => {
    return (
      <View>
        {loading === true ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: 'rgba(65, 65, 65, 0)',
              flex: 1,
            }}>
            <DotIndicator color={colors.yellow} size={5} />
          </View>
        ) : undefined}
      </View>
    );
  };
  return (
    <View style={{flex:1,backgroundColor: colors.black3}}>
      {images.length > 0 ? (
        <FlatList
          data={title === 'More' ? lessImages : images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={6}
          ListHeaderComponent={ContentThatGoesAboveTheFlatList}
          ListFooterComponent={ContentThatGoesBelowTheFlatList}
          scrollEnabled={false}
        />
      ) : null}
    
      <Modal
        visible={modalVisble}
        animationType="slide"
        transparent={true}
        style={{borderRadius: 50}}>
        {/* <Button title={'Close'} onPress={() => { setModalVisible(false), setloadingVisible(true) }} /> */}

        <View
          style={{
            backgroundColor: colors.black2,
            height: hp(60),
            width: wp(100),
            position: 'absolute',
            bottom: 0,
            paddingTop: hp(6),
          }}>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 5,
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{flex: 1}}>
              <Image
                source={require('../../../../assets/icons/bali-logo.png')}
                style={{height: 33, width: wp(16), resizeMode: 'contain'}}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(false), setloadingVisible(true);
              }}
              // style={{ position: 'absolute', right: 0, zindex: 1 }}
            >
              <Image
                source={require('../../../../assets/fake_Images/cross.png')}
                style={{height: 33, width: 33}}
              />
            </TouchableOpacity>
          </View>

          <WebView
            onLoad={() => setloadingVisible(false)}
            source={{uri: siteAdd[webIndex]}}
          />
          {loadingVisble === true ? (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'rgba(65, 65, 65, 0)',
                flex: 1,
              }}>
              <DotIndicator color={colors.black} size={5.6} />
            </View>
          ) : undefined}
          {console.log(siteAdd[webIndex], 'webIndex', webIndex)}
        </View>
      </Modal>
    </View>
  );
};

export default BfaPartner;

const styles = StyleSheet.create({
  bfaPartnerHeaderSection: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.black3,
    borderTopLeftRadius: 7,
    borderBottomWidth: 1,
    marginHorizontal: 0,
    marginBottom: 2,
    borderBottomColor: colors.black1,
    borderTopRightRadius: 7,
  },
  bfaPartnerItemsSection: {
    flex: 1,
    flexWrap: 'wrap',

    flexDirection: 'row',
    paddingVertical: 5,
    // justifyContent: 'space-between',
    backgroundColor: colors.black3,

    overflow: 'hidden',
  },
  modalWeb: {
    marginTop: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: '95%',
    height: 30,
    position: 'absolute',
    margin: 15,
    alignItems: 'flex-end',
  },
});
