import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

import LandingPage from './LandingPage.js'
import LeaderBoard from './LeaderBoard.js'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function landingPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

function leaderBoard() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={landingPage}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"home"} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={leaderBoard}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"list-ol"} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}