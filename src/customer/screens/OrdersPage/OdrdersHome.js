//import liraries
//import liraries
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Modal,
  Platform,
} from 'react-native';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Strings} from '../../theme/strings';
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

import {CheckBox} from 'react-native-elements';
import {BusinessPageStyles} from './BusinessPageStyles';
import SemiBold from '../../components/HomeComponent/SemiBold';
import PriceAmt from '../../components/BusinessPage/PriceAmt';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../theme/Images';
import RadioButton from '../../components/SearchComponents/RadioButton';
import {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Button from '../../components/AuthComponents/FilledButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Avatar} from 'react-native-elements';
import StarRating from '../../components/BusinessPage/StarRating';
import MapView from 'react-native-maps';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderText from '../../components/AuthComponents/HeaderText';
import {HomeStyles} from '../HomeScreens/HomeStyles';
import UpcomingOrder from './UpcomingOrder';
import PreviousOrder from './PreviouseOrder';
import {OrderStyles} from './OderStyles';

// create a component
const OrdersHome = () => {
  const Tab = createMaterialTopTabNavigator();

  function HomeScreen() {
    <View style={{flex: 1}}>
      <Text>MyHomeScreen</Text>
    </View>;
  }

  function FavScreen() {
    <View style={{flex: 1}}>
      <Text>MyFavScreen</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <HeaderText
        Style={{marginTop: hp(2), marginLeft: wp(5)}}
        FontSize={hp(2.8)}
        TopText={'Orders'}
      />
      <Tab.Navigator
        tabBarOptions={{
          pressColor: 'transparent',
        }}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.lightgrey,
            borderRadius: 20,
            alignSelf: 'center',
            width: wp(90),
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
          tabBarItemStyle: {
            margin: -5,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Selling"
          component={UpcomingOrder}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={[
                  OrderStyles.TabView,
                  {
                    backgroundColor: focused ? Colors.white : Colors.lightgrey,
                    shadowOffset: focused
                      ? {width: 2, height: 5}
                      : {width: 0, height: 0},
                    shadowOpacity: focused ? 0.2 : 0,
                    elevation: focused ? 3 : 0,
                  },
                ]}>
                <SemiBold FontSize={hp(2.1)} EnterText={'Upcoming'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Buying"
          component={PreviousOrder}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={[
                  OrderStyles.TabView,
                  {
                    backgroundColor: focused ? Colors.white : Colors.lightgrey,
                    shadowOffset: focused
                      ? {width: 2, height: 5}
                      : {width: 0, height: 0},
                    shadowOpacity: focused ? 0.2 : 0,
                    elevation: focused ? 3 : 0,
                  },
                ]}>
                <SemiBold FontSize={hp(2.1)} EnterText={'Previous'} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: hp(5),
  },
});

//make this component available to the app
export default OrdersHome;
