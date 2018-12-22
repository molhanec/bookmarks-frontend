/**
 * Creates Redux store.
 */

import * as Redux from "redux"
import * as Logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import applicationReducer from "./applicationReducer"
import { debug } from "../config"
import validateStateMiddleware from "./stateShape"

const middleware = [ thunkMiddleware ]

if (debug.validateState) {
  middleware.push(validateStateMiddleware)
}

if (debug.reduxActionLogging) {
  middleware.push(Logger.createLogger())
}

const store = Redux.createStore(
  applicationReducer,
  Redux.applyMiddleware(...middleware)
)
export default store
