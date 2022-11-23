import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import PlacesInput from 'react-native-places-input';
import {styles} from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {Strings} from '../../../theme/strings';
import {Colors} from '../../../theme/colors';
import SearchField from '../../../components/SearchField';
import {Images} from '../../../theme/images';
import {Config} from '../../../../../config';

const AddLocation = ({navigation}) => {
  const [isSearchModal, setSerachModal] = useState(false);
  const [latitude, setLatitude] = useState(-37.8136);
  const [longitude, setLongitude] = useState(144.9631);
  const [place, setPlace] = useState('');

  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.businessAddress}
      />
      <MapView
        style={styles.mapView}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsMyLocationButton={true}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}>
          <Image source={Images.marker} style={styles.marker} />
        </Marker>
      </MapView>
      <View style={styles.bottomView}>
        <SearchField
          onTouchStart={() => setSerachModal(true)}
          // onChangeText={text => setSerachModal(true)}
          value={place}
        />
        <Button
          onPress={() =>
            navigation.navigate('Addressdetails', {
              latitude: latitude,
              longitude: longitude,
              place: place ? place : 'Melbourne, VIC, Australia',
            })
          }
          title={Strings.selectLocation}
          bgColor={Colors.primary}
          titleColor={Colors.white}
          btnStyle={styles.mapBtn}
        />
      </View>

      <Modal visible={isSearchModal} animationType="slide">
        <SafeAreaView style={styles.serachModal}>
          <View style={styles.serachWrapper}>
            <TouchableOpacity onPress={() => setSerachModal(false)}>
              <Image source={Images.back} style={styles.backBtn} />
            </TouchableOpacity>
            <PlacesInput
              googleApiKey={Config.GOOGLE_API_KEY}
              placeHolder={Strings.searchLocation}
              stylesInput={styles.searchView}
              onSelect={place => {
                setLatitude(place.result.geometry.location.lat);
                setLongitude(place.result.geometry.location.lng);
                setPlace(place.result.formatted_address);
                setSerachModal(false);
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default AddLocation;
