import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { fetchSudoku } from '../store/actions'

export default function SelectLevelPage() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function fetchDifficult(payload) {
    dispatch(fetchSudoku(payload))
    navigation.navigate('SudokuScreen')
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.textDifficult}
      >Select Difficulty level</Text>
      <View style={{flexDirection: 'row', margin: 20, marginTop: 5}}>
        <TouchableOpacity
          style={{...styles.btn_submit, margin: 5, backgroundColor: 'maroon'}}
          onPress={() => fetchDifficult('easy')}
        >
          <Text style={{color: 'white'}}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn_submit, margin: 5, backgroundColor: 'maroon', width: '23%'}}
          onPress={() => fetchDifficult('medium')}
        >
          <Text style={{color: 'white'}}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn_submit, margin: 5, backgroundColor: 'maroon'}}
          onPress={() => fetchDifficult('hard')}
        >
          <Text style={{color: 'white'}}>Hard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn_submit, margin: 5, backgroundColor: 'maroon', width: '23%'}}
          onPress={() => fetchDifficult('random')}
        >
          <Text style={{color: 'white'}}>Random</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_submit: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width: '22%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDifficult: {
    fontWeight: '500',
    fontSize: 20
  }
})