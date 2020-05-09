const initialState = []

export default function solveSudokuReducers(state = initialState, actions) {
  if(actions.type === 'SET_SOLVE_SUDOKU') return actions.payload
  return state
}