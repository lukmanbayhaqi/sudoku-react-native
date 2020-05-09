const initalState = []

export default function sudokuReducers(state = initalState, actions) {
  if(actions.type === 'SET_SUDOKU') {
    return actions.payload
  }
  return state
}