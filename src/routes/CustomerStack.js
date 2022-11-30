import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddProfile from '../customer/screens/SplashScreen/AuthScreens/AddProfile';
import HomeSplashScreen from '../customer/screens/HomeScreens/HomeSplashScreen';
import BottomTabs from '../customer/screens/HomeScreens/BottomTabs';
import HomeScreen from '../customer/screens/HomeScreens/HomeScreen';
import AllCategories from '../customer/screens/HomeScreens/AllCategories';
import ActivePromotions from '../customer/screens/HomeScreens/ActivePromotions';
import TopBusinesses from '../customer/screens/HomeScreens/Topbusinesses';
import AddMethod from '../customer/screens/SplashScreen/AuthScreens/OnboardingPayment/AddMethod';
import AddDebit from '../customer/screens/SplashScreen/AuthScreens/OnboardingPayment/AddDebit';
import MainSearch from '../customer/screens/SearchScreens/MainSearch';
import BusinessPage from '../customer/screens/BusinessPage/BusinessPage';
import HairProf from '../customer/screens/BusinessPage/Categories/HairProf';
import SeePhotos from '../customer/screens/BusinessPage/SeePhotos';
import Reviews from '../customer/screens/BusinessPage/Reviews';
import BookService from '../customer/screens/BusinessPage/BookService';
import AddAddress from '../customer/screens/BusinessPage/AddAddress';
import InsertAdd from '../customer/screens/BusinessPage/InsertAdd';
import SplashScreen from '../customer/screens/SplashScreen/SplashScreen';
import OrdersHome from '../customer/screens/OrdersPage/OdrdersHome';
import Checkout from '../customer/screens/BusinessPage/Checkout';
import ConfirmBooking from '../customer/screens/BusinessPage/ConfirmBooking';
import OrderDetails from '../customer/screens/OrdersPage/OrderDetails';
import RescheduleOrder from '../customer/screens/OrdersPage/RescheduleOder';
import ProfileHome from '../customer/screens/ProfileScreens/ProfileHome';
import MyProfile from '../customer/screens/ProfileScreens/MyProfile/MyProfile';
import UserAddresses from '../customer/screens/ProfileScreens/MyProfile/UserAddresses';
import EditProfile from '../customer/screens/ProfileScreens/MyProfile/EditProfile';
import ChangePass from '../customer/screens/ProfileScreens/MyProfile/Changepass';
import WishlistItems from '../customer/screens/ProfileScreens/Wishlist/WishlistItems';

const Stack = createNativeStackNavigator();

export function CustomerStack() {
  const screens = [
    {
      name: 'AddProfile',
      component: AddProfile,
    },
    {
      name: 'WishlistItems',
      component: WishlistItems,
    },
    {
      name: 'ProfileHome',
      component: ProfileHome,
    },
    {
      name: 'MyProfile',
      component: MyProfile,
    },
    {
      name: 'ChangePass',
      component: ChangePass,
    },
    {
      name: 'EditProfile',
      component: EditProfile,
    },
    {
      name: 'UserAddresses',
      component: UserAddresses,
    },

   

    {
      name: 'OrderDetails',
      component: OrderDetails,
    },
    {
      name: 'RescheduleOrder',
      component: RescheduleOrder,
    },

    {
      name: 'BottomTabs',
      component: BottomTabs,
    },
    {
      name: 'OrdersHome',
      component: OrdersHome,
    },

    {
      name: 'ConfirmBooking',
      component: ConfirmBooking,
    },
    {
      name: 'Checkout',
      component: Checkout,
    },

    {
      name: 'AddAddress',
      component: AddAddress,
    },

    {
      name: 'InsertAdd',
      component: InsertAdd,
    },
    {
      name: 'BookService',
      component: BookService,
    },
    {
      name: 'BusinessPage',
      component: BusinessPage,
    },
    {
      name: 'SeePhotos',
      component: SeePhotos,
    },

    {
      name: 'Reviews',
      component: Reviews,
    },

    {
      name: 'HairProf',
      component: HairProf,
    },

    {
      name: 'MainSearch',
      component: MainSearch,
    },
    {
      name: 'AddDebit',
      component: AddDebit,
    },

    {
      name: 'AddMethod',
      component: AddMethod,
    },
    {
      name: 'TopBusinesses',
      component: TopBusinesses,
    },

    {
      name: 'ActivePromotions',
      component: ActivePromotions,
    },

    {
      name: 'AllCategories',
      component: AllCategories,
    },
    {
      name: 'HomeScreen',
      component: HomeScreen,
    },

    {
      name: 'HomeSplashScreen',
      component: HomeSplashScreen,
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
