//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../../bussiness/theme/strings';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a componeStringsnt
const ProfileHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: wp(90),alignSelf:'center'}}>
      <SemiBold 
      AllStyle={{fontFamily:'Inter-Bold'}}
      FontSize={hp(3.2)}
      EnterText={Strings.profile} />
      </View>
    
    </SafeAreaView>
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
export default ProfileHome;
