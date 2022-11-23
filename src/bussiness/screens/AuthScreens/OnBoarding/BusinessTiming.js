import React, {useState} from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import {Switch} from 'react-native-paper';
import Header from '../../../components/Header';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Images} from '../../../theme/images';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import {Colors} from '../../../theme/colors';
import Label from '../../../components/Label';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const BusinessTiming = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const DATA = [
    {day: 'Monday', fromTime: '12:00 PM', toTime: '12:00 AM', opne: true},
    {day: 'Tuesday', fromTime: '12:00 PM', toTime: '12:00 AM', opne: true},
    {day: 'Wednesday', fromTime: '12:00 PM', toTime: '12:00 AM', opne: true},
    {day: 'Thursday', fromTime: '12:00 PM', toTime: '12:00 AM', opne: true},
    {day: 'Friday', fromTime: '12:00 PM', toTime: '12:00 AM', opne: true},
    {day: 'Saturday', fromTime: '12:00 PM', toTime: '12:00 AM', opne: false},
    {day: 'Sunday', fromTime: '12:00 PM', toTime: '12:00 AM', opne: false},
  ];

  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.businessTimings}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: hp(10)}}>
        {DATA.map((item, index) => (
          <View key={index}>
            <View style={styles.inputWrapper}>
              <Label label={item.day} bold size={hp(2)} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: wp(25),
                }}>
                <Label label={item.opne ? 'Open' : 'Close'} medium />
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color={Colors.primary}
                />
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <View style={styles.dropdown}>
                <Label label={item.fromTime} medium />
                <Icon
                  source={item.opne ? Images.menushow : Images.menuhide}
                  size={wp(3)}
                />
              </View>
              <Text>{Strings.to}</Text>
              <View style={styles.dropdown}>
                <Label label={item.toTime} medium />
                <Icon
                  source={item.opne ? Images.menushow : Images.menuhide}
                  size={wp(3)}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Button
        onPress={() => navigation.navigate('SelectServices')}
        title={Strings.saveLocationTime}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default BusinessTiming;
