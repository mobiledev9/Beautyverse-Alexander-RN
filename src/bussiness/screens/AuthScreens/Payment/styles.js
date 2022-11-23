import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

export const styles = StyleSheet.create({
  //Add Location
  conatiner: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  nextBtn: {
    width: wp(90),
    bottom: hp(5),
    position: 'absolute',
  },
});
