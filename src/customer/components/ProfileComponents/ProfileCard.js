import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../../bussiness/theme/strings';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar} from 'react-native-elements';
import {Images} from '../../theme/Images';
import {Colors} from '../../theme/colors';
import {TouchableOpacity} from 'react-native';
import {ProfileStyles} from '../../screens/ProfileScreens/ProfileStyles';

// create a component
const ProfileCard = ({avtar, mainText, text, onPress, showmenu}) => {
  return (
    <TouchableOpacity onPress={onPress} style={ProfileStyles.profileCard}>
      <Avatar rounded size={50} source={avtar} />
      <View style={{width: wp(55), marginLeft: -10}}>
        <SemiBold
          AllStyle={{marginTop: -12}}
          FontSize={hp(2.5)}
          EnterText={mainText}
        />
        <Text
          style={{
            fontFamily: 'InterV',
            color: Colors.Brown,
            flexWrap: 'wrap',
          }}>
          {text}
        </Text>
      </View>

      {showmenu ? (
        <Image
          resizeMode="contain"
          style={{height: hp(3), width: hp(3)}}
          source={Images.menudots}
        />
      ) : (
        <Image
          resizeMode="contain"
          style={{height: hp(3), width: hp(3)}}
          source={Images.RightArrow}
        />
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default ProfileCard;
