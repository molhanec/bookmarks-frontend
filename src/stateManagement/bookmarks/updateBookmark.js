import * as config from "../../config"
import * as message from "../info/message"
import * as progress from "../info/progress"

const SUCCESS = "bookmarks.update.success"
const success = (id, bookmark) => ({
  type: SUCCESS,
  id,
  bookmark
})

export const updateBookmark = (id, bookmark, history) => {
  return dispatch => {
    dispatch(progress.show())
    return config.dataProvider.update(id, bookmark)
      .then(
        () => {
          dispatch(progress.hide())
          dispatch(message.success(`Bookmark '${bookmark.title}' updated`))
          dispatch(success(id, bookmark))
          history.goBack()
        },
        errorInfo => {
          dispatch(progress.hide())
          dispatch(message.error(`The bookmark '${bookmark.title}' was not updated: ${errorInfo}`))
        }
      )
  }
}

export function reducer(bookmarks = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {...bookmarks, [action.id]: action.bookmark}
    default:
      return bookmarks
  }
}
