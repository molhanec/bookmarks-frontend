/**
 * Exports Redux middleware which uses React PropTypes
 * for Redux state validation.
 *
 * See this article for explanation:
 * https://www.linkedin.com/pulse/using-proptypes-redux-state-validation-michal-molhanec/
 */
import PropTypes from "prop-types"

import bookmarkShape from "./bookmarks/bookmarksShape"
import infoShape from "./info/infoShape"

export const stateShape = {
  // id => bookmark
  bookmarks: PropTypes.objectOf(PropTypes.shape(bookmarkShape)).isRequired,
  info: PropTypes.shape(infoShape)
}

const checkShape = (state, actionDescription) => {
  PropTypes.checkPropTypes(
    stateShape,
    state,
    "Redux state validation",
    actionDescription
  )
}

const validateStateMiddleware = store => next => action => {
  checkShape(store.getState(), `Before action: ${action.type}`)
  const result = next(action)
  checkShape(store.getState(), `After action: ${action.type}`)
  return result
}
export default validateStateMiddleware
