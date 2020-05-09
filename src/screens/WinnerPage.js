import React, { useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useSelector, useDispatch } from 'react-redux'

import { inputLeaderBoard } from '../store/actions'

export default function LandingPage() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const players = useSelector(({ players }) => players)

  dispatch(inputLeaderBoard(players[0]))

  return (
    <View style={styles.landing}>
      <Text style={styles.textHeader} >Congratulation {players[0]} you</Text>
      <Text style={styles.textHeader} >have finished *Rukamaan Sudoku*</Text>
      <TouchableOpacity
        style={styles.btn_submit}
        onPress={_ => navigation.navigate('LandingPage')}
      >
        <Text style={{color: 'white'}}>Play Again?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox : {
    height: 40,
    width: '55%',
    backgroundColor: 'white',
    padding: 10
  },
  textHeader: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10
  },
  btn_submit: {
    backgroundColor: 'royalblue',
    padding: 10,
    marginTop: 10,
    borderRadius: 10
  }
})