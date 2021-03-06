import React from 'react'
import { createStore } from 'redux'
import { Route, Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { Paper } from './components'
import { withErrorHandling, DivWithErrorHandling } from './utils'
import './App.css'
import './res/icons/style.css'


const history = hashHistory
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

const App = () => (
  <React.Fragment>
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Route path="/" component={Paper} />
        </Router>
      </div>
    </Provider>
  </React.Fragment>
)

export default App
