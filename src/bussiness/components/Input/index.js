import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../theme/colors';

const Index = ({
  placeholder,
  onChangeText,
  value,
  label,
  width,
  onTouchStart,
  size,
  bgColor,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onTouchStart={onTouchStart}
      onChangeText={onChangeText}
      mode="outlined"
      defaultValue={label}
      outlineColor={Colors.lightGray2}
      activeOutlineColor={Colors.primary}
      placeholder={placeholder}
      style={{
        width: width,
        fontSize: size,
        backgroundColor: bgColor ? bgColor : Colors.white,
      }}
    />
  );
};

export default Index;
