/**
 * Main content. Contains list of labels and list of bookmark cards.
 */

import React from "react"
import PropTypes from "prop-types"
import * as Router from "react-router-dom"
import * as Bootstrap from "reactstrap"

// Polyfill for Object.fromEntries()
import fromEntries from "fromentries"

import LabelList from "./LabelList"
import BookmarkList from "./BookmarkList"

/**
 * Get sorted list of all labels from all bookmarks.
 */
function extractLabels(bookmarks) {
  const allLabels = Object.values(bookmarks).map(bookmark => bookmark.labels).flat()
  const uniqueLabels = new Set(allLabels)
  return Array.from(uniqueLabels).sort()
}

const MainContent = ({allBookmarks, selectedLabel}) => {
  if (Object.keys(allBookmarks).length === 0) {
    return <Bootstrap.Alert color="warning">No bookmarks defined.</Bootstrap.Alert>
  }

  let bookmarks
  if (selectedLabel) {
    // we are showing only bookmarks which have a particular label
    bookmarks = Object.entries(allBookmarks).filter(
      ([id, bookmark]) => bookmark.labels.includes(selectedLabel)
    )
    if (bookmarks.length === 0) {
      // this can happen when the user deletes last bookmark
      // for a selected label, redirect to all bookmarks
      return <Router.Redirect to="/" />
    }
    bookmarks = fromEntries(bookmarks)
  } else {
    bookmarks = allBookmarks
  }

  return (
    <div id="mainContent" className="row">
      <LabelList
        className="col-sm-6"
        labels={extractLabels(allBookmarks)}
        selected={selectedLabel}
      />
      <BookmarkList className="col-sm-6" bookmarks={bookmarks} />
    </div>
  )

}

MainContent.propTypes = {
  allBookmarks: BookmarkList.propTypes.bookmarks,
  selectedLabel: PropTypes.string
}

export default MainContent
