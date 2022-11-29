import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import {Images} from '../../../theme/images';
import {FONTS} from '../../../theme/fonts';
import Input from '../../../components/Input';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import RadioButton from '../../../components/RadioButton';
import Icon from '../../../components/Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const NewService = ({navigation, route}) => {
  const {params} = route;
  const [serviceName, setServiceName] = useState('');
  const [serviceCharge, setServiceCharge] = useState('');
  const [duration, serDuration] = useState('');
  const [addOnName, setAddOnName] = useState('');
  const [sCharge, setSCharge] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [checkYes, setCheckYes] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [addOns, setAddOns] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={Strings.addService}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.serviceView}>
          <Input
            value={serviceName}
            onChangeText={text => setServiceName(text)}
            label={Strings.serviceName}
            placeholder={Strings.serviceName}
            width={wp(90)}
            size={hp(1.9)}
          />
          <View style={styles.inputWrapper}>
            <Input
              value={serviceCharge}
              onChangeText={text => setServiceCharge(text)}
              label={Strings.serviceCharges}
              placeholder={Strings.serviceCharges}
              width={wp(43)}
              size={hp(1.9)}
            />
            <Input
              value={duration}
              onChangeText={text => serDuration(text)}
              label={Strings.timeDuration}
              placeholder={Strings.timeDuration}
              width={wp(43)}
              size={hp(1.9)}
            />
          </View>
          <Label
            label={Strings.serviceAvailableAt}
            left
            fontFamily={FONTS.InterBold}
            size={hp(2)}
            lineHeight={hp(3)}
          />
          <View
            style={{
              ...styles.row,
              ...styles.radioView,
            }}>
            <RadioButton
              label={Strings.yes}
              checked={checkYes}
              onPress={() => {
                setCheckYes(true);
                setCheckNo(false);
              }}
            />
            <RadioButton
              label={Strings.no}
              checked={checkNo}
              onPress={() => {
                setCheckNo(true);
                setCheckYes(false);
              }}
            />
          </View>
          {addOns.length > 0 ? (
            <View style={styles.addOnsView}>
              <TouchableOpacity style={styles.moreBtn}>
                <Icon source={Images.plus} size={hp(5)} />
                <Label
                  label={Strings.addMore}
                  color={Colors.primary}
                  size={hp(2)}
                  fontFamily={FONTS.InterSemiBold}
                  
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.addOnsView}>
              <Label
                label={Strings.addOnsOptional}
                color={Colors.primary_dark}
                size={hp(2)}
                bold
                left
                marginBottom={hp(2)}
              />
              <Input
                value={addOnName}
                onChangeText={text => setAddOnName(text)}
                label={Strings.addOnName}
                placeholder={Strings.addOnName}
                width={wp(90)}
                size={hp(1.9)}
              />
              <View style={styles.inputWrapper}>
                <Input
                  value={sCharge}
                  onChangeText={text => setSCharge(text)}
                  label={Strings.serviceCharges}
                  placeholder={Strings.serviceCharges}
                  width={wp(43)}
                  size={hp(1.9)}
                />
                <Input
                  value={timeDuration}
                  onChangeText={text => setTimeDuration(text)}
                  label={Strings.timeDuration}
                  placeholder={Strings.timeDuration}
                  width={wp(43)}
                  size={hp(1.9)}
                />
              </View>
              <Button
                title={Strings.add}
                bgColor={Colors.lightGray2}
                titleColor={Colors.primary}
                btnStyle={{width: wp(90)}}
              />
            </View>
          )}
          <Button
            title={Strings.saveService}
            bgColor={Colors.primary}
            titleColor={Colors.white}
            btnStyle={styles.addBtn}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewService;
