//import liraries
import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Images} from '../../theme/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Searchstyles} from '../SearchScreens/SearchStyles';
import {Colors} from '../../theme/colors';
import MapSearch from '../../components/SearchComponents/MapSearch';
import Button from '../../components/AuthComponents/FilledButton';
import {Strings} from '../../theme/strings';
import {BusinessPageStyles} from './BusinessPageStyles';
import PlacesInput from 'react-native-places-input';
import {Config} from '../../../../config';

// create a component
const AddAddress = ({navigation}) => {
  const map = useRef();

  const [isSearchModal, setSearchModal] = useState(false);
  const [latitude, setLatitude] = useState(-37.8136);
  const [longitude, setLongitude] = useState(144.9631);
  const [place, setPlace] = useState('');

  const gotToMyLocation = () => {
    console.log('gotToMyLocation is called');
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        console.log('curent location: ', coords);
        console.log(this.map);
        if (map) {
          console.log('curent location: ', coords);
          map.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        }
      },
      error => alert('Error: Are location services on?'),
      {enableHighAccuracy: true},
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        followsUserLocation={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}>
          <Image
            source={Images.mapuser}
            style={{height: wp(15), width: wp(15)}}
          />
        </Marker>
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: hp(2),
          alignItems: 'center',
          left: wp(5),
        }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{alignSelf: 'flex-end', marginBottom: hp(2)}}>
          <Image
            resizeMode="contain"
            style={{
              height: hp(8),
              width: hp(8),
            }}
            source={Images.mylocation}
          />
        </TouchableOpacity>
        <MapSearch
          onTouchStart={() => {
            setSearchModal(true);
          }}
          // onChangeText={text => setSearchModal(true)}
          value={place}
        />
        <Button
          onPress={() => {
            navigation.navigate('InsertAdd', {
              latitude: latitude,
              longitude: longitude,
              place: place ? place : 'Melbourne, VIC, Australia',
            });
          }}
          titleColor={Colors.white}
          btnStyle={{width: wp(90)}}
          bgColor={Colors.primary}
          title={Strings.selectLoc}
        />
      </View>

      <Modal visible={isSearchModal} animationType="slide">
        <SafeAreaView style={BusinessPageStyles.serachModal}>
          <View style={BusinessPageStyles.serachWrapper}>
            <TouchableOpacity
              onPress={() => {
                setSearchModal(false);
              }}
              hitSlop={{left: 100, right: 100, top: 100, bottom: 100}}
              // style={{marginLeft:10}}
            >
              <Image
                resizeMode="contain"
                style={{height: hp(4), width: hp(4)}}
                source={Images.back}
              />
            </TouchableOpacity>
            <PlacesInput
              googleApiKey={Config.GOOGLE_API_KEY}
              placeHolder={Strings.searchLocation}
              stylesInput={BusinessPageStyles.searchView}
              onSelect={place => {
                setLatitude(place.result.geometry.location.lat);
                setLongitude(place.result.geometry.location.lng);
                setPlace(place.result.formatted_address);
                setSearchModal(false);
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
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
export default AddAddress;
