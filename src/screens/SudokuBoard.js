import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import CountDown from 'react-native-countdown-component'

import { validateSudoku, fetchSolveSudoku } from '../store/actions'

export default function SudokuBoard() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const backupBoard = useSelector(({ backupBoard }) => backupBoard)
  let sudokuBoard = useSelector(({ sudoku }) => sudoku)
  const loading = useSelector(({ loading }) => loading)
  const validate = useSelector(({ validate }) => validate)
  const players = useSelector(({ players }) => players)
  const difficultyLevel = useSelector(({ difficult }) => difficult)
  
  function submitSudoku() {
    let counter = 0
    sudokuBoard.map(el => {
      if(el.includes(0)) {
        counter++
      }
    })
    if(counter < 1) {
      dispatch(validateSudoku(sudokuBoard))
    } else {
      Alert.alert(
        "Woooo",
        'Selesain dulu bang buset dah',
        [
          {
            text: 'iya iya bawel lu',
            onPress: _ => console.log('wkwkw')
          }
        ]
        )
    }
  }

  if(validate === 'solved') {
    navigation.navigate('WinnerPage')
  } else if (validate === 'broken') {
    Alert.alert(
      "Jawaban lu salah jooo",
      'Awokwowkowkowk Noob',
      [
        {
          text: 'anjir',
          onPress: _ => console.log('wkwkw')
        }
      ]
      )
  }

  function timesUp() {
    Alert.alert(
      "Time's up",
      'Play again?',
      [
        {
          text: 'Yes',
          onPress: _ => navigation.navigate('LandingPage')
        }
      ]
    )
  }
  
  if(loading) {
    return (
      <View style={styles.container}>
        <Text>Please Wait...</Text>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 10, fontSize: 30, fontWeight: 'bold'}}>
        *Rukamaan Sudoku*
      </Text>
      <Text style={{marginBottom: 10, fontSize: 20, fontWeight: '800'}}>
        Welcome {players[0]}
      </Text>
      <Text style={{marginBottom: 5, fontSize: 15, fontWeight: '200'}}>
        Difficulty level : {difficultyLevel}
      </Text>

      <CountDown
        until={60 * 5}
        size={20}
        onFinish={() => timesUp()}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: 'black'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Minute', s: 'Second'}}
        style={{marginBottom: 5}}
      />

      {sudokuBoard.map((el, i) => (
        <View style={styles.boardContainer} key={i}>
          {el.map((element, j) => (
            <TextInput
              style={styles.board}
              onChangeText={text => {
                el[j] = +text
                sudokuBoard[i] = el
              }}
              value={+element > 0 ? `${element}` : null}
              editable={+element > 0 ? false : true}
              key={j}
              maxLength={1}
              keyboardType={'number-pad'}
            />
          ))}
        </View>
      ))}
      <View
        style={{flexDirection: 'row'}}
      >
        <TouchableOpacity
          style={{...styles.btn_submit, marginRight: 10, backgroundColor: 'darkgreen', marginTop: 20}}
          onPress={() => {
            dispatch(fetchSolveSudoku(backupBoard))
          }}
        >
          <Text style={{color: 'white'}}>Solve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn_submit, marginLeft: 10, marginTop: 20}}
          onPress={() => submitSudoku()}
        >
          <Text style={{color: 'white'}}>Submit</Text>
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
  boardContainer: {
    flexDirection: 'row'
  },
  board: {
    width: '10%',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 13,
    borderColor: 'black',
    borderWidth: 1
  },
  btn_submit: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width: '22%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
