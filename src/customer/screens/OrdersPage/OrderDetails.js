//import liraries
import React, {Component} from 'react';
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
import {Colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {BusinessPageStyles} from '../BusinessPage/BusinessPageStyles';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {SafeAreaView} from 'react-native-safe-area-context';
import ServiceDetails from '../../components/BusinessPage/ServiceDetails';
import {Images} from '../../theme/Images';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const OrderDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
         <HeaderTop 
         onPress={()=>{
            navigation.goBack();
         }}
         HeaderText={'Order Details'} />
      <ScrollView style={{flexGrow: 1}}>
       
        <View
          style={[
            BusinessPageStyles.detailsmainview,
            {borderTopWidth: 0, marginTop: 0},
          ]}>
          <SemiBold
            FontSize={hp(2.8)}
            AllStyle={{marginBottom: hp(1.5)}}
            EnterText={'Details'}
          />
          <View style={BusinessPageStyles.servicedetailscard}>
            <ServiceDetails
              maintext={'Business'}
              detailstext={'Kynthia’s Hair Salon'}
            />
            <ServiceDetails
              maintext={'Service'}
              detailstext={'Straight Hair'}
            />
            <ServiceDetails
              showprice="show"
              maintext={'Price'}
              Amounttext={'$60.00'}
            />
            <ServiceDetails maintext={'Duration'} detailstext={'1:00'} />
            <ServiceDetails
              maintext={'Appointment Date'}
              detailstext={'29th March, 2022'}
            />
            <ServiceDetails
              maintext={'Appointment Time'}
              detailstext={'12:00PM-1:00PM'}
            />
            <ServiceDetails
              maintext={'Professional'}
              detailstext={'Linda Johnson'}
            />
            <ServiceDetails
              maintext={'Service Location'}
              detailstext={'Your location'}
            />
          </View>
        </View>
        <View style={BusinessPageStyles.costCard}>
          <SemiBold
            FontSize={hp(2.8)}
            AllStyle={{marginBottom: hp(1.5)}}
            EnterText={'Cost Breakdown'}
          />
          <View style={BusinessPageStyles.servicedetailscard}>
            <ServiceDetails
              StyleView={{marginVertical: 8}}
              AmountStyle={{color: Colors.primaryDark}}
              showprice="show"
              maintext={'Price'}
              Amounttext={'$60.00'}
            />
            <ServiceDetails
              StyleView={{marginVertical: 8}}
              maintext={'Visiting Charges'}
              AmountStyle={{color: Colors.primaryDark}}
              showprice="show"
              Amounttext={'$10.00'}
            />
            <View style={BusinessPageStyles.borderwidthcost}></View>
            <ServiceDetails
              fontFamily={'Inter-Bold'}
              showprice="show"
              maintext={'Total'}
              Amounttext={'$60.00'}
            />
          </View>
        </View>

        <SemiBold
            FontSize={hp(2.8)}
            AllStyle={{marginLeft:wp(5),marginTop:hp(1)}}
            EnterText={'Address'}
          />

        <View style={BusinessPageStyles.headerMapView}>
          <MapView
            style={BusinessPageStyles.map}
            region={{
              latitude: -37.8136,
              longitude: 144.9631,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}>
            <Marker
              coordinate={{
                latitude: -37.8136,
                longitude: 144.9631,
              }}>
              <Image
                source={Images.mapuser}
                style={BusinessPageStyles.marker}
              />
            </Marker>
          </MapView>
          <View style={BusinessPageStyles.editView}>
            <View>
              <SemiBold FontSize={hp(2.3)} EnterText={'Location Name'} />
              <Text style={{color: Colors.darkpink}}>Lock Street</Text>
            </View>
          </View>
        </View>

        <View style={BusinessPageStyles.costCard}>
            <SemiBold
              FontSize={hp(2.8)}
              AllStyle={{marginTop:hp(1)}}
              EnterText={'Payment Method'}
            />
        <View style={{flexDirection:'row',alignItems:'center',padding:10,width:wp(90),alignSelf:'center',borderRadius:15,   backgroundColor: Colors.white,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    elevation: 2,}}>
            <Image
            resizeMode='contain'
            style={{height:hp(6),width:hp(6),marginRight:wp(5)}}
            source={Images.Debit}
            />
            <SemiBold
            FontSize={hp(2.2)}
            EnterText={'**** **** **** 1234'}
            />
          </View>
        
        </View>
         

      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default OrderDetails;
