/**
 * Form shared by add/edit bookmark.
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import * as Bootstrap from "reactstrap"
import * as Router from 'react-router-dom'

import bookmarkShape from "../stateManagement/bookmarks/bookmarksShape"
import { updateBookmark } from "../stateManagement/bookmarks/updateBookmark"

class BookmarkForm extends Component {

  constructor(props) {
    super(props)

    if (props.bookmark) {
      // Editing existing bookmark
      this.state = {
        title: props.bookmark.title,
        url: props.bookmark.url,
        labels: props.bookmark.labels.join(", ")
      }
    } else {
      // Adding new bookmark
      this.state = {
        title: "",
        url: "https://",
        labels: props.selectedLabel || ""
      }
    }

    this.initial = this.state
  }

  onTitleChange = event =>
    this.setState({title: event.target.value})

  onUrlChange = event =>
    this.setState({url: event.target.value})

  onLabelsChange = event =>
    this.setState({labels: event.target.value})

  onSave = () => {
    const {title, url} = this.state
    const labels = this.labelsToArray()
    const bookmark = {title, url, labels}
    this.props.dispatch(updateBookmark(this.props.id, bookmark, this.props.history))
  }

  onReset = () =>
    this.setState({
      title: this.initial.title,
      url: this.initial.url,
      labels: this.initial.labels
    })

  labelsToArray = () =>
    this.state.labels.split(",").map(label => label.trim())

  duplicateLabels = () => {
    const labels = this.labelsToArray()
    const uniqueLabels = new Set(labels)
    return uniqueLabels.size !== labels.length
  }

  render() {

    const {title, url, labels} = this.state
    const trimmedTitle  = title.trim()
    const trimmedUrl    = url.trim()
    const trimmedLabels = labels.trim()

    const emptyTitle = trimmedTitle === ""
    const emptyUrl   = trimmedUrl === ""

    // Elementary validation.
    // However the most common URL error is omission of a protocol.
    const validUrl =  trimmedUrl.slice(0, 7).toLowerCase() === "http://" ||
                      trimmedUrl.slice(0, 8).toLowerCase() === "https://"

    const noChanges =
      trimmedTitle  === this.initial.title &&
      trimmedUrl    === this.initial.url   &&
      trimmedLabels === this.initial.labels

    const duplicateLabels = this.duplicateLabels()

    const invalidToSave = emptyTitle || emptyUrl || !validUrl || noChanges || duplicateLabels

    return (
      <Bootstrap.Form>
        <Bootstrap.FormGroup>
          <Bootstrap.Label for="title">Title</Bootstrap.Label>
          <Bootstrap.Input id="title" type="text"
            value={title}
            onChange={this.onTitleChange}
            invalid={emptyTitle}
          />
          {emptyTitle && <Bootstrap.FormFeedback>The title cannot be empty</Bootstrap.FormFeedback>}
        </Bootstrap.FormGroup>
        <Bootstrap.FormGroup>
          <Bootstrap.Label for="url">URL</Bootstrap.Label>
          <Bootstrap.Input id="url" type="text"
            value={url}
            onChange={this.onUrlChange}
            invalid={emptyUrl || !validUrl  }
          />
          {emptyUrl && <Bootstrap.FormFeedback>The URL cannot be empty</Bootstrap.FormFeedback>}
          {!emptyUrl && !validUrl && <Bootstrap.FormFeedback>The URL is not valid. Please make sure it starts with either http:// or https://</Bootstrap.FormFeedback>}
        </Bootstrap.FormGroup>
        <Bootstrap.FormGroup>
          <Bootstrap.Label for="labels">Labels</Bootstrap.Label>
          <Bootstrap.Input id="labels" type="text"
            value={labels}
            onChange={this.onLabelsChange}
            invalid={duplicateLabels}
          />
          <Bootstrap.FormText>Comma separated list of labels</Bootstrap.FormText>
          {duplicateLabels && <Bootstrap.FormText>Duplicate labels</Bootstrap.FormText>}
        </Bootstrap.FormGroup>

        <Bootstrap.Button color="primary"
          disabled={invalidToSave}
          onClick={this.onSave}
        >Save</Bootstrap.Button>
        <Bootstrap.Button color="secondary" className="ml-2"
          disabled={noChanges}
          onClick={this.onReset}
        >Reset</Bootstrap.Button>

        {noChanges && <Bootstrap.FormText>No changes detected.</Bootstrap.FormText>}
      </Bootstrap.Form>
    )
  }
}


BookmarkForm.propTypes = {
  bookmark: PropTypes.shape(bookmarkShape), // not required for adding new
  selectedLabel: PropTypes.string // will prefill the label text field for new a bookmark
}

export default Router.withRouter(BookmarkForm)
