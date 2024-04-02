import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';
import NavFavorites from './NavFavorites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const GooglePlacesInput = () => {
    return (
      <GooglePlacesAutocomplete
        placeholder='Where to?'
        styles={toInputBoxStyles}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        enablePoweredByContainer={false}
        minLength={2} // minimum length of text to search
        onPress={(data, details = null) => {
            dispatch(setDestination({
                location: details.geometry.location,
                description: data.description
            }))
            navigation.navigate('RideOptionsCard')
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
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Moring, Gaurav</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
           <GooglePlacesInput />
        </View>
        <NavFavorites />
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
         <TouchableOpacity 
         onPress={() => navigation.navigate('RideOptionsCard')}
         style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
           <Icon name="car" type="font-awesome" color="white" size={16} />
           <Text style={tw`text-center text-white`}>Rides</Text>
         </TouchableOpacity>

         <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
           <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
           <Text style={tw`text-center`}>Eats</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})