import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
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
      <View style={{height: hp(75), backgroundColor: Colors.white}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {DATA.map((item, index) => (
            <View key={index}>
              <View style={styles.inputWrapper}>
                <Label
                  label={item.day}
                  bold
                  size={hp(2)}
                  color={Colors.primary_dark}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: wp(25),
                  }}>
                  <Label
                    label={item.opne ? 'Open' : 'Close'}
                    medium
                    color={Colors.primary_dark}
                  />
                  <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    color={Colors.primary}
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.dropdown}>
                  <Label
                    label={item.fromTime}
                    medium
                    color={Colors.lightGray3}
                  />
                  <Icon
                    source={item.opne ? Images.menushow : Images.menuhide}
                    size={wp(3)}
                  />
                </View>
                <Label label={Strings.to} medium color={Colors.lightGray3} />
                <View style={styles.dropdown}>
                  <Label label={item.toTime} medium color={Colors.lightGray3} />
                  <Icon
                    source={item.opne ? Images.menushow : Images.menuhide}
                    size={wp(3)}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
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
