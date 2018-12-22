/**
 * Delete button using http://bootstrap-confirmation.js.org/
 * Sadly it does not come with a React wrapper.
 * But it looks so cool :)
 */

import React from "react"
import PropTypes from "prop-types"
import jQuery from "jquery"
import "bootstrap-confirmation2"

class DeleteButton extends React.Component {

  componentDidMount() {
    jQuery(this.buttonRef).confirmation({
      rootSelector: this.buttonRef,
      popout: true,
      singleton: true,
      onConfirm: this.onConfirm
    })
  }

  onConfirm = () =>
    this.props.onDelete()

  render() {
    return (
      <button
        ref={el => this.buttonRef = el}
        className="btn btn-danger ml-2"
      >
        Delete
      </button>
    )
  }
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default DeleteButton
