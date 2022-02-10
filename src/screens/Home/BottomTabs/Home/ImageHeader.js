import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../../constants/colorsPallet';
import Icon from '../../../../components/Icon';
import {globalPath} from '../../../../constants/globalPath';
import FastImage from 'react-native-fast-image';

const ImageHeader = props => {
  const BackImg = require('../../../../assets/fake_Images/defaultdish.png');
  return (
    <View style={styles.container}>
      <FastImage
        imageStyle={{opacity: 0.8}}
        source={props.img ? {uri: props.img} : BackImg}
        resizeMode="cover"
        style={styles.image}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            margin: 20,
            backgroundColor: colors.yellow,
            paddingVertical: 10,
            alignSelf: 'flex-start',
            paddingHorizontal: 10,
            borderRadius: 25,
          }}>
          <Icon source={globalPath.BACK_ARROW} />
        </TouchableOpacity>
      </FastImage>
    </View>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 200,
  },
});
