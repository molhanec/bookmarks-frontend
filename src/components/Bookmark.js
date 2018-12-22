/**
 * Single bookmark card.
 */

import React from "react"
import PropTypes from "prop-types"
import * as Redux from "react-redux"
import * as Router from 'react-router-dom'
import * as Bootstrap from "reactstrap"

import DeleteButton from "./DeleteButton"

import bookmarkShape from "../stateManagement/bookmarks/bookmarksShape"
import { deleteBookmark } from "../stateManagement/bookmarks/deleteBookmark"

const Label = ({label}) => (
  <Bootstrap.Badge className="mr-1">{label}</Bootstrap.Badge>
)

class Bookmark extends React.Component {

  onDelete = () =>
    this.props.dispatch(deleteBookmark(this.props.id, this.props.title))

  render() {
    const {id, title, url, labels, history} = this.props
    return (
      <Bootstrap.Card className="mb-3">
        <Bootstrap.CardBody>
          <div className="d-flex flex-row justify-content-between align-items-baseline">
            <div>
              <Bootstrap.CardLink target="_blank" href={url}>{title}</Bootstrap.CardLink>
            </div>
            <div className="d-flex flex-row flex-nowrap">
              <Bootstrap.Button className="ml-2" color="info"
                onClick={() => history.push(`/edit/${id}`)}
              >
                Edit
              </Bootstrap.Button>
              <DeleteButton onDelete={this.onDelete} />
            </div>
          </div>
        </Bootstrap.CardBody>
        <Bootstrap.CardFooter>
          {
            labels.map(
              (label, index) =>
                <Label key={index} label={label}></Label>
            )
          }
        </Bootstrap.CardFooter>

      </Bootstrap.Card>
    )
  }
}

Bookmark.propTypes = {
  ...bookmarkShape,
  id: PropTypes.string.isRequired
}

export default Router.withRouter(Redux.connect()(Bookmark))
