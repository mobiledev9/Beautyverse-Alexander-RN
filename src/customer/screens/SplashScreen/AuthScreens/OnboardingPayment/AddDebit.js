//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderTop from '../../../../components/HomeComponent/headerTop';
import {Strings} from '../../../../theme/strings';
import AuthInput from '../../../../components/AuthComponents/AuthInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';
import Button from '../../../../components/AuthComponents/FilledButton';
import {Colors} from '../../../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const AddDebit = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderTop
        onPress={()=>{
            navigation.goBack();
        }}
        HeaderText={`Add ${Strings.Debit}`} />
        <View style={{alignItems: 'center', marginTop: hp(3)}}>
          <AuthInput placeholder={Strings.nameoncard} />
          <AuthInput placeholder={Strings.cardnum} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <AuthInput
              Inputstyle={{width: '47%'}}
              placeholder={Strings.cardexp}
            />
            <AuthInput Inputstyle={{width: '47%'}} placeholder={Strings.CVV} />
          </View>
        </View>
        <Button
          bgColor={Colors.primary}
          titleColor={Colors.white}
          title={Strings.cardSV}
          btnStyle={{
            width: wp(90),
            position: 'absolute',
            bottom: hp(1.5),
            marginLeft: wp(5),
          }}
        />
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
export default AddDebit;
