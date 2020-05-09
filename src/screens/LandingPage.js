import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import Constants from "expo-constants";

import { inputPlayer, setValidateSudoku } from '../store/actions'

export default function LandingPage() {
  const [username, setUsername] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()

  function handlePress() {
    if(username.length > 0) {
      dispatch(inputPlayer(username))
      dispatch(setValidateSudoku('unsolved'))
      navigation.navigate('LevelPage')
      setUsername('')
    }
  }

  return (
    <>
      <View style={styles.landing}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          Welcome to
        </Text>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 100}}>
          *Rukamaan Sudoku*
        </Text>
        <Text style={styles.textHeader} >Input Your Username</Text>
        <TextInput
          style={styles.inputBox}
          placeholder={'Your Name'}
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TouchableOpacity
          style={styles.btn_submit}
          onPress={_ => handlePress()}
        >
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    backgroundColor: 'gold',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 70
  },
  inputBox : {
    height: 40,
    width: '55%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },
  textHeader: {
    fontWeight: 'bold',
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