import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {Images} from '../../theme/Images';
import {Colors} from '../../theme/colors';
import {Strings} from '../../theme/strings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';


const MapSearch = ({onChangeText, value, style, inputStyle ,onTouchStart}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={Images.smallsearch} style={styles.searchImg} />
      <TextInput
      onTouchStart={onTouchStart}
      placeholderTextColor={Colors.darkpink}
        placeholder={Strings.searchLocation}
        onChangeText={onChangeText}
        value={value}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.white,
    width: wp(70),
    marginLeft: wp(2),
    paddingVertical: hp(2),
  },
  searchImg: {width: wp(6), height: wp(6)},
  container: {
    backgroundColor: Colors.white,
    width: wp(90),
    height: hp(7),
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(4),
  },
});

export default MapSearch;