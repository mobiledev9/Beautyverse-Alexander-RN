import React from 'react';
import {View, StyleSheet} from 'react-native';
import Label from '../Label';
import { Colors } from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({title, subTitle}) => {
  return (
    <View
      style={styles.container}>
      <Label label={title} color={Colors.primary_dark1} size={hp(2)}/>
      <Label label={subTitle} bold size={hp(2)} paddingVertical={0}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    width: '100%',
    paddingVertical:hp(1)
  }
});

export default Index;
