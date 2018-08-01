import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import './App.css'
import { Paper } from './components'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Paper />
    </Provider>
  </div>
)

export default App
