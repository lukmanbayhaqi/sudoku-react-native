import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './src/store/reducers'

import SudokuScreen from './src/screens/SudokuBoard.js'
import LandingPage from './src/screens/LandingPage.js'
import SelectLevelPage from './src/screens/SelectLevelPage.js'
import WinnerPage from './src/screens/WinnerPage.js'
import BottomTabs from './src/screens/BottomTabs.js'

const store = createStore(reducer, applyMiddleware(thunk))
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WinnerPage"
            component={WinnerPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LevelPage"
            component={SelectLevelPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SudokuScreen"
            component={SudokuScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}