//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

// create a component
const Textnormal = ({Text}) => {
  return (
    <Text style={{color: Colors.darkpink, fontFamily: 'InterV'}}>{Text}</Text>
  );
};

// define your styles

//make this component available to the app
export default Textnormal;
