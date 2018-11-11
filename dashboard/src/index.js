import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import App from './components/App/App'
import './index.css'

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)