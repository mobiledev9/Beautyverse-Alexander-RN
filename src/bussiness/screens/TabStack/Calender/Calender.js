import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import moment from 'moment';
import { Colors } from '../../../theme/colors';
import CalendarStrip from 'react-native-calendar-strip';
import CalendarHeader from '../../../components/CalendarHeader';

const Calender = ({navigation}) => {

  return (
    <SafeAreaView>
      <CalendarHeader
        headerTitle="August 15, 2022"
        onPressBack={() => navigation.goBack()}
      />

      <CalendarStrip
        scrollable
        style={{height: 70, paddingTop: 0, paddingBottom: 10}}
        calendarColor={Colors.white}
        calendarHeaderStyle={{color: 'white'}}
        dateNumberStyle={{color: Colors.primary_dark}}
        dateNameStyle={{color: Colors.primary_dark}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Calender;
