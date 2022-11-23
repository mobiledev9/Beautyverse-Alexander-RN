import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({placeholder, onChangeText, value, label, width}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      defaultValue={label}
      outlineColor={Colors.lightGray2}
      activeOutlineColor={Colors.primary}
      placeholder={placeholder}
      style={{width: width}}
    />
  );
};

const styles = StyleSheet.create({});

export default Index;
