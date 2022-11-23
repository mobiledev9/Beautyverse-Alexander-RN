import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const AppHeader = ({onPressBack, hide}) => {
  return (
    <View style={hide ? styles.container : [styles.container, styles.line]}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={Images.NotifyBell} style={styles.backBtn} />
      </TouchableOpacity>
      <Image source={Images.appLogo} style={styles.logo} />
      <TouchableOpacity onPress={onPressBack}>
        <Image source={Images.calnder} style={styles.backBtn} />
      </TouchableOpacity>
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
  },
  line: {
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.lightGray2,
  },
  backBtn: {
    height: hp(3),
    width: hp(3),
    resizeMode: 'cover',
  },
  txt: {
    fontSize: hp(2.5),
    fontWeight: '600',
    color: Colors.primary_dark,
  },
  logo: {
    height: hp(4),
    width: wp(40),
    resizeMode: 'cover',
  },
});

export default AppHeader;
