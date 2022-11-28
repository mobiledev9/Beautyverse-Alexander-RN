import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import {Colors} from '../../theme/colors';
import {FONTS} from '../../theme/fonts';
import {Images} from '../../theme/images';
import {Strings} from '../../theme/strings';
import Icon from '../Icon';
import Label from '../Label';
import IconButton from '../IconButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const Index = ({
  userIcon,
  title,
  desc,
  leftIcon,
  iconColor,
  onPress,
  onPressMenu,
  rating,
  review,
  line,
  leftIconColor,
  option,
}) => {
  const [optionModal, setOptionModal] = useState(false);
  return (
    <TouchableOpacity
      style={
        line
          ? [
              styles.constainer,
              {borderBottomWidth: 1, borderBottomColor: Colors.border},
            ]
          : [styles.constainer, {borderWidth: 1, borderRadius: 20}]
      }
      onPress={onPress}>
      <View style={styles.innerContainer}>
        <Icon source={userIcon} size={hp(5)} color={iconColor} />
        <View style={styles.labelConatiner}>
          <Label
            label={title}
            left
            fontFamily={FONTS.InterBold}
            color={Colors.primary_dark}
            marginBottom={hp(1)}
          />
          <View style={styles.row}>
            {rating && <Icon source={Images.rating} size={hp(1.5)} />}
            <Label
              label={desc}
              left
              fontFamily={rating ? FONTS.InterSemiBold : FONTS.InterRegular}
              color={rating ? Colors.primary_dark : Colors.gray}
              marginLeft={rating ? wp(2) : 0}
            />
            {review && (
              <Label
                label={review}
                color={Colors.lightGray3}
                fontFamily={FONTS.InterRegular}
                size={hp(1.5)}
                marginLeft={wp(1)}
              />
            )}
          </View>
        </View>
      </View>
      {option ? (
        <Popover
          isVisible={optionModal}
          popoverStyle={styles.popoverStyle}
          placement={PopoverPlacement.BOTTOM}
          onRequestClose={() => setOptionModal(false)}
          from={
            <TouchableOpacity onPress={() => setOptionModal(true)}>
              <Icon source={leftIcon} size={hp(2)} color={leftIconColor} />
            </TouchableOpacity>
          }>
          <View>
            <IconButton
              onPress={() => setOptionModal(false)}
              icon={Images.bin}
              iconSize={hp(2)}
              iconColor={Colors.gray}
              label={Strings.remove}
              labelColor={Colors.primary_dark}
              width={wp(50)}
              left
            />
            <IconButton
              onPress={() => setOptionModal(false)}
              icon={Images.cancel}
              iconSize={hp(2)}
              iconColor={Colors.gray}
              label={Strings.removeFromList}
              labelColor={Colors.primary_dark}
              width={wp(50)}
              left
            />
          </View>
        </Popover>
      ) : (
        <TouchableOpacity onPress={onPressMenu}>
          <Icon source={leftIcon} size={hp(2)} color={leftIconColor} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    borderColor: Colors.border,
    paddingVertical: hp(1),
    marginBottom: hp(3),
  },
  innerContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelConatiner: {
    backgroundColor: Colors.white,
    marginLeft: wp(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popoverStyle: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal:wp(2)
  },
});

export default Index;
