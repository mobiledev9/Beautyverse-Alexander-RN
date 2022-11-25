import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainView: {
    marginTop: hp(3),
    paddingBottom: hp(5),
    width: wp(90),
    alignSelf: 'center',
  },
  view: {
    backgroundColor: Colors.white,
    paddingHorizontal: wp(2),
    paddingVertical: hp(3),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.lightRed,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  calender: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    width: wp(90),
    alignSelf: 'center',
    marginBottom: hp(5),
    backgroundColor: Colors.white,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  detailView: {
    marginTop: hp(4),
  },
  bottomBtns: {width: wp(90), marginVertical: hp(1)},
  modal: {
    backgroundColor: Colors.white,
    height: hp(60),
    width: wp(100),
    alignSelf: 'center',
    bottom: hp(-5),
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: wp(5),
    paddingBottom:hp(5)
  },
  serviceWrapper: {
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    marginBottom: hp(2),
    paddingBottom: hp(2),
  },
  slot:{
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    margin: wp(2),
    borderRadius: 100,
    flexDirection:'row',
    alignItems:'center'
  },
  monthText: {
    paddingVertical: hp(1),
    fontFamily: 'InterV',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary_dark,
  },
});
