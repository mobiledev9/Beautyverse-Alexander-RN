import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import { Colors } from '../../../theme/colors';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

const PaymentMethod = ({navigation}) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.addpaymentMethod}
      />
      <Button
        onPress={() => navigation.navigate('BottomTabs')}
        title={Strings.addLater}
        bgColor={Colors.white}
        titleColor={Colors.primary}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default PaymentMethod;
