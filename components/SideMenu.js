import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

export default function SideMenu(props) {
  return (
    <View style={tw`flex-1 px-2 py-10`}>
      <DrawerContentScrollView {...props}>
        <View style={tw`flex items-center mb-6`}>
          <Image source={require('../assets/icon.png')} style={tw`w-10 h-10 rounded-full`} />
          <Text>harimbu@gmail.com</Text>
        </View>
        <DrawerItemList {...props} />
        <View style={tw`px-4 py-4 border-t border-gray-300 flex flex-row items-center justify-between`}>
          <Text>dark mode</Text>
          <Ionicons name="sunny" size={24} color="black" />
        </View>
      </DrawerContentScrollView>
      <Text style={tw`text-xs text-center text-gray-500`}>중학필수 영단어 1000</Text>
    </View>
  )
}
