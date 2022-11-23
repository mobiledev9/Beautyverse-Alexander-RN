import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import { Colors } from '../../../theme/colors';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

const AddCard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.addDebitCreditCard}
      />
      <Button
        onPress={() => navigation.navigate('BottomTabs')}
        title={Strings.saveCard}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default AddCard;
