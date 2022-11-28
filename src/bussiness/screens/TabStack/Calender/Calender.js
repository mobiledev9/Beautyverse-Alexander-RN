import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import moment from 'moment';
import RNCalendarEvents from "react-native-calendar-events";
import {Colors} from '../../../theme/colors';
import CalendarStrip from 'react-native-calendar-strip';
import CalendarHeader from '../../../components/CalendarHeader';

const Calender = ({navigation, route}) => {
  const {params} = route;
  console.log(params);
  return (
    <SafeAreaView>
      <CalendarHeader
        headerTitle={moment(params.date).format('MMMM DD, YYYY')}
        onPressBack={() => navigation.goBack()}
      />

      <CalendarStrip
        scrollable
        style={{height: 70, paddingTop: 0, paddingBottom: 10}}
        calendarColor={Colors.white}
        calendarHeaderStyle={{color: 'white'}}
        dateNumberStyle={{color: Colors.primary_dark}}
        dateNameStyle={{color: Colors.primary_dark}}
        leftSelector={[]}
        rightSelector={[]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Calender;
