import * as config from "../../config"
import * as message from "../info/message"
import * as progress from "../info/progress"

const SUCCESS = "bookmarks.readAll.success"
const success = bookmarks => ({
  type: SUCCESS,
  bookmarks
})

export const readAllBookmarks = () => {
  return dispatch => {
    dispatch(progress.show())
    return config.dataProvider.read()
      .then(
        bookmarks => {
          dispatch(progress.hide())
          dispatch(success(bookmarks))
        },
        errorInfo => {
          dispatch(progress.hide())
          dispatch(message.error(errorInfo))
        }
      )
  }
}

export function reducer(bookmarks = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return action.bookmarks
    default:
      return bookmarks
  }
}
