import React from 'react';
import {View, StyleSheet} from 'react-native';
import Label from '../Label';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import Icon from '../Icon';

const Index = ({
  title,
  subTitle,
  bold,
  titleColor,
  color,
  top,
  icon,
  iconSize,
}) => {
  return (
    <View style={{...styles.container, marginVertical: top}}>
      <Label
        label={title}
        color={titleColor ? titleColor : Colors.primary_dark1}
        size={hp(2)}
        bold={bold}
      />
      {icon ? (
        <Icon source={icon} size={iconSize} />
      ) : (
        <Label
          label={subTitle}
          bold
          medium
          size={hp(2)}
          paddingVertical={0}
          color={color ? color : Colors.primary_dark}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    width: '100%',
    paddingVertical: hp(1),
  },
});

export default Index;
