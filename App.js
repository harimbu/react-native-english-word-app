import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import Router from './routes/Router'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <RecoilRoot>
      <View style={tw`flex-1`}>
        <Router />
      </View>
    </RecoilRoot>
  )
}
