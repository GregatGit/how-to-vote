import { combineReducers } from "redux";
import canditates from './reducer_canditate'
import candidateList from './reducer_candidateList'

const rootReducer = combineReducers({
  canditates,
  candidateList
});

export default rootReducer;
