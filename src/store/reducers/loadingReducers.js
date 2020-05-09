export default function loadingReducers(state = false, actions) {
  if(actions.type === 'SET_LOADING') {
    return actions.payload
  }
  return state
}