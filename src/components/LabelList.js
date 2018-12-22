/**
 * List of labels.
 */

import React from "react"
import PropTypes from "prop-types"
import * as Router from 'react-router-dom'
import * as Bootstrap from "reactstrap"

const Label = ({title, selected, href}) => {
  if (!href) href = `/label/${title}`
  if (selected) {
    return (
      <Bootstrap.ListGroupItem className="px-1 py-0 text-info">
        {title}
      </Bootstrap.ListGroupItem>
    )
  } else {
    return (
      <Bootstrap.ListGroupItem className="px-1 py-0">
        <Router.Link to={href} className="d-block text-secondary">
          {title}
        </Router.Link>
      </Bootstrap.ListGroupItem>
    )
  }
}

const LabelList = ({labels, selected}) => (
  <div className="col-sm-3 mb-3">
    <Bootstrap.ListGroup>
      <Bootstrap.ListGroupItem className="px-1 py-0 bg-dark text-light text-center">Labels</Bootstrap.ListGroupItem>
      <Label
        title="Show All"
        selected={!selected}
        href="/"
      />
      {labels.map(
        (label, index) => (
          <Label
            key={index}
            title={label}
            selected={label === selected}
          />
        )
      )}
    </Bootstrap.ListGroup>
  </div>
)

LabelList.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  selected: PropTypes.string
}

export default LabelList
