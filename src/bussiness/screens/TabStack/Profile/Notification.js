import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import Header from '../../../components/Header';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.settings}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}></View>
    </SafeAreaView>
  );
};

export default Notification;
