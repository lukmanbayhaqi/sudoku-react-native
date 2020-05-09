const initialState = 'unsolved'

export default function validateSudokuReducers(state = initialState, actions) {
  if(actions.type === 'SET_VALIDATE_SUDOKU') {
    return actions.payload
  }
  return state
}