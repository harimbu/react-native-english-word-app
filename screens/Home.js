import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'
import * as SQLite from 'expo-sqlite'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import tw from 'twrnc'
import Range from '../components/Range'
import db from '../assets/words.json'
import { useRecoilValue } from 'recoil'
import { rangeState } from '../store'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Home() {
  const [words, setWords] = useState([])
  const [english, setEnglish] = useState([])
  const range = useRecoilValue(rangeState)

  // useEffect(() => {
  //   setWords(db.words.filter(item => item.range === range))
  // }, [range])

  useEffect(() => {
    openDatabase()
  }, [])

  useEffect(() => {
    if (words) {
      setEnglish(words.filter(item => item.range === `${range}`))
    }
  }, [range])

  async function openDatabase() {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite')
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require('../assets/words.db')).uri,
      FileSystem.documentDirectory + 'SQLite/words.db'
    )
    const db = SQLite.openDatabase('words.db')

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM words', [], (tx, results) => {
        let items = []
        for (let i = 0; i < results.rows.length; i++) {
          items.push(results.rows.item(i))
        }
        setWords(items)
      })
    })
  }

  console.log(english.length)

  const Item = ({ eng, kor }) => (
    <View style={tw`flex flex-row px-2 py-2`}>
      <View style={tw`w-2/4`}>
        <Text>{eng}</Text>
      </View>
      <View style={tw`w-2/4 flex flex-row items-center justify-between`}>
        <Text>{kor}</Text>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity>
            <Ionicons name="eye" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`ml-2`}>
            <Ionicons name="add" size={22} />
          </TouchableOpacity>
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
          data={english}
          renderItem={renderItem}
          keyExtractor={item => item.no}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
