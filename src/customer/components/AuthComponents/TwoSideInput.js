//import liraries
import React, {Component} from 'react';
import {TextInput,View,TouchableOpacity,Text,Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

// create a component
const TwoSideInput = ({
  placeholder,
  value,
  Inputstyle,
  onChangeText,
  keyboardType,
  maxLength,
  secureTextEntry,
}) => {
  return (
    <View
      style={[
        {
          paddingLeft: 15,
          color: 'black',
          height: hp(7),
          borderWidth: 1,
          width: '90%',
          paddingVertical: 6,
          borderRadius: 12,
          marginBottom: hp(2),
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: '#EEE6F1',
          flexDirection: 'row',
        },
      ]}>
      <TextInput
        style={[{width: '80%'}, Inputstyle]}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholderTextColor={'#979797'}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          style={{height: hp(3), width: hp(3), marginRight: 15}}
          source={require('../../assets/AuthScreen/Eye.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

// define your styles

//make this component available to the app
export default TwoSideInput;
