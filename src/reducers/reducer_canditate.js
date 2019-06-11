import arr from '../data/canditates.json'

export default function(state = null, action){
  if (!state){
    state = arr
  }
  return state
}