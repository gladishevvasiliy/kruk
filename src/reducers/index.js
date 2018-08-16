import { combineReducers } from 'redux'
import paperReducer from './paperReducer'
import symbolsReducer from './symbolsReducer'


const rootReducer = combineReducers({
  paper: paperReducer,
  symbols: symbolsReducer,
})

export default rootReducer
