import { ADD_CANDIDATE, RESET_CANDIDATES } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case ADD_CANDIDATE:
      let position = state.length + 1
      let { name, party, img } = action.payload
      const newName = { name, position, party, img}
      const newState = [...state, newName]
    
      return newState
      
    case RESET_CANDIDATES:
      const emptyArr = []
      return emptyArr
    
    default:
      return state
  
  }
}