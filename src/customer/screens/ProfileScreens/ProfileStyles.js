//import liraries
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

// create a component
export const ProfileStyles = StyleSheet.create({

profileCard:{
    width:wp(90),
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    elevation: 2,
    marginVertical:hp(1.5),
    marginHorizontal:wp(0.5)
}

})

//make this component available to the app
export default ProfileStyles;
