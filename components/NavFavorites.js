import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
]
const NavFavorites = () => {
  return (
   <FlatList 
     data = {data}
     ItemSeparatorComponent={() => (
       <View style={[tw`bg-gray-200`, {height: 0.5}]} />
     )}
     keyExtractor = {item => item.id}
     renderItem = {({item}) => (
       <TouchableOpacity>
         <View style={tw`flex-row items-center p-5`}>
           <Icon 
             style={tw`mr-4 rounded-full bg-gray-300 p-3`}
             name={item.icon}
             type="ionicon"
             color="white"
             size={18}
           />
           <View>
             <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
             <Text style={tw`text-gray-500`}>{item.destination}</Text>
           </View>
         </View>
       </TouchableOpacity>
     )}
   />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})