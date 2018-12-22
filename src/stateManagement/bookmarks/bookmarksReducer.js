/**
 * Main reducer for the state.bookmarks key.
 */

import * as read from "./readAllBookmarks"
import * as update from "./updateBookmark"
import * as del from "./deleteBookmark"

export function reducer(bookmarks = {}, action) {
  bookmarks = read.reducer(bookmarks, action)
  bookmarks = update.reducer(bookmarks, action)
  bookmarks = del.reducer(bookmarks, action)
  return bookmarks
}
