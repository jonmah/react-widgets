import { POPULATE, SELECT } from './actions'

const initialState = {
  selected: null,
  songs: [
    { duration: '4:05', title: 'Lemon Tree' },
    { duration: '4:15', title: 'Peaches' },
    { duration: '3:35', title: 'Yellow' },
    { duration: '4:00', title: 'Sirens' },
    { duration: '3:25', title: 'Simple Song' },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULATE:
      return state
    case SELECT:
      return { ...state, selected: action.data }
    default:
      return state
  }
}
