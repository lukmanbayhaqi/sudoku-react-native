const initialState = ''

export default function difficultReducers(state = initialState, actions) {
  if(actions.type === 'SET_DIFFICULTY_LEVEL') return actions.payload
  return state
}