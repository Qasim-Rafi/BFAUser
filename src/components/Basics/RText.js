import React from 'react';
import {Text} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
// import {Colors, Fonts} from '../../config/Theme';

export default class ResponsiveText extends React.Component {
  render() {
    let fontSize = wp(4);
    const {style, children} = this.props;
    if (style && style.fontSize) {
      fontSize = wp(style.fontSize);
    }

    return (
      <Text {...this.props} style={[styles.text, style, {fontSize}]}>
        {children}
      </Text>
    );
  }
}

const styles = {
  text: {
    color: 'black',
    // fontFamily: Fonts.Regular,
  },
};
