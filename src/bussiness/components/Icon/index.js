import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Icon = ({source, size, color, radius}) => {
  return (
    <View>
      <Image
        source={source}
        style={{
          height: size,
          width: size,
          tintColor: color,
          borderRadius: radius,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Icon;
