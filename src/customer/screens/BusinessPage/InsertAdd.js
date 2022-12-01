//import liraries
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import HeaderTop from '../../components/HomeComponent/headerTop';
import {Strings} from '../../theme/strings';
import {BusinessPageStyles} from './BusinessPageStyles';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Images} from '../../theme/Images';
import SemiBold from '../../components/HomeComponent/SemiBold';
import {Colors} from '../../theme/colors';
import AnimatedInput from '../../components/BusinessPage/AnimatedInput';
import Button from '../../components/AuthComponents/FilledButton';

// create a component
const InsertAdd = ({navigation, route}) => {
  const {params} = route;

  const [latitude, setLatitude] = useState(params.latitude);
  const [longitude, setLongitude] = useState(params.longitude);

  const [Index, SetIndex] = useState(0);

  console.log(params);

  const Locations = [
    {
      img: Images.homepink,
      name: 'Home',
      imgfill: Images.homebrown,
    },
    {
      img: Images.workpink,
      name: 'Work',
      imgfill: Images.workbrown,
    },
    {
      img: Images.locpink,
      name: 'Other',
      imgfill: Images.locbrown,
    },
  ];

  const RenderLocation = ({item,index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          SetIndex(index);
          console.log(index,'===actual==');
          // SetselectedLoc(item);
          console.log(Index,'===Index===');
        }}
        style={{alignItems: 'center', marginRight: wp(8)}}>
           <Image
        resizeMode="contain"
        style={{height: hp(7.5), width: hp(7.5)}}
        source={
          item.img
        }
      />
      
           {/* { Index.includes(index) ?

         ( <Image
          resizeMode="contain"
          style={{height: hp(7.5), width: hp(7.5)}}
          source={
            item.imgfill
          }
        /> ):(
       <Image
        resizeMode="contain"
        style={{height: hp(7.5), width: hp(7.5)}}
        source={
          item.img
        }
      /> )
      } */}
        <Text style={{fontSize: 15, color: Colors.primaryDark, marginTop: 2}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderTop
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={Strings.addaddress}
      />
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{flexGrow: 1}}>
        <View style={BusinessPageStyles.headerMapView}>
          <MapView
            style={BusinessPageStyles.map}
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
              <Image
                source={Images.mapuser}
                style={BusinessPageStyles.marker}
              />
            </Marker>
          </MapView>
          <View style={BusinessPageStyles.editView}>
            <View>
              <SemiBold FontSize={hp(2.3)} EnterText={'Location Name'} />
              <Text style={{color: Colors.darkpink}}>{params.place}okok</Text>
            </View>
            <Image style={{height: hp(4), width: hp(4)}} source={Images.edit} />
          </View>
        </View>

        <View style={BusinessPageStyles.inputWrapper}>
          <AnimatedInput
            label={Strings.flatNo}
            placeholder={Strings.flatVilla}
            width={wp(43)}
          />
          <AnimatedInput
            label={Strings.building}
            placeholder={Strings.buildingName}
            width={wp(43)}
          />
        </View>
        <View style={BusinessPageStyles.inputWrapper}>
          <AnimatedInput
            label={Strings.street}
            placeholder={Strings.streetName}
            width={wp(43)}
          />
          <AnimatedInput
            label={Strings.area}
            placeholder={Strings.areaName}
            width={wp(43)}
          />
        </View>

        <AnimatedInput
          label={Strings.directions}
          placeholder={Strings.directions}
          width={wp(90)}
        />
        <View
          style={{
            alignSelf: 'flex-start',
            marginLeft: wp(5),
            marginVertical: hp(2),
          }}>
          <FlatList
            horizontal={true}
            data={Locations}
            renderItem={RenderLocation}
          />
        </View>
      </ScrollView>
      <Button
        bgColor={Colors.primary}
        title={Strings.svLoc}
        titleColor={Colors.white}
        btnStyle={{
          width: wp(90),
          position: 'absolute',
          bottom: hp(2),
          alignSelf: 'center',
        }}
      />
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
export default InsertAdd;
