import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Strings} from '../../../theme/strings';
import {Images} from '../../../theme/images';
import {Colors} from '../../../theme/colors';
import {styles} from '../styles';
import Header from '../../../components/Header';
import Label from '../../../components/Label';
import Icon from '../../../components/Icon';
import Row from '../../../components/Row';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';

const BookingDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <Header
        headerTitle={Strings.orderDetail}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{paddingHorizontal: wp(5)}}>
          <Label label={Strings.customerInfo} left bold size={hp(3)} paddingVertical={hp(2)}/>
          <View style={[styles.row, styles.customerView]}>
            <Icon source={Images.customer} size={hp(10)} radius={100} />
            <View
              style={{
                marginLeft: wp(5),
                width: wp(60),
                backgroundColor: Colors.white,
              }}>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Label label="Kynthia Johnson" left bold size={hp(2)} />
                <View style={styles.row}>
                  <Icon source={Images.rating} size={wp(4)} />
                  <Label label="5.0" left bold marginLeft={wp(2)} />
                </View>
              </View>
              <Label
                label="kynthiajohnson@email.com"
                left
                marginBottom={hp(1)}
                color={Colors.lightGray3}
              />
              <Label
                label="+123 456 7890"
                left
                marginBottom={hp(1)}
                color={Colors.lightGray3}
              />
            </View>
          </View>
          <View style={[styles.line, styles.detailView]}>
            <Label label={Strings.detail} left bold size={hp(3)} />
            <View style={styles.customerView}>
              <Row title={Strings.service} subTitle="Straight Hair" />
              <Row title={Strings.price} subTitle="$60.00" />
              <Row title={Strings.duration} subTitle="Straight Hair" />
              <Row
                title={Strings.appointmentDate}
                subTitle="29th March, 2022"
              />
              <Row title={Strings.appointmentTime} subTitle="12:00PM-1:00PM" />
              <Row title={Strings.professional} subTitle="Linda Johnson" />
              <Row title={Strings.serviceLocation} subTitle="Your location" />
              <View style={[styles.line, styles.detailView]}>
                <Label
                  label={Strings.noteCustomer}
                  left
                  size={hp(2)}
                  marginBottom={hp(1)}
                  fontWeight="500"
                />
                <Label label={Strings.note} left bold size={hp(2)} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingDetails;
