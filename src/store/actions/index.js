import axios from 'axios'

export function fetchSudoku(payload) {
  return (dispatch) => {
    dispatch({type: 'SET_DIFFICULTY_LEVEL', payload})
    dispatch({type: 'SET_LOADING', payload: true})
    axios({
      method: 'get',
      url: 'https://sugoku.herokuapp.com/board?difficulty=' + payload
    })
      .then(({ data }) => {
        let board = []

        data.board.forEach(el => {
          board.push(el.slice())
        })

        dispatch({type: 'SET_SUDOKU', payload: data.board})
        dispatch({type: 'SET_BACKUP_BOARD', payload: board})
      })
      .catch(console.log)
      .finally(_ => dispatch({type: 'SET_LOADING', payload: false}))
  }
}

export function fetchSolveSudoku(payload) {
  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
  const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');
  
  return (dispatch) => {
    axios.post('https://sugoku.herokuapp.com/solve', encodeParams({board: payload}))
      .then(({ data }) => {
        dispatch({type: 'SET_SUDOKU', payload: data.solution})
      })
      .catch(console.warn)
  }
}

export function validateSudoku(payload) {
  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
  const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

  return (dispatch => {
    dispatch({type: 'SET_LOADING', payload: true})
    axios.post('https://sugoku.herokuapp.com/validate', encodeParams({board: payload}))
      .then(({ data }) => {
        dispatch({ type: 'SET_VALIDATE_SUDOKU', payload: data.status })
      })
      .catch(console.log)
      .finally(_ => dispatch({type: 'SET_LOADING', payload: false}))
  })
}

export function setValidateSudoku(payload) {
  return { type: 'SET_VALIDATE_SUDOKU', payload }
}

export function inputPlayer(payload) {
  return { type: 'SET_PLAYER_NAME', payload }
}

export function inputLeaderBoard(payload) {
  return { type: 'SET_LEADERBOARD', payload}
}