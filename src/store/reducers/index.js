import { combineReducers } from 'redux'

import sudokuReducers from './sudokuReducers.js'
import loadingReducers from './loadingReducers.js'
import validateSudokuReducers from './validateSudokuReducers.js'
import playersReducers from './playersReducers.js'
import difficultReducers from './difficultReducers.js'
import backupBoardReducers from './backupBoardReducers.js'
import leaderBoardReducers from './leaderBoardReducers.js'

const reducers = combineReducers({
  sudoku: sudokuReducers,
  loading: loadingReducers,
  validate: validateSudokuReducers,
  players: playersReducers,
  difficult: difficultReducers,
  backupBoard: backupBoardReducers,
  leaderBoard: leaderBoardReducers
})

export default reducers