import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'
import tw from 'twrnc'
import { useRecoilState } from 'recoil'
import { rangeState } from '../store'

export default function Range() {
  const [range, setRange] = useRecoilState(rangeState)
  const [selected, setSelected] = useState('1 ~ 100')

  const DATA = [
    { title: '1 ~ 100' },
    { title: '101 ~ 200' },
    { title: '201 ~ 300' },
    { title: '301 ~ 400' },
    { title: '401 ~ 500' },
    { title: '501 ~ 600' },
    { title: '601 ~ 700' },
    { title: '701 ~ 800' }
  ]

  const Item = ({ title }) => (
    <TouchableOpacity
      onPress={() => {
        setSelected(title)
        setRange(title)
      }}
    >
      {/* <Text style={title === selected ? styles.alphabetContainerSelected : styles.alphabetContainer}>{title}</Text> */}
      <Text
        style={tw`text-xs px-3 py-2 rounded-full mx-2 my-4 ${
          title === selected ? 'bg-gray-500 text-white' : 'bg-gray-200'
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )

  const renderItem = ({ item }) => <Item title={item.title} />

  console.log(range)

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  alphabetContainer: {
    width: 24,
    height: 24,
    marginLeft: 14,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  alphabetContainerSelected: {
    width: 24,
    height: 24,
    marginLeft: 14,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
})
