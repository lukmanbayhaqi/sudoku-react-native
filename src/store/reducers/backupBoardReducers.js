const initialState = []

export default function backupBoardReducers(state = initialState, actions) {
  if(actions.type === 'SET_BACKUP_BOARD') return actions.payload
  return state
}