import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../bussiness/screens/AuthScreens/ProfileScreen';
import AddLocation from '../bussiness/screens/AuthScreens/OnBoarding/AddLocation';
import Addressdetails from '../bussiness/screens/AuthScreens/OnBoarding/Addressdetails';
import BusinessTiming from '../bussiness/screens/AuthScreens/OnBoarding/BusinessTiming';
import SelectServices from '../bussiness/screens/AuthScreens/OnBoarding/SelectServices';
import BottomTabs from '../bussiness/screens/TabStack/BottomTabs';
import BookingDetails from '../bussiness/screens/TabStack/BookingDetails/BookingDetails';
import PaymentMethod from '../bussiness/screens/AuthScreens/Payment/PaymentMethod';
import AddCard from '../bussiness/screens/AuthScreens/Payment/AddCard';


const Stack = createNativeStackNavigator();

export function BusinessStack() {
  const screens = [
    {
      name: 'ProfileScreen',
      component: ProfileScreen,
    },
    {
      name: 'AddLocation',
      component: AddLocation,
    },
    {
      name: 'Addressdetails',
      component: Addressdetails,
    },
    {
      name: 'BusinessTiming',
      component: BusinessTiming,
    },
    {
      name: 'SelectServices',
      component: SelectServices,
    },
    {
      name: 'BottomTabs',
      component: BottomTabs,
    },
    {
      name: 'BookingDetails',
      component: BookingDetails,
    },
    {
      name: 'PaymentMethod',
      component: PaymentMethod,
    },
    {
      name: 'AddCard',
      component: AddCard,
    },
  ];
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
}
