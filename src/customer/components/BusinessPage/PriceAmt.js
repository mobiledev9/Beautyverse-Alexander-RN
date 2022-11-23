//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

// create a component
const PriceAmt = ({FontSize,Amount}) => {
  return (
    <Text
      style={[styles.PriceAmtStyle,{fontSize:FontSize}]}>
      {Amount}
    </Text>
  );
};

// define your styles
const styles = StyleSheet.create({
  PriceAmtStyle: {
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
    fontSize: hp(2.5),
  },
});

//make this component available to the app
export default PriceAmt;
