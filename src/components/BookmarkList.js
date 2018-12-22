/**
 * List of bookmarks.
 */

import React from "react"
import PropTypes from "prop-types"

import Bookmark from "./Bookmark"

const BookmarkList = ({bookmarks}) => (
  <div className="col-sm-9">
    {Object.entries(bookmarks).map(
      ([id, bookmark]) => (
        <Bookmark key={id} id={id} {...bookmark} />
      )
    )}
  </div>
)

BookmarkList.propTypes = {
  // id => bookmark map
  bookmarks: PropTypes.objectOf(
    PropTypes.shape(Bookmark.propTypes)
  ).isRequired
}

export default BookmarkList
