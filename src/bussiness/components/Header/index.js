import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {Strings} from '../../theme/strings';
import Icon from '../Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({onPressBack, headerTitle, appIcon}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={Images.back} style={styles.backBtn} />
      </TouchableOpacity>
      <Text style={styles.txt}>{headerTitle}</Text>
      <View style={styles.backBtn}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(100),
    height: hp(7),
    paddingHorizontal: wp(5),
    borderBottomWidth:1.5,
    borderBottomColor:Colors.lightGray2
  },
  backBtn: {
    height: hp(3),
    width: hp(3),
    tintColor: Colors.primary_dark,
  },
  txt: {
    fontSize: hp(2.5),
    fontWeight: '600',
    color: Colors.primary_dark,
  },
});

export default Index;
