//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import HeaderTop from '../../components/HomeComponent/headerTop';
import SemiBold from '../../components/HomeComponent/SemiBold';
import { Images } from '../../theme/Images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';

// create a component
const MyProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
          <HeaderTop
          onPress={()=>{
            navigation.goBack();
          }}
          HeaderText={'My Profile'}
          />
          <View style={{alignItems:'center'}}>
            <Avatar
            size={120}
            rounded
            source={Images.img1}
            />
            <SemiBold
            FontSize={hp(3.2)}
            EnterText={'Kynthia Johnson'}
            />
            <Text>

            </Text>
          </View>
        </View>
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
export default MyProfile;
