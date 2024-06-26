import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const GooglePlacesInput = () => {
    return (
      <GooglePlacesAutocomplete
        placeholder='Where From?'
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        enablePoweredByContainer={false}
        minLength={2} // minimum length of text to search
        onPress={(data, details = null) => {
            dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
            }))
            dispatch(setDestination(null))
        }}
        fetchDetails={true}
        returnKeyType={'search'}
        query={{
          key: "",
          language: 'en',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
       <View style={tw`p-5`}>
          <Image
            style={{ 
                width:100, height:100, resizeMode:'contain'
            }} 
            source={{
                uri:"https://links.papareact.com/gzs"
            }}
          />
          <GooglePlacesInput />
          <NavOptions />
          <NavFavorites />
       </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color:'blue'
    }
})