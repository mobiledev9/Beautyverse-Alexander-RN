import React, {useState} from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import Header from '../../../components/Header';
import MapView, {Marker} from 'react-native-maps';
import {Strings} from '../../../theme/strings';
import {styles} from './styles';
import {Images} from '../../../theme/images';
import Icon from '../../../components/Icon';
import Label from '../../../components/Label';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../theme/layout';
import {Colors} from '../../../theme/colors';

const Addressdetails = ({navigation, route}) => {
  const {params} = route;
  const [latitude, setLatitude] = useState(params.latitude);
  const [longitude, setLongitude] = useState(params.longitude);
  console.log(params);
  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPressBack={() => navigation.goBack()}
        headerTitle={Strings.addressDetails}
      />
      <View style={styles.headerMapView}>
        <MapView
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}>
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}>
            <Image source={Images.marker} style={styles.marker} />
          </Marker>
        </MapView>
        <View style={styles.editView}>
          <View>
            <Label label={Strings.locationName} bold left/>
            <Label label={params.place} medium />
          </View>
          <Icon source={Images.edit} size={wp(6)} />
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <Input
          label={Strings.flatNo}
          placeholder={Strings.flatVilla}
          width={wp(43)}
        />
        <Input
          label={Strings.building}
          placeholder={Strings.buildingName}
          width={wp(43)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Input
          label={Strings.street}
          placeholder={Strings.streetName}
          width={wp(43)}
        />
        <Input
          label={Strings.area}
          placeholder={Strings.areaName}
          width={wp(43)}
        />
      </View>
      <Input
        label={Strings.directions}
        placeholder={Strings.directions}
        width={wp(90)}
      />
      <Button
        onPress={() => navigation.navigate('BusinessTiming')}
        title={Strings.next}
        bgColor={Colors.primary}
        titleColor={Colors.white}
        btnStyle={styles.nextBtn}
      />
    </SafeAreaView>
  );
};

export default Addressdetails;
