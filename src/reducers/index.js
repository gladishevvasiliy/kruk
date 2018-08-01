import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import paperReducer from './paperReducer'
import symbolsReducer from './symbolsReducer'


const rootReducer = combineReducers({
  paper: paperReducer,
  form: formReducer,
  symbols: symbolsReducer,
})

export default rootReducer
