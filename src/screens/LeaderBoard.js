import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useSelector } from 'react-redux'

export default function LandingPage() {
  const navigation = useNavigation()
  const leaderBoard = useSelector(({ leaderBoard }) => leaderBoard)

  return (
    <View style={styles.landing}>
      <Text style={styles.textHeader}>LEADERBOARD</Text>
      <View style={{marginTop: 20}}>
        {leaderBoard.map((e, i) => (
          <Text style={styles.textBody} key={i} >{`${i + 1}. ${e}`}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    backgroundColor: 'gold',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 5
  },
  textBody: {
    fontWeight: '500',
    fontSize: 20
  }
})