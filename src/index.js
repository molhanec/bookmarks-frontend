import React from "react"
import ReactDOM from "react-dom"
import * as Redux from "react-redux"
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from "./serviceWorker"

import App from "./components/App"
import store from "./stateManagement/store"

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Redux.Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Redux.Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
