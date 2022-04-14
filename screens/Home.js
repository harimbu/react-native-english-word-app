import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import tw from 'twrnc'
import Range from '../components/Range'
import db from '../assets/words.json'
import { useRecoilValue } from 'recoil'
import { rangeState } from '../store'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Hime() {
  const [words, setWords] = useState([])
  const range = useRecoilValue(rangeState)

  useEffect(() => {
    setWords(db.words.filter(item => item.range === range))
  }, [range])

  const Item = ({ eng, kor }) => (
    <View style={tw`flex flex-row p-2`}>
      <View style={tw`w-2/4`}>
        <Text>{eng}</Text>
      </View>
      <View style={tw`w-2/4 flex flex-row items-center justify-between`}>
        <Text>{kor}</Text>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity>
            <Ionicons name="eye" size={22} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={tw`ml-2`}>
            <Ionicons name="add" size={22} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  )

  const renderItem = ({ item }) => <Item eng={item.eng} kor={item.kor} />

  return (
    <View style={tw`bg-white`}>
      <Range />
      <View style={tw`p-3`}>
        <FlatList
          data={words}
          renderItem={renderItem}
          keyExtractor={item => item.no}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
