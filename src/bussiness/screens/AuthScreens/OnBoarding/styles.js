import {StyleSheet} from 'react-native';
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
  mapView: {height: '100%', width: '100%'},
  bottomView: {
    bottom: hp(4),
    position: 'absolute',
  },
  mapBtn: {
    width: wp(90),
  },
  backBtn: {
    height: wp(5),
    width: wp(5),
  },
  searchView: {
    // backgroundColor: Colors.red,
    backgroundColor: '#f2f2f3',
    width: wp(85),
    marginLeft: wp(10),
    borderRadius: 100,
    fontSize: hp(2),
  },
  serachWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    width: wp(100),
    paddingVertical: hp(3),
  },
  serachModal: {flex: 1, backgroundColor: Colors.white},
  marker: {
    height: wp(15),
    width: wp(15),
  },

  //Address details
  headerMapView: {
    width: wp(90),
    borderRadius: 10,
    overflow: 'hidden',
    color: Colors.lightGray,
    paddingBottom: hp(1),
    marginBottom: hp(2),
  },
  map: {width: wp(100), height: wp(40)},
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  inputWrapper: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    marginBottom: hp(2),
    alignItems: 'center',
  },
  nextBtn: {
    width: wp(90),
    bottom: hp(5),
    position: 'absolute',
  },

  //Business Timing
  dropdown: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.lightGray2,
    paddingHorizontal: wp(4),
    width:wp(40),
    paddingVertical: hp(2),
    borderRadius: 10,
    justifyContent:'space-between',
    alignItems:'center'
  },
});
