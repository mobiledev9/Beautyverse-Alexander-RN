import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Button';
import Label from '../Label';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({title, leftBtn, rightBtn, onLeftPress, onRightPress}) => {
  return (
    <View style={styles.container}>
      <Label label={title} bold size={hp(2)} marginBottom={hp(1)} />
      <View style={styles.btnWrapper}>
        <Button
          onPress={onLeftPress}
          title={leftBtn}
          btnStyle={styles.btn}
          bgColor={Colors.lightRed}
          titleColor={Colors.red}
        />
        <Button
          onPress={onRightPress}
          title={rightBtn}
          btnStyle={styles.btn}
          bgColor={Colors.lightGray2}
          titleColor={Colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 0,
    width: wp(40),
  },
  container: {
    width: wp(90),
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(3),
    borderRadius: 10,
  },
});

export default Index;
