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
import BookService from '../bussiness/screens/TabStack/BookService/BookService';
import Calender from '../bussiness/screens/TabStack/Calender/Calender';
//Staff
import Professionals from '../bussiness/screens/TabStack/Staff/Professionals';
import HairProfessionals from '../bussiness/screens/TabStack/Staff/HairProfessionals';
import AddProfessional from '../bussiness/screens/TabStack/Staff/AddProfessional';
import AddHairProfessionals from '../bussiness/screens/TabStack/Staff/AddHairProfessionals';
import ExistProfessionals from '../bussiness/screens/TabStack/Staff/existProfessionals';
//Services
import Services from '../bussiness/screens/TabStack/Services/Services';
import SelectService from '../bussiness/screens/TabStack/Services/SelectService';
import AddService from '../bussiness/screens/TabStack/Services/AddService';
import NewService from '../bussiness/screens/TabStack/Services/NewService';
//Profile
import Profile from '../bussiness/screens/TabStack/Profile/Profile';

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
    {
      name: 'BookService',
      component: BookService,
    },
    {
      name: 'Calender',
      component: Calender,
    },
    {
      name: 'Professionals',
      component: Professionals,
    },
    {
      name: 'HairProfessionals',
      component: HairProfessionals,
    },
    {
      name: 'AddProfessional',
      component: AddProfessional,
    },
    {
      name: 'AddHairProfessionals',
      component: AddHairProfessionals,
    },
    {
      name: 'ExistProfessionals',
      component: ExistProfessionals,
    },
    {
      name: 'Services',
      component: Services,
    },
    {
      name: 'SelectService',
      component: SelectService,
    },
    {
      name: 'AddService',
      component: AddService,
    },
    {
      name: 'NewService',
      component: NewService,
    },
    {
      name: 'Profile',
      component: Profile,
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
