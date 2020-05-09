const initalState = []

export default function leaderBoardReducers(state = initalState, actions) {
  if(actions.type === 'SET_LEADERBOARD') return [...state, actions.payload]
  return state 
}