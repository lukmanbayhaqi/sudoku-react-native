const initialState = []

export default function playersReducers(state = initialState, actions) {
  if(actions.type === 'SET_PLAYER_NAME') {
    return [actions.payload, ...state]
  }
  return state
}