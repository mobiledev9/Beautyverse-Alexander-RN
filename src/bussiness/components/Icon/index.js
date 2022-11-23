import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Icon = ({
  source,
  size,
  color,
  radius,
  alignSelf,
  bgColor,
  vertical,
  horizontal,
}) => {
  return (
    <View>
      <Image
        source={source}
        style={{
          height: size,
          width: size,
          tintColor: color,
          borderRadius: radius,
          alignSelf: alignSelf,
          backgroundColor: bgColor,
          paddingVertical: vertical,
          paddingHorizontal: horizontal,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Icon;
