'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store.jsx'
import Root from './components/Root'
import { BrowserRouter as Router, browserHistory} from 'react-router'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Root/>
    </Router>
  </Provider>,
  document.getElementById('main')
)