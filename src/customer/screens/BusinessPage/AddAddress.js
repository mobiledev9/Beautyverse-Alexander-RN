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

import {Config} from '../../../../config';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles} from '../../../bussiness/screens/AuthScreens/OnBoarding/styles';
import Icon from '../../../bussiness/components/Icon';
import Label from '../../../bussiness/components/Label';

// create a component
const AddAddress = ({navigation,route}) => {

  console.log(route.params.screen,'===route===');

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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
      <TouchableOpacity
      onPress={()=>{
        navigation.goBack();
      }}
        style={{
          position: 'absolute',
          top: hp(5),
          left: wp(5),
          shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.5,
          elevation: 4,
        }}>
        <Image
          resizeMode="contain"
          style={{
            height: wp(15),
            width: wp(15),
          }}
          source={Images.backround}
        />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          bottom: hp(2),
          alignItems: 'center',
          left: wp(5),
        }}>
        <TouchableOpacity style={BusinessPageStyles.maplocbutton}>
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
        <SafeAreaView style={styles.serachModal}>
          <View style={styles.serachWrapper}>
            <TouchableOpacity
              onPress={() => setSearchModal(false)}
              style={{paddingTop: hp(2)}}>
              <Image source={Images.back} style={styles.backBtn} />
            </TouchableOpacity>

            <GooglePlacesAutocomplete
              GooglePlacesDetailsQuery={{fields: 'geometry'}}
              fetchDetails={true}
              textInputProps={{
                placeholder: Strings.searchLocation,
                placeholderTextColor: Colors.primaryDark,
              }}
              onPress={(data, details = null) => {
                const geometry = details?.geometry?.location;
                setLongitude(geometry.lng);
                setLatitude(geometry.lat);
                setPlace(data.description);
                setSearchModal(false);
              }}
              styles={{
                listView: {
                  width: '100%',
                },
                container: {
                  overflow: 'hidden',
                  backgroundColor: Colors.white,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginLeft: wp(3),
                  flex: 1,
                },
                textInputContainer: {
                  backgroundColor: Colors.lightgrey,
                  borderRadius: 100,
                  paddingHorizontal: wp(4),
                  borderRadius: 30,
                },
                textInput: {
                  backgroundColor: Colors.lightGray,
                  marginLeft: wp(2),
                  color: Colors.primaryDark,
                },
              }}
              query={{
                key: Config.GOOGLE_API_KEY,
                language: 'en',
              }}
              renderRow={result => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: Colors.lightGray,
                      height: hp(5),
                      width: hp(5),
                      borderRadius: 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon source={Images.location} size={hp(3)} />
                  </View>

                  <View style={{marginLeft: wp(3)}}>
                    <Label
                      label={result.description}
                      left
                      bold
                      size={hp(2)}
                      color={Colors.primary_dark1}
                    />
                    <Label
                      label={Strings.detailedLocation}
                      left
                      size={hp(1.9)}
                      color={Colors.gray}
                    />
                  </View>
                </View>
              )}
              renderLeftButton={() => (
                <View style={{alignSelf: 'center'}}>
                  <Icon source={Images.search} size={hp(3)} />
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

// define your styles

//make this component available to the app
export default AddAddress;
