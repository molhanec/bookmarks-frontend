import * as config from "../../config"
import * as message from "../info/message"
import * as progress from "../info/progress"

const SUCCESS = "bookmarks.delete.success"
const success = (id) => ({
  type: SUCCESS,
  id
})

export const deleteBookmark = (id, title) => {
  return dispatch => {
    dispatch(progress.show())
    return config.dataProvider.delete(id)
      .then(
        () => {
          dispatch(progress.hide())
          dispatch(message.success(`Bookmark '${title}' deleted`))
          dispatch(success(id))
        },
        errorInfo => {
          dispatch(progress.hide())
          dispatch(message.error(`The bookmark '${title}' was not deleted: ${errorInfo}`))
        }
      )
  }
}

export function reducer(bookmarks, action) {
  switch (action.type) {
    case SUCCESS:
      const bookmarksCopy = {...bookmarks}
      delete bookmarksCopy[action.id]
      return bookmarksCopy
    default:
      return bookmarks
  }
}
