/**
 * Banner for displaying a message.
 */

import React from "react"
import PropTypes from "prop-types"
import * as Redux from "react-redux"
import * as Bootstrap from "reactstrap"

import * as message from "../stateManagement/info/message"

class Message extends React.Component {

  onCloseClick = () =>
    this.props.dispatch(message.hide())

  render()  {
    const {children, color} = this.props
    return (
      <Bootstrap.Card id="message" body inverse color={color} className="mb-4 flex-row justify-content-between">
        {children}
        <Bootstrap.Button close onClick={this.onCloseClick} />
      </Bootstrap.Card>
    )
  }
}

Message.propTypes = {
  color: PropTypes.string
}

export default Redux.connect()(Message)
