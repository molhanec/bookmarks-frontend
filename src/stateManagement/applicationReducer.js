/**
 * Main Redux reducer for the whole application.
 */

import * as Redux from "redux"

import * as bookmarks from "./bookmarks/bookmarksReducer"
import * as info from "./info/infoReducer"

const applicationReducer = Redux.combineReducers({
  bookmarks: bookmarks.reducer,
  info: info.reducer
})

export default applicationReducer
